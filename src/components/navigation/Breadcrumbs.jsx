import { useLocation } from "react-router-dom";

export default function Breadcrumbs() {
   const welcomeMessage = "Welcome to Well Rounded";
   const regex = /^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/;

   const breadcrumbs = (location) => {
      const pages = location.pathname.substring(1, location.pathname.length).split("/");

      let breadcrumb = pages.length === 1 && pages[0] === "accueil" ? welcomeMessage : "Platform";

      if (breadcrumb !== welcomeMessage) {
         pages.forEach((page) => {
            if (page !== "" && !regex.test(page) && Number.isNaN(parseInt(page, 10)))
               breadcrumb += ` > ${page.replaceAll("-", " ")}`;
         });
      }

      return breadcrumb;
   };

   const location = useLocation();

   return (
      <p className={breadcrumbs(location) !== welcomeMessage ? "text-capitalize" : ""}>
         {breadcrumbs(location)}
      </p>
   );
}
