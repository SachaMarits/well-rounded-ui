import ColorPaletteTests from "./components/ColorPaletteTests";
import ButtonTests from "./components/ButtonTests";
import BadgeTests from "./components/BadgeTests";
import ProgressTests from "./components/ProgressTests";
import SpinnerTests from "./components/SpinnerTests";
import AlertMessageTests from "./components/AlertMessageTests";
import InputTests from "./components/InputTests";
import SelectTests from "./components/SelectTests";
import MultiSelectTests from "./components/MultiSelectTests";
import FileUploadTests from "./components/FileUploadTests";
import ImageUploadTests from "./components/ImageUploadTests";
import CalendarTests from "./components/CalendarTests";
import PaginationTests from "./components/PaginationTests";
import EmptyLinePlaceholderTests from "./components/EmptyLinePlaceholderTests";
import TabsTests from "./components/TabsTests";
import Section from "./components/Section";
import SliderTests from "./components/SliderTests";
import ModalTests from "./components/ModalTests";
import FloatingSidebarTests from "./components/FloatingSidebarTests";
import AlertTests from "./components/AlertTests";
import ListTests from "./components/ListTests";
import CardTests from "./components/CardTests";
import ColAndRowTests from "./components/ColAndRowTests";
import NoDataPlaceholderTests from "./components/NoDataPlaceholderTests";

export default function CompleteTest() {
  return (
    <div className="p-3" style={{ background: "whitesmoke" }}>
      <Section title="Inputs" subtitle="Components that manipulates data" hr>
        <ColorPaletteTests />
        <BadgeTests />
        <ButtonTests />
        <ProgressTests />
        <SpinnerTests />
        <AlertMessageTests />
        <InputTests />
        <SelectTests />
        <MultiSelectTests />
        <FileUploadTests />
        <ImageUploadTests />
        <CalendarTests />
        <PaginationTests />
        <EmptyLinePlaceholderTests />
        <TabsTests />
        <ListTests />
        <SliderTests />
      </Section>

      <Section title="Layout" subtitle="Components that fills space" hr>
        <CardTests />
        <ColAndRowTests />
        <NoDataPlaceholderTests />
      </Section>

      <Section title="Interactions" subtitle="Components or functions that create visual interactions with the user">
        <ModalTests />
        <FloatingSidebarTests />
        <AlertTests />
      </Section>
    </div>
  );
}
