// @ts-ignore
import { Collapse, Calendar, Alert } from "well-rounded-ui";

export default function CalendarTests() {
  return (
    <Collapse title="Calendar" className="mb-3">
      <Calendar
        data={Array(12)
          .fill("")
          .map((_, id) => ({
            date: new Date(new Date().getFullYear(), new Date().getMonth(), Math.round(Math.random() * 30 + 1)),
            id,
            text: `#${_}${id + 1}`
          }))}
        onDayClick={(d: Date) => Alert("A day has been clicked", d.toDateString(), "success")}
        onDataClick={({ text }: { text: string }) => Alert("A data has been clicked", text, "warning")}
      />
    </Collapse>
  );
}
