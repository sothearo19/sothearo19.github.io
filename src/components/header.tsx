import { Link } from "gatsby";
import * as React from "react";

export default function Header() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
  ];
  return (
    <header className="sticky top-0 border-b drop-shadow-sm">
      <div className="container py-4">
        <nav>
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link.name}>
                <Link className="py-2.5" to={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
