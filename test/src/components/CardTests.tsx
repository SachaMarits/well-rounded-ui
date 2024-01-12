// @ts-ignore
import { Collapse, Card, CardHeader, CardFooter, Alert } from "well-rounded-ui";
import Title from "./Title";

export default function CardTests() {
  return (
    <Collapse title={<Title text="Card" />} className="mb-3">
      <div style={{ backgroundColor: "whitesmoke", padding: 16 }}>
        <Card />
        <Card className="my-3" onClick={() => Alert("Action", "Click on card detected")}>
          Card with onClick
        </Card>
        <Card className="mb-3">Card without header and body</Card>
        <Card>
          <CardHeader>CardHeader</CardHeader>
          Any card content
          <CardFooter>CardFooter</CardFooter>
        </Card>
      </div>
    </Collapse>
  );
}
