import { FC, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Syntax from "react-syntax-highlighter";

interface CodeBlockProps {
  codeContent: string;
}
export const CodeBlock: FC<CodeBlockProps> = (props) => {
  const { codeContent } = props;
  const [isCopied, setIsCopied] = useState({ isCopied: false });

  return (
    <div style={{ position: "relative" }}>
      <Syntax showLineNumbers>{codeContent}</Syntax>

      <div>
        <CopyToClipboard
          text={codeContent}
          onCopy={() => setIsCopied({ isCopied: true })}
        >
          <button>
            <i className="material-icons">content_copy</i>
          </button>
        </CopyToClipboard>
      </div>

      {isCopied ? <span style={{ color: "red" }}>Copied.</span> : null}
    </div>
  );
};
