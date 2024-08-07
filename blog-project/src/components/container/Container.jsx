// container always exist in production based websites
// this is where you define the styling property of website
// meaning just  for me its useless

import React from "react";

function Container({ children }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      Container
      {children}
    </div>
  );
}

export default Container;
