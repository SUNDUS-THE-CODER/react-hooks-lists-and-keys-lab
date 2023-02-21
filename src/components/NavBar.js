import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map((key) => (
        <a key={key} href={`#${key}`}>{key}</a>
      ))}
    </nav>
  );
}

export default NavBar;
