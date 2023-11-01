import React from "react";

export default function InteractionBarIcon() {
   const toggleInteractionBar = () => {
      const sidebar = document.getElementsByClassName("sidebar");
      sidebar[0].classList.toggle("show-interaction-bar");
      const interactionBar = document.getElementById("interaction-bar");
      interactionBar.classList.toggle("show");
   };

   return (
      <i
         id="interaction-bar-icon"
         className="mdi mdi-filter text-primary pointer mr-2 d-none"
         onClick={toggleInteractionBar}
         aria-hidden="true"
      />
   );
}
