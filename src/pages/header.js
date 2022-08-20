import * as React from "react";
import "../styles/index.scss";

const Header = () => {
    return (
<header>
<div className="titlebox">
<title>Riddargarden B&amp;B</title>
 <h1 className="titlebox__main">Riddargarden<br />
  <span className="titlebox__sub">Bed &amp; Breakfast</span>
  </h1>
  </div>
  <div className="tagline">
  <div className="copybox">
    <p className="copybox__tagline">Kommer snart! / Coming soon!</p>
  </div>
  </div>
</header>
    )
}

export default Header