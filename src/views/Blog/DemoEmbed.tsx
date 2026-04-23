"use client";

import { useState } from "react";

export default function DemoEmbed() {
  const [count, setCount] = useState(0);

  return (
    <div className="demo-embed">
      <div className="demo-embed-frame">
        <div className="demo-label">LIVE / Inline MDX widget</div>
        <div className="demo-stage">
          <button className="demo-btn" onClick={() => setCount((c) => c + 1)}>
            Click me
          </button>
          <div className="demo-count">
            Clicks: <span>{count}</span>
          </div>
        </div>
      </div>
      <figcaption className="demo-caption">
        Figure 1. A React counter compiled from MDX, rendered at build time.
      </figcaption>
    </div>
  );
}
