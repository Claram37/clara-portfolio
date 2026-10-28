import type { MouseEvent } from "react";
import { Link, NavLink, useMatches } from "react-router";
import { Download } from "lucide-react";
import Button from "@/components/shared/Button";
import site from "@/data/site";
import { cn } from "@/lib/utils";

// Work and Contact are sections: on the homepage, and Contact at the bottom of every page
const links = [
  { to: "/#work", label: "Work", section: "work" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/#contact", label: "Contact", section: "contact" },
];

// A section on this page glides into view (jumps for reduced motion). Otherwise the link opens the homepage at it
const glide = (event: MouseEvent<HTMLAnchorElement>, section: string) => {
  const target = document.getElementById(section);
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({
    behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
  });
};

// A page that's dark from the top (Pride) sets handle = { darkNav: true } on its route
export interface NavHandle {
  darkNav?: boolean;
}

const Nav = () => {
  const darkNav = useMatches().some(
    (match) => (match.handle as NavHandle | undefined)?.darkNav,
  );
  const linkClass = cn(
    "text-base leading-5 transition-colors max-sm:hidden",
    darkNav ? "hover:text-on-dark-muted" : "hover:text-muted-foreground",
  );

  return (
    <header className={cn(darkNav && "focus-light bg-pride text-paper")}>
      <nav
        aria-label="Main"
        className="flex items-center justify-between gap-6 px-nav py-6"
      >
        <Link
          to="/"
          className="font-display text-xl font-semibold whitespace-nowrap"
        >
          {site.name}
        </Link>
        <div className="flex items-center gap-8">
          {/* The page you're on is semibold */}
          {links.map(({ to, label, section }) =>
            section ? (
              <Link
                key={to}
                to={to}
                onClick={(event) => glide(event, section)}
                className={linkClass}
              >
                {label}
              </Link>
            ) : (
              <NavLink
                key={to}
                to={to}
                end
                className={({ isActive }) =>
                  cn(linkClass, isActive && "font-semibold")
                }
              >
                {label}
              </NavLink>
            ),
          )}
          <Button
            href={site.resume}
            size="sm"
            variant={darkNav ? "light" : "dark"}
          >
            <span>
              Resume<span className="max-sm:sr-only"> (PDF)</span>
            </span>
            <Download className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
