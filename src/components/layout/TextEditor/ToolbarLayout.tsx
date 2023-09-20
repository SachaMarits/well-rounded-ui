import React, { useContext } from "react";
import { Input, Tooltip } from "../../inputs";
import { TextEditorContext } from "./TextEditorContext";

interface ToolbarLayoutProps {
  text: React.RefObject<HTMLDivElement>;
}

const ToolbarLayout: React.FC<ToolbarLayoutProps> = ({ text }) => {
  const { hideTitles, hideGroupNames } = useContext(TextEditorContext);

  const saveSelection = () => {
    const selection = window.getSelection();
    const range = selection?.getRangeAt(0);
    if (range) return range.cloneRange();
    return document.createRange();
  };

  const restoreSelection = () => {
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(savedSelection);
  };

  let savedSelection: Range = document.createRange();

  const handleSpacing = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (savedSelection) restoreSelection();
    const selection = window.getSelection();
    let selectedElement = selection?.focusNode?.parentNode as HTMLElement;

    while (selectedElement && selectedElement.localName !== "div") {
      selectedElement = selectedElement.parentNode as HTMLElement;
    }

    const styles: string[] = [];

    if (name === "horizontalPadding")
      styles.push("paddingLeft", "paddingRight");
    if (name === "verticalPadding") styles.push("paddingTop", "paddingBottom");
    if (name === "horizontalMargin") styles.push("marginLeft", "marginRight");
    if (name === "verticalMargin") styles.push("marginTop", "marginBottom");
    styles.forEach((s) => (selectedElement.style[s] = `${value}px`));
  };

  const handleExportClick = () => {
    const htmlContent = text.current?.innerHTML;
    const newTab = window.open("");
    newTab?.document.write(htmlContent);
    newTab?.document.close();
  };

  return (
    <div className="tool-group">
      <div className="tool-group-icons">
        <Tooltip
          toggle={
            <button
              className="btn btn-option btn-collapse"
              onClick={() => (savedSelection = saveSelection())}
              title={hideTitles ? "" : "Margin and padding"}
            >
              <i className={`mdi mdi-move-resize`} />
              <i className={`mdi mdi-chevron-down`} />
            </button>
          }
          content={
            <div className="text-editor-spacing">
              <div className="mr-3">
                <p>Padding</p>
                <div className="spacing-input">
                  <i className="mdi mdi-arrow-expand-horizontal" />
                  {/* @ts-ignore */}
                  <Input
                    name="horizontalPadding"
                    type="number"
                    defaultValue={0}
                    onBlur={handleSpacing}
                  />
                </div>
                <div className="spacing-input">
                  <i className="mdi mdi-arrow-expand-vertical" />
                  {/* @ts-ignore */}
                  <Input
                    name="verticalPadding"
                    type="number"
                    defaultValue={0}
                    onBlur={handleSpacing}
                  />
                </div>
              </div>
              <div>
                <p>Margin</p>
                <div className="spacing-input">
                  <i className="mdi mdi-arrow-left-right" />
                  {/* @ts-ignore */}
                  <Input
                    name="horizontalMargin"
                    type="number"
                    defaultValue={0}
                    onBlur={handleSpacing}
                  />
                </div>
                <div className="spacing-input">
                  <i className="mdi mdi-arrow-up-down" />
                  {/* @ts-ignore */}
                  <Input
                    name="verticalMargin"
                    type="number"
                    defaultValue={0}
                    onBlur={handleSpacing}
                  />
                </div>
              </div>
            </div>
          }
          closeOnLeave
        />
        <button className="btn btn-option" onClick={handleExportClick} title={hideTitles ? "" : "Preview in new tab"}>
          <i className={`mdi mdi-file-find`} />
        </button>
      </div>
      {!hideGroupNames && <p className="tool-group-title">Layout</p>}
    </div>
  );
};

export default ToolbarLayout;
