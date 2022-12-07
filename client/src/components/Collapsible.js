import React, { useState } from "react";

function Collapsible() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible">
      <button className="toggle">Toggle</button>
      {isOpen && <div className="content">Some content</div>}
    </div>
  );
}

export default Collapsible;
