import * as React from "react";
import Header from "../components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div
        className="fixed inset-0 pointer-events-none mix-blend-hard-light"
        style={{ backgroundImage: "url(/noise.png)" }}
      ></div>
      <main className="container py-4">{children}</main>
    </>
  );
}
