// @ts-ignore
import { Collapse, MultiSelect } from "well-rounded-ui";

export default function MultiSelectTests() {
  return (
    <Collapse title="MultiSelect" className="mb-3">
      <MultiSelect
        className="my-3"
        label="User selection"
        name="users"
        options={[{ id: 1, text: "Sacha" }]}
        onChange={(ids: number[]) => console.log(ids)}
      />
    </Collapse>
  );
}
