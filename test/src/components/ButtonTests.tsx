// @ts-ignore
import { Collapse, Button } from "well-rounded-ui";
import Title from "./Title";

export default function ButtonTests() {
  return (
    <Collapse title={<Title text="Button" />} className="mb-3">
      <div className="flex-center gab-3 flex-wrap">
        <Button text="Primary (animate)" animate />
        <Button text="Primary (!animate)" />
        <Button text="Primary (default value)" />
        <Button text="onClick => console.log('Test')" onClick={() => console.log("Test")} />
        <Button text="Primary (add)" color="primary" action="add" />
        <Button text="Success (edit)" color="success" action="edit" />
        <Button text="Warning (send)" color="warning" action="send" />
        <Button text="Danger (delete)" color="danger" action="delete" />
        <Button text="Default (cart)" color="default" action="cart" />
        <Button text="Gradient (shop)" color="gradient" action="shop" />
        <Button text="Unknown action" color="gradient" action="test" />
        <Button text="isSubmitting" color="gradient" isSubmitting />
        <Button text="isSubmitting" color="gradient">
          Children over text
        </Button>
        <Button color="gradient">
          <i>i children</i>
        </Button>
        <Button text="Disabled" disabled />
        <Button disabled>Children disabled</Button>
        <Button className="bg-orange">Custom className</Button>
      </div>
    </Collapse>
  );
}
