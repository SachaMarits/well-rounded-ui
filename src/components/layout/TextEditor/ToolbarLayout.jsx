import React from "react";
import { Input, Tooltip } from "../../inputs";

export default function ToolbarLayout({ text }) {
  const saveSelection = () => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    return range.cloneRange();
  };

  const restoreSelection = () => {
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(savedSelection);
  };

  let savedSelection;

  const handleSpacing = (e) => {
    const { name, value } = e.target;

    if (savedSelection) restoreSelection();
    const selection = window.getSelection();
    let selectedElement = selection.focusNode.parentNode;

    while (selectedElement && selectedElement.localName !== "div") {
      selectedElement = selectedElement.parentNode;
    }

    const styles = [];

    if (name === "horizontalPadding")
      styles.push("paddingLeft", "paddingRight");
    if (name === "verticalPadding") styles.push("paddingTop", "paddingBottom");
    if (name === "horizontalMargin") styles.push("marginLeft", "marginRight");
    if (name === "verticalMargin") styles.push("marginTop", "marginBottom");
    styles.forEach((s) => (selectedElement.style[s] = `${value}px`));
  };

  const handleExportClick = () => {
    const htmlContent = text.current.innerHTML;
    console.log(htmlContent);
  };

  return (
    <div className="tool-group">
      <div className="tool-group-icons">
        <Tooltip
          toggle={
            <button
              className="btn btn-option"
              onClick={() => (savedSelection = saveSelection())}
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
                  <Input
                    name="horizontalPadding"
                    type="number"
                    defaultValue={0}
                    onBlur={handleSpacing}
                  />
                </div>
                <div className="spacing-input">
                  <i className="mdi mdi-arrow-expand-vertical" />
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
                  <Input
                    name="horizontalMargin"
                    type="number"
                    defaultValue={0}
                    onBlur={handleSpacing}
                  />
                </div>
                <div className="spacing-input">
                  <i className="mdi mdi-arrow-up-down" />
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
        <button className="btn btn-option" onClick={handleExportClick}>
          <i className={`mdi mdi-file-find`} />
        </button>
      </div>
      <p className="tool-group-title">Layout</p>
    </div>
  );
}
