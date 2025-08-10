import React, { useState, useLayoutEffect, useEffect } from "react";

export default function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    console.log("Layout Effect");
  }, [isVisible]);

  useEffect(() => {
    console.log("Effect");
  }, [isVisible]);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Message" : "Show Message"}
      </button>
      {isVisible && <p>Hello, this is a visible message!</p>}
    </div>
  );
}
