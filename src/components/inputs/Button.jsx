import PropTypes from "prop-types";

export default function Button({
   className,
   text,
   color,
   onClick,
   submit,
   action,
   animate,
   isSubmitting,
   disabled,
}) {
   const styles = () => {
      let classNames = `${className} btn${animate ? " fadeIn" : ""} ${
         isSubmitting ? " btn-disabled" : ""
      }`;
      classNames += ` btn-${color}`;
      return classNames;
   };

   const icon = () => {
      switch (action) {
         case "add":
            return "mdi mdi-plus-thick";
         case "delete":
            return "mdi mdi-delete";
         case "edit":
            return "mdi mdi-pencil";
         case "upload":
            return "mdi mdi-upload";
         case "download":
            return "mdi mdi-download";
         case "send":
            return "mdi mdi-send";
         case "navigate":
            return "mdi mdi-chevron-right";
         default:
            return action;
      }
   };

   return (
      <button
         type={submit ? "submit" : "button"}
         className={styles()}
         onClick={() => onClick()}
         disabled={isSubmitting || disabled}
      >
         {text} {action && <i className={`ml-2 ${icon()}`} />}
      </button>
   );
}

Button.propTypes = {
   className: PropTypes.string,
   text: PropTypes.string.isRequired,
   color: PropTypes.string.isRequired,
   onClick: PropTypes.func.isRequired,
   submit: PropTypes.bool,
   action: PropTypes.string,
   animate: PropTypes.bool,
   isSubmitting: PropTypes.bool,
   disabled: PropTypes.bool,
};

Button.defaultProps = {
   className: "",
   submit: false,
   action: "",
   animate: false,
   isSubmitting: false,
   disabled: false,
};
