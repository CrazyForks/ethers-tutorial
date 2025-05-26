import React from "react";
import Markdown from "@/components/Markdown";
import content from "./README.md?raw";

const Contract: React.FC = () => {
  return (
    <div className="markdown-content">
      <Markdown content={content} />
    </div>
  );
};

export default Contract;
