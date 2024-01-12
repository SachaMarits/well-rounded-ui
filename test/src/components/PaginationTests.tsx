// @ts-ignore
import { Collapse, Pagination } from "well-rounded-ui";
import Title from "./Title";

export default function PaginationTests() {
  return (
    <Collapse title={<Title text="Pagination" nok />} className="mb-3">
      <Pagination totalItems={5} itemsPerPage={1} activePage={1} onChange={(page: number) => console.log(page)} />
      <Pagination totalItems={5} itemsPerPage={10} activePage={1} onChange={(page: number) => console.log(page)} />
      <Pagination totalItems={5} itemsPerPage={1} activePage={2} onChange={(page: number) => console.log(page)} />
    </Collapse>
  );
}
