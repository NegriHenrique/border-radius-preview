import React, { useState, useEffect } from "react";
import "./App.css";
import { FaCopy } from "react-icons/fa";

import { CopyToClipboard } from "react-copy-to-clipboard";

function App() {
  const [topLeft, setTopLeft] = useState(0);
  const [topRight, setTopRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);
  const [styleCssBorderRadius, setStyleCssBorderRadius] = useState("");
  const [styleCssWebkit, setStyleCssWebkit] = useState("");
  const [styleCssMoz, setStyleCssMoz] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setStyleCssBorderRadius(
      `border: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft};`
    );
    setStyleCssWebkit(
      `-webkit-border: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft};`
    );
    setStyleCssMoz(
      `-moz-border: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft};`
    );
  }, [topLeft, topRight, bottomRight, bottomLeft]);

  return (
    <div className="App">
      <h1>Border Radius Preview</h1>
      <div className="box-wrapper">
        <div
          className="box"
          style={{
            borderTopLeftRadius: `${topLeft}px`,
            borderTopRightRadius: `${topRight}px`,
            borderBottomLeftRadius: `${bottomLeft}px`,
            borderBottomRightRadius: `${bottomRight}px`
          }}
        >
          <p>{styleCssBorderRadius}</p>
          <p>{styleCssWebkit}</p>
          <p>{styleCssMoz}</p>
        </div>
        <input
          type="text"
          className="top-left"
          title="top-left"
          value={topLeft}
          onChange={e => setTopLeft(e.target.value)}
        />
        <input
          type="text"
          className="top-right"
          title="top-right"
          value={topRight}
          onChange={e => setTopRight(e.target.value)}
        />
        <input
          type="text"
          className="bottom-left"
          title="bottom-left"
          value={bottomLeft}
          onChange={e => setBottomLeft(e.target.value)}
        />
        <input
          type="text"
          className="bottom-right"
          title="bottom-right"
          value={bottomRight}
          onChange={e => setBottomRight(e.target.value)}
        />
        <CopyToClipboard
          text={`${styleCssBorderRadius} \n ${styleCssWebkit} \n ${styleCssMoz}`}
          onCopy={() => {
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 2000);
          }}
          className="copy-to-clipboard"
        >
          <span>
            Copy to clipboard <FaCopy size={15} />
            {copied && <span className="copied"> Copied! </span>}
          </span>
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default App;
