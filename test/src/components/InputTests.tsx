// @ts-ignore
import { Collapse, Input } from "well-rounded-ui";

export default function InputTests() {
  return (
    <Collapse title="Inputs" className="mb-3">
      <Input name="name" type="text" placeholder="Filter by name" />
    </Collapse>
  );
}
