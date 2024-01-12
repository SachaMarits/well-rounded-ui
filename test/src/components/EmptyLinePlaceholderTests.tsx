// @ts-ignore
import { Collapse, EmptyLinePlaceholder } from "well-rounded-ui";

export default function EmptyLinePlaceholderTests() {
  return (
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
  );
}
