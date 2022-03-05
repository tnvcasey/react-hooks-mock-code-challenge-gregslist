import React, { useState } from "react";
import Search from "./Search";

function Header( {search, searchChange}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchChange={searchChange} search={search}/>
    </header>
  );
}

export default Header;
