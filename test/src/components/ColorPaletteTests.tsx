// @ts-ignore
import { Collapse, ColorPalette, ColorThemePalette } from "well-rounded-ui";

export default function ColorPaletteTests() {
  return (
    <Collapse title="Color Palette" className="mb-3">
      <div className="flex-center gab-3">
        <ColorPalette defaultValue={["#2a9d8f"]} onChange={(c: string[]) => console.log(c)} />
        <ColorPalette
          defaultValue={["#2a9d8f", "#264653", "#a7c957", "#e9c46a", "#e76f51", "#d6ccc2"]}
          onChange={(c: string[]) => console.log(c)}
        />
        <ColorThemePalette />
      </div>
    </Collapse>
  );
}
