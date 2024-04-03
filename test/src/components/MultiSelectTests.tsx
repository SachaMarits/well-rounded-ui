// @ts-ignore
import { Collapse, MultiSelect } from "well-rounded-ui";

export default function MultiSelectTests() {
  return (
    <Collapse title="MultiSelect" className="mb-3">
      <MultiSelect
        className="my-3"
        label="User selection"
        name="users"
        options={Array(1000)
          .fill(0)
          .map((_, i) => ({ id: i, text: `User ${i}` }))}
        onChange={(ids: number[]) => console.log(ids)}
      />
    </Collapse>
  );
}
