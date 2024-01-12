// @ts-ignore
import { Collapse, Select } from "well-rounded-ui";

export default function SelectTests() {
  return (
    <Collapse title="Select" className="mb-3">
      <Select name="role" defaultOption="Filter by role" onChange={(e: unknown) => console.log(e)}>
        <option value="-1">All roles</option>
        <option value="Admin">Admin</option>
        <option value="Moderator">Moderator</option>
        <option value="User">User</option>
      </Select>
    </Collapse>
  );
}
