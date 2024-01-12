// @ts-ignore
import { Collapse, Progress } from "well-rounded-ui";
import Title from "./Title";

export default function ProgressTests() {
  return (
    <Collapse title={<Title text="Progress" />} className="mb-3">
      <Progress value={3} min={0} max={5} />
      <Progress className="mt-3" color="secondary" value={50} />
      <Progress className="mt-3" color="success" value={-2} min={0} max={5} />
      <Progress className="mt-3" color="warning" value={9} min={5} max={10} />
      <Progress className="mt-3" color="orange" value={9} min={10} max={5} />
      <Progress className="mt-3" color="danger" value={3} min={0} max={5} />
      <Progress className="mt-3" color="default" value={4} min={0} max={5} />
    </Collapse>
  );
}
