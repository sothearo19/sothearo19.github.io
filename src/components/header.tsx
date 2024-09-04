import * as React from "react";

export default function Header() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];
  return (
    <header className="sticky top-0 drop-shadow">
      <div className="container py-4">
        <nav>
          <ul className="flex gap-4">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="my-2.5">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
