// @ts-nocheck
import { useState } from "react";
import {
  Badge,
  Input,
  Button,
  MultiSelect,
  Pagination,
  Select,
  Calendar,
  Alert,
  FileUpload,
  ImageUpload,
  AlertMessage,
  Tabs,
  TabPane,
  Spinner,
  Progress,
  EmptyLinePlaceholder,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Collapse,
  FloatingSidebar
} from "well-rounded-ui";

export default function CompleteTest() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFloatingSidebarLeftOpen, setIsFloatingSidebarLeftOpen] = useState(false);
  const [isFloatingSidebarRightOpen, setIsFloatingSidebarRightOpen] = useState(false);

  const Title = ({ text, nok = false }) => (
    <p>
      {text} <i className={`mdi ${nok ? "mdi-close text-danger" : "mdi-check text-success"}`} />
    </p>
  );

  return (
    <div className="p-3" style={{ background: "whitesmoke" }}>
      <h2 className="mb-3">Inputs</h2>

      <Collapse title={<Title text="Badges" />} className="mb-3">
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

      <Collapse title={<Title text="Buttons" />} className="mb-3">
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

      <Collapse title={<Title text="Progress" />} className="mb-3">
        <Progress value={3} min={0} max={5} />
        <Progress className="mt-3" color="secondary" value={50} />
        <Progress className="mt-3" color="success" value={-2} min={0} max={5} />
        <Progress className="mt-3" color="warning" value={9} min={5} max={10} />
        <Progress className="mt-3" color="orange" value={9} min={10} max={5} />
        <Progress className="mt-3" color="danger" value={3} min={0} max={5} />
        <Progress className="mt-3" color="default" value={4} min={0} max={5} />
      </Collapse>

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

      <Collapse title={<Title text="Alert Messages" />} className="mb-3">
        <AlertMessage color="primary" className="mb-3">
          Primary
        </AlertMessage>
        <AlertMessage color="success" className="mb-3">
          Success
        </AlertMessage>
        <AlertMessage color="warning" className="mb-3">
          Warning
        </AlertMessage>
        <AlertMessage color="danger" className="mb-3">
          Danger
        </AlertMessage>

        <AlertMessage>Danger (default value)</AlertMessage>
      </Collapse>

      <Collapse title="Fields" className="mb-3">
        <Input name="name" type="text" placeholder="Filter by name" />
        <MultiSelect
          className="my-3"
          label="User selection"
          name="users"
          options={[{ id: 1, text: "Sacha" }]}
          onChange={(ids: number[]) => console.log(ids)}
        />
        <Select name="role" defaultOption="Filter by role" onChange={(e) => console.log(e)}>
          <option value="-1">All roles</option>
          <option value="Admin">Admin</option>
          <option value="Moderator">Moderator</option>
          <option value="User">User</option>
        </Select>
      </Collapse>

      <Collapse title="Uploads" className="mb-3">
        <FileUpload
          className="mt-3"
          allowedExtensions={["jpg", "jpeg", "png"]}
          dragAndDrop
          multiple
          onChange={(test) => console.log(test)}
        />
        <ImageUpload className="mt-3" dragAndDrop multiple onChange={(test) => console.log(test)} />
      </Collapse>

      <Collapse title="Calendar" className="mb-3">
        <Calendar
          data={Array(12)
            .fill("")
            .map((_, id) => ({
              date: new Date(new Date().getFullYear(), new Date().getMonth(), Math.round(Math.random() * 30 + 1)),
              id,
              text: `#${_}${id + 1}`
            }))}
          onDayClick={(d) => Alert("A day has been clicked", d.toDateString(), "success")}
          onDataClick={(d) => Alert("A data has been clicked", d.text, "warning")}
        />
      </Collapse>

      <Collapse title={<Title text="Pagination" nok />} className="mb-3">
        <Pagination totalItems={5} itemsPerPage={1} activePage={1} onChange={(page: number) => console.log(page)} />
        <Pagination totalItems={5} itemsPerPage={10} activePage={1} onChange={(page: number) => console.log(page)} />
        <Pagination totalItems={5} itemsPerPage={1} activePage={2} onChange={(page: number) => console.log(page)} />
      </Collapse>

      <Collapse title="Empty Line Placeholder" className="mb-3">
        <EmptyLinePlaceholder onClick={() => {}} text="Add element" action="add" className="mb-3" />
        <EmptyLinePlaceholder
          onClick={() => {}}
          text={
            <p>
              Added element <i className="mdi mdi-check" />
            </p>
          }
          success
        />
      </Collapse>

      <Collapse title="Tabs" className="mb-3">
        <Tabs>
          <TabPane name="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane name="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane name="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </Collapse>

      <hr className="my-3" />

      <h2 className="mb-3">Interactions</h2>

      <div className="d-flex gap-3">
        <Button color="primary" className="mr-2" onClick={() => setIsModalOpen(true)} text="Open Modal" />
        <Button
          color="primary"
          className="mx-2"
          onClick={() => setIsFloatingSidebarLeftOpen(true)}
          text="Open Left Floating Sidebar"
        />
        <Button
          color="primary"
          className="mx-2"
          onClick={() => setIsFloatingSidebarRightOpen(true)}
          text="Open Right Floating Sidebar"
        />

        <Button
          color="primary"
          className="mr-2"
          onClick={() => Alert("Alert title", "Alert content", "success")}
          text="Open Alert"
        />
      </div>

      <Modal show={isModalOpen} onClose={() => {}}>
        <ModalHeader>
          <h3>Modal title</h3>
        </ModalHeader>
        <ModalBody>
          <p>This is modal body</p>
        </ModalBody>
        <ModalFooter>
          <Button text="Cancel" color="danger" onClick={() => {}} />
        </ModalFooter>
      </Modal>

      <FloatingSidebar
        direction="left"
        show={isFloatingSidebarLeftOpen}
        onClose={() => setIsFloatingSidebarLeftOpen(false)}
        title="Left FloatingSidebar"
      >
        <p className="p-3">Left</p>
      </FloatingSidebar>

      <FloatingSidebar
        direction="right"
        show={isFloatingSidebarRightOpen}
        onClose={() => setIsFloatingSidebarRightOpen(false)}
        title="Right FloatingSidebar"
      >
        <p className="p-3">Right</p>
      </FloatingSidebar>
    </div>
  );
}
