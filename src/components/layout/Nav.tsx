import { Link, useMatches } from "react-router";
import { Download } from "lucide-react";
import Button from "@/components/shared/Button";
import site from "@/data/site";
import { cn } from "@/lib/utils";

const links = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

// A page that's dark from the top (Pride) sets handle = { darkNav: true } on its route
export interface NavHandle {
  darkNav?: boolean;
}

const Nav = () => {
  const darkNav = useMatches().some(
    (match) => (match.handle as NavHandle | undefined)?.darkNav,
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
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={cn(
                "text-base leading-5 transition-colors max-sm:hidden",
                darkNav
                  ? "hover:text-on-dark-muted"
                  : "hover:text-muted-foreground",
              )}
            >
              {label}
            </Link>
          ))}
          <Button
            href={site.resume}
            size="sm"
            variant={darkNav ? "light" : "dark"}
          >
            Resume
            <Download className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
