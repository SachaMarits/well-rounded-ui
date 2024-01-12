// @ts-ignore
import { Collapse, Badge } from "well-rounded-ui";
import Title from "./Title";

export default function BadgeTests() {
  return (
    <Collapse title={<Title text="Badge" />} className="mb-3">
      <div className="flex-center gab-3">
        <Badge>Primary (default value)</Badge>
        <Badge color="primary">Primary</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="warning">Warning</Badge>
        <Badge color="danger">Danger</Badge>
        <Badge color="default">Default</Badge>
        <Badge className="bg-orange">Custom className</Badge>
      </div>
    </Collapse>
  );
}
