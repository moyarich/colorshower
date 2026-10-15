import { MonacoEditorReactComp } from "@typefox/monaco-editor-react";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import { registry } from "../registry.config";
import "./styles.css";
import { vscodeApiConfig } from "./vscode";

const docs = import.meta.glob("../../../docs/**/*.md", { query: "?raw", import: "default", eager: true }) as Record<string, string>;
const examples = import.meta.glob("../../../examples/**/*.css", { query: "?raw", import: "default", eager: true }) as Record<string, string>;

const pages = [
  ...Object.entries(docs).map(([path, content]) => ({
    path, title: path.split("/").pop()!.replace(/^(\d+-)/, "").replace(/\.md$/, "").replace(/-/g, " "), content, group: registry.docs.label,
  })),
  ...Object.entries(examples).map(([path, content]) => ({
    path, title: path.split("/").pop()!, content, group: registry.examples.label,
  })),
].filter((page) => !page.path.includes("/development/")).sort((a, b) => a.path.localeCompare(b.path));


function inlineContent(value: string) {
  return value.split(/(`[^`]+`|\[[^\]]+\]\([^)]+\))/g).map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) return <code key={index}>{part.slice(1, -1)}</code>;
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) {
      const href = link[2].startsWith("../") ? "https://github.com/moyarich/colorshower/blob/main/" + link[2].replace(/^\.\.\//, "") : link[2];
      return <a key={index} href={href}>{link[1]}</a>;
    }
    return part;
  });
}

function Document({ source }: { source: string }) {
  const lines = source.split("\n");
  const blocks: import("react").ReactNode[] = [];
  let code: string[] | null = null;
  lines.forEach((line, index) => {
    if (line.startsWith("```")) {
      if (code) { blocks.push(<pre key={index}><code>{code.join("\n")}</code></pre>); code = null; }
      else code = [];
    } else if (code) code.push(line);
    else if (line.startsWith("### ")) blocks.push(<h3 key={index}>{inlineContent(line.slice(4))}</h3>);
    else if (line.startsWith("## ")) blocks.push(<h2 key={index}>{inlineContent(line.slice(3))}</h2>);
    else if (line.startsWith("# ")) blocks.push(<h1 key={index}>{inlineContent(line.slice(2))}</h1>);
    else if (line.startsWith("- ")) blocks.push(<p key={index}>• {inlineContent(line.slice(2))}</p>);
    else if (line.trim()) blocks.push(<p key={index}>{inlineContent(line)}</p>);
  });
  return <article className="playground__document">{blocks}</article>;
}

function App() {
  const [selected, setSelected] = useState(() => pages.find((page) => page.group === registry.examples.label)?.path ?? pages[0]?.path);
  const page = pages.find((item) => item.path === selected);
  const isExample = page?.group === registry.examples.label;
  return (
    <main className="playground">
      <header className="playground__header">
        <div>
          <h1>ColorShower</h1>
          <p>Explore documentation and select CSS color swatches in the live Monaco editor.</p>
        </div>
        <a href="https://github.com/moyarich/colorshower">GitHub ↗</a>
      </header>
      <div className="playground__layout">
        <aside className="playground__nav" aria-label="Documentation and examples">
          {[registry.docs.label, registry.examples.label].map((group) => (
            <section key={group}>
              <h2>{group}</h2>
              {pages.filter((item) => item.group === group).map((item) => (
                <button key={item.path} type="button" aria-current={item.path === selected ? "page" : undefined} onClick={() => setSelected(item.path)}>{item.title}</button>
              ))}
            </section>
          ))}
        </aside>
        <section className="playground__content" aria-label={page?.title ?? "Content"}>
          <h2>{page?.title}</h2>
          {isExample ? (
            <div className="playground__editor" key={selected}>
              <MonacoEditorReactComp
                vscodeApiConfig={vscodeApiConfig}
                editorAppConfig={{
                  codeResources: { modified: {
                    text: page?.content ?? "",
                    uri: "file:///workspace/" + (page?.path.split("/").pop() ?? "colors.css"),
                    enforceLanguageId: "css",
                  } },
                  editorOptions: {
                    automaticLayout: true, minimap: { enabled: false },
                    fontSize: 15, lineHeight: 22, theme: "vs-dark",
                  },
                }}
                style={{ height: "100%" }}
              />
            </div>
          ) : <Document source={page?.content ?? ""} />}
        </section>
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
