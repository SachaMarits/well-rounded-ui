// @ts-ignore
import { MultiSelect } from "well-rounded-ui";

export default function SingleTest() {
  return (
    <div className="p-3">
      <MultiSelect
        className="my-3"
        label="User selection"
        name="users"
        options={Array(500)
          .fill(0)
          .map((_, i) => ({ id: i, text: `User ${i}` }))}
        onChange={(ids: number[]) => console.log(ids)}
      />
    </div>
  );
}
