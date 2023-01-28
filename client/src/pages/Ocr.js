import React, { useState, useEffect } from "react";
import Tesseract from "tesseract.js";

const Ocr = () => {
  const [file, setFile] = useState(null);
  const [meds, setMeds] = useState(null);

  function filesubmit(e) {
    setFile(e.target.files[0]);
  }

  useEffect(() => {}, [meds]);

  async function processImage() {
    console.log(file);
    await Tesseract.recognize(file, "eng", {
      logger: (m) => console.log(m),
    }).then(({ data: { text } }) => {
      const txt = text.split("\n");
      txt.pop();
      console.log(txt);
      setMeds(txt);
    });
  }

  return (
    <div>
      <input type="file" id="customFile" onChange={filesubmit} />
      <button
        type="button"
        className="bg-slate-400"
        onClick={() => {
          processImage();
        }}
      >
        Upload
      </button>
      {meds &&
        meds.map((med) => {
          med = med[0].toUpperCase() + med.substring(1);
          return <p>{med}</p>;
        })}
    </div>
  );
};

export default Ocr;
