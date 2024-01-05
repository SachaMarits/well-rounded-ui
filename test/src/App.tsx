// import CompleteTest from "./CompleteTest";
import { Table2 } from "well-rounded-ui";

function App() {
  const items = [
    {
      id: 1,
      name: "Sacha",
      active: true,
      items: [
        { id: 1, name: "Bougie", price: 10 },
        { id: 2, name: "Savon", price: 5 }
      ]
    },
    { id: 2, name: "Elena", active: false, items: [{ id: 3, name: "Fondant" }] }
  ];

  return (
    <div style={{ background: "gray", height: "100vh", padding: "5%" }}>
      <Table2
        keyColumn="id"
        data={items}
        layout={[
          { column: "Name", type: "text" },
          { column: "Active", type: "boolean" },
          {
            column: "Items",
            type: "details",
            detailsLayout: [
              { column: "Name", type: "text" },
              { column: "Price", type: "price" }
            ]
          }
        ]}
        actions={[]}
      />
      {/* <CompleteTest /> */}
    </div>
  );
}

export default App;
