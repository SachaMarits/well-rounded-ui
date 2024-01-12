// @ts-ignore
import { Collapse, Button, Alert } from "well-rounded-ui";

export default function AlertTests() {
  return (
    <Collapse title="Alert" className="mb-3">
      <Button
        color="primary"
        className="mr-2"
        onClick={() => Alert("Alert title", "Alert content", "success")}
        text="Open Alert"
      />
    </Collapse>
  );
}
