import React, { useLayoutEffect, useState } from "react";

export default function ColorThemePalette() {
  const root = document.querySelector(":root") as HTMLElement;
  if (!root) return null;

  const getThemeColors = () => ({
    "--well-rounded-primary": getComputedStyle(root).getPropertyValue("--well-rounded-primary"),
    "--well-rounded-secondary": getComputedStyle(root).getPropertyValue("--well-rounded-secondary"),
    "--well-rounded-success": getComputedStyle(root).getPropertyValue("--well-rounded-success"),
    "--well-rounded-warning": getComputedStyle(root).getPropertyValue("--well-rounded-warning"),
    "--well-rounded-danger": getComputedStyle(root).getPropertyValue("--well-rounded-danger"),
    "--well-rounded-default": getComputedStyle(root).getPropertyValue("--well-rounded-default")
  });

  const [themeColors, setThemeColors] = useState(getThemeColors());

  useLayoutEffect(() => setThemeColors(getThemeColors()), []);

  return (
    <div className="color-palette">
      {Object.entries(themeColors).map(([key, color]) => (
        <input
          key={key}
          type="color"
          defaultValue={color}
          onBlur={(e) => root.style.setProperty(key, e.target.value)}
        />
      )) || null}
    </div>
  );
}
