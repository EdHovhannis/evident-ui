import { CodeBlock } from "@/documentation/components";

export const About = () => {
  const code = `function foo(){}`;
  return (
    <div>
      <CodeBlock codeContent={code} />
    </div>
  );
};
