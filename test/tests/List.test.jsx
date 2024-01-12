import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { List } from "well-rounded-ui";

describe("<List>", () => {
  it("should render correctly", () => {
    const { container } = render(
      <List
        actions={[
          {
            action: "edit",
            iconOnly: true,
            onClick: () => {}
          },
          {
            action: "delete",
            iconOnly: true,
            onClick: () => {}
          }
        ]}
        data={[
          { id: 1, picture: "https://picsum.photos/36", name: "Sacha", active: true },
          { id: 2, picture: "https://picsum.photos/37", name: "Jax", active: false },
          { id: 3, picture: "https://picsum.photos/38", name: "Vayne", active: true },
          { id: 4, picture: "https://picsum.photos/39", name: "Morgana", active: true }
        ]}
        keyColumn="id"
        layout={[
          {
            column: "Picture",
            size: "sm",
            type: "image"
          },
          {
            column: "Name",
            size: "lg",
            type: "raw"
          },
          {
            column: "Active",
            size: "sm",
            type: "boolean"
          }
        ]}
      />
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="list"
      >
        <div
          class="columns list-row"
        >
          <div
            class="col-sm"
          >
            Picture
          </div>
          <div
            class="col-lg"
          >
            Name
          </div>
          <div
            class="col-sm"
          >
            Active
          </div>
          <div
            class="col-sm"
          >
            Actions
          </div>
        </div>
        <div
          class="rows"
        >
          <div
            class="list-row"
          >
            <div
              class="col-sm"
            >
              <img
                class="rounded-circle square36"
                src="https://picsum.photos/36"
              />
            </div>
            <div
              class="col-lg"
            >
              Sacha
            </div>
            <div
              class="col-sm"
            >
              <i
                class="text-xl  mdi mdi-check text-success"
              />
            </div>
            <div
              class="col-sm"
            >
              <div
                class="actions"
              >
                <p
                  class="text-primary px-2 pointer"
                >
                  <i
                    class="mdi mdi-pencil"
                  />
                   
                </p>
                <p
                  class="text-danger px-2 pointer"
                >
                  <i
                    class="mdi mdi-delete"
                  />
                   
                </p>
              </div>
            </div>
          </div>
          <div
            class="list-row"
          >
            <div
              class="col-sm"
            >
              <img
                class="rounded-circle square36"
                src="https://picsum.photos/37"
              />
            </div>
            <div
              class="col-lg"
            >
              Jax
            </div>
            <div
              class="col-sm"
            >
              <i
                class="text-xl  mdi mdi-close text-danger"
              />
            </div>
            <div
              class="col-sm"
            >
              <div
                class="actions"
              >
                <p
                  class="text-primary px-2 pointer"
                >
                  <i
                    class="mdi mdi-pencil"
                  />
                   
                </p>
                <p
                  class="text-danger px-2 pointer"
                >
                  <i
                    class="mdi mdi-delete"
                  />
                   
                </p>
              </div>
            </div>
          </div>
          <div
            class="list-row"
          >
            <div
              class="col-sm"
            >
              <img
                class="rounded-circle square36"
                src="https://picsum.photos/38"
              />
            </div>
            <div
              class="col-lg"
            >
              Vayne
            </div>
            <div
              class="col-sm"
            >
              <i
                class="text-xl  mdi mdi-check text-success"
              />
            </div>
            <div
              class="col-sm"
            >
              <div
                class="actions"
              >
                <p
                  class="text-primary px-2 pointer"
                >
                  <i
                    class="mdi mdi-pencil"
                  />
                   
                </p>
                <p
                  class="text-danger px-2 pointer"
                >
                  <i
                    class="mdi mdi-delete"
                  />
                   
                </p>
              </div>
            </div>
          </div>
          <div
            class="list-row"
          >
            <div
              class="col-sm"
            >
              <img
                class="rounded-circle square36"
                src="https://picsum.photos/39"
              />
            </div>
            <div
              class="col-lg"
            >
              Morgana
            </div>
            <div
              class="col-sm"
            >
              <i
                class="text-xl  mdi mdi-check text-success"
              />
            </div>
            <div
              class="col-sm"
            >
              <div
                class="actions"
              >
                <p
                  class="text-primary px-2 pointer"
                >
                  <i
                    class="mdi mdi-pencil"
                  />
                   
                </p>
                <p
                  class="text-danger px-2 pointer"
                >
                  <i
                    class="mdi mdi-delete"
                  />
                   
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
