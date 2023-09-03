import { InteractionBarIcon, NotificationsContainer } from "../interactions";
import Breadcrumbs from "./Breadcrumbs";

export default function Header() {
   return (
      <div className="header mb-2">
         <Breadcrumbs />
         <div className="ml-auto position-relative d-flex">
            <InteractionBarIcon />
            <NotificationsContainer />
         </div>
      </div>
   );
}
