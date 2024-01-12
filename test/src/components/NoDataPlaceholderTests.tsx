// @ts-ignore
import { Collapse, NoDataPlaceholder, Button } from "well-rounded-ui";
import Title from "./Title";

export default function NoDataPlaceholderTests() {
  return (
    <Collapse title={<Title text="No Data Placeholder" />} className="mb-3">
      <NoDataPlaceholder />
      <NoDataPlaceholder text="No data exist" />
      <NoDataPlaceholder text="No data exist with icon" icon="table-off" />
      <NoDataPlaceholder text="No data exist with icon and button string" icon="table-off" button="Any button" />
      <NoDataPlaceholder
        text="No data exist with icon and real button"
        icon="table-off"
        button={<Button text="Add" action="add" />}
      />
    </Collapse>
  );
}
