import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Select } from "well-rounded-ui";

describe("<Select>", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Select name="role" defaultOption="Filter by role" onChange={(e) => console.log(e)}>
        <option value="-1">All roles</option>
        <option value="Admin">Admin</option>
        <option value="Moderator">Moderator</option>
        <option value="User">User</option>
      </Select>
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <select
        class="form-control"
        id="role"
        name="role"
      >
        <option
          disabled=""
          selected=""
          value="-1"
        >
          Filter by role
        </option>
        <option
          value="-1"
        >
          All roles
        </option>
        <option
          value="Admin"
        >
          Admin
        </option>
        <option
          value="Moderator"
        >
          Moderator
        </option>
        <option
          value="User"
        >
          User
        </option>
      </select>
    `);
  });
});
