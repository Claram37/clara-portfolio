import { Link } from "react-router";
import { Download } from "lucide-react";
import Button from "@/components/shared/Button";
import site from "@/data/site";

const links = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Nav = () => {
  return (
    <header>
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
              className="text-base leading-5 transition-colors hover:text-muted-foreground max-sm:hidden"
            >
              {label}
            </Link>
          ))}
          <Button href={site.resume} size="sm">
            Resume
            <Download className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
