import headerLogo from "../../assets/images/header-logo.png";

export default function Logo() {
   return (
      <div className="logo-details">
         <img className="logo-icon" src={headerLogo} alt="Logo" />
         <span className="logo-name">Well Rounded</span>
      </div>
   );
}
