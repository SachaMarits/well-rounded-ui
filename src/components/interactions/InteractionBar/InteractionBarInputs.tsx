import React, { useEffect } from "react";

interface InteractionBarInputsProps {
  title: string | null;
  content: React.ReactNode | null;
}

export default function InteractionBarInputs({ title = null, content = null }: InteractionBarInputsProps) {
  const toggleInteractionBarIcon = (closeCompletely = true) => {
    const interactinBarIcon = document.getElementById("interaction-bar-icon");

    interactinBarIcon?.classList.toggle("d-none");

    if (closeCompletely) {
      const shownInteractionBar = "show-interaction-bar";
      const sidebar = document.getElementsByClassName(shownInteractionBar);

      if (sidebar.length > 0) {
        sidebar[0].classList.remove(shownInteractionBar);

        const interactionBar = document.getElementById("interaction-bar");

        interactionBar?.classList.remove("show");
      }
    }
  };

  useEffect(() => {
    toggleInteractionBarIcon(false);

    return toggleInteractionBarIcon;
  }, []);

  return (
    <div id="interaction-bar">
      <div className="header mb-2">
        <h4>{title || "Filters"}</h4>
      </div>

      <div>{content}</div>
    </div>
  );
}
