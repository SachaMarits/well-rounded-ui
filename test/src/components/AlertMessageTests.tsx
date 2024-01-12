// @ts-ignore
import { Collapse, AlertMessage } from "well-rounded-ui";
import Title from "./Title";

export default function AlertMessageTests() {
  return (
    <Collapse title={<Title text="Alert Message" />} className="mb-3">
      <AlertMessage color="primary" className="mb-3">
        Primary
      </AlertMessage>
      <AlertMessage color="success" className="mb-3">
        Success
      </AlertMessage>
      <AlertMessage color="warning" className="mb-3">
        Warning
      </AlertMessage>
      <AlertMessage color="danger" className="mb-3">
        Danger
      </AlertMessage>

      <AlertMessage>Danger (default value)</AlertMessage>
    </Collapse>
  );
}
