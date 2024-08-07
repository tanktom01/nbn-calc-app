// src/components/UnderConstruction.tsx
import React from "react";
import "../components/UnderContruction.css";
import diggingAnimation from "../assets/dumper.gif";

const UnderConstruction: React.FC = () => {
  return (
    <div className="under-construction">
      <div className="animation">
        <img src={diggingAnimation} alt="Under Construction" />
        <p>🚧 Under Construction 🚧</p>
      </div>
    </div>
  );
};

export default UnderConstruction;
