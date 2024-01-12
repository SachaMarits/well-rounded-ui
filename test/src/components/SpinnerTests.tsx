// @ts-ignore
import { Collapse, Spinner } from "well-rounded-ui";
import Title from "./Title";

export default function SpinnerTests() {
  return (
    <Collapse title={<Title text="Spinners" />} className="mb-3">
      <div className="flex-center gab-3">
        <Spinner />
        <Spinner color="primary" size="md" />
        <Spinner color="danger" size="lg" />
        <Spinner color="success" size="md" />
        <Spinner color="warning" size="sm" />
        <Spinner color="black" size="xs" />
        <Spinner color="white" size="ze" />
        <Spinner className="ml-3" />
      </div>
    </Collapse>
  );
}
