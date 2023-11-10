# Well Rounded Ui Documentation

## Patch note

### 1.2.5

- Added new [FileUpload](#file-upload) and [ImageUpload](#image-upload) component.

### 1.2.4
- Added new [Calendar](#calendar) component.
- Updated Well Rounded UI usage using [Well Rounded UI Styles](#well-rounded-ui-styles) component.

## Table of contents

- [Well Rounded UI Styles](#well-rounded-ui-styles)
- [Inputs](#inputs)
  - [Input field](#input-field)
  - [Button](#button)
  - [MultiSelect](#multiselect)
  - [Pagination](#pagination)
  - [Table](#table)
  - [Calendar](#calendar)
  - [FileUpload](#file-upload)
  - [ImageUpload](#image-upload)
- [Interactions](#interactions)
  - [Alert](#alert)
  - [Floating Sidebar](#floating-sidebar)
  - [Modal](#modal)
- [Layout](#layout)
  - [Badge](#badge)
  - [Card](#card)
  - [CardHeader](#card-header)
  - [CardFooter](#card-footer)
  - [ModalHeader](#modal-header)
  - [ModalFooter](#modal-footer)
  - [Row](#row)
  - [Col](#col)
  - [EmptyLinePlaceholder](#empty-line-placeholder)
  - [Progress](#progress)
  - [Spinner](#spinner)
  - [Tabs](#tabs)
  - [TabPane](#tab-pane)

---
## Well Rounded UI Styles

To use Well Rounded Ui's styles you have to wrap your app into `WellRoundedUI` component:
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { WellRoundedUI } from 'well-rounded-ui';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WellRoundedUI>
      <App />
    </WellRoundedUI>
  </React.StrictMode>,
)
```

---
## Inputs

### Input Field
![Well Rounded UI Inputs](https://i.postimg.cc/QxYMXBK6/Well-Rounded-Ui-Inputs.png)

#### Usage

Basic:
```jsx
<Input
  name="name"
  type="text"
  placeholder="Filter by name"
  onChange={(e) => setName(e.target.value)}
/>
```
<br/>

Using `react-hook-form`:
```jsx
<Input
  className="mt-3"
  name="firstName"
  label="First Name"
  placeholder="First Name"
  errors={errors.login && errors.login}
  minLength={3}
  maxLength={30}
  register={register}
  control={control}
  required
/>
```
Where `register`, `control` and `errors` comes from `useForm()` used by `react-hook-form`.<br/>
> When using `react-hook-form` if required, maxLength or minLength error is detected, it will automatically shows an error message below the input field concerned when errors prop is used.

#### Props

| Prop        | Type             | Purpose                                        |
| ----------- |:----------------:| -----------------------------------------------|
| className   | string           | Input and label classNames                     |
| **name***   | string           | Input's html name                              |
| type        | string           | Input's type (for example "textarea")          |
| placeholder | string           | Input's placeholder                            |
| register    | function         | Register function of `react-hook-form`         |
| errors      | string or object | Display errors when they occur                 |
| required    | bool             | Makes the input required when using `<form />` |
| minLength   | number           | Minimum input length                           |
| maxLength   | number           | Maximum input length                           |

*Required prop(s).

---

### Button

![Well Rounded UI Buttons](https://i.postimg.cc/Xq6SQbh6/Well-Rounded-Ui-Buttons.png)

#### Usage

```jsx
<Button
  text="Main actions"
  color="primary"
  action="send"
  onClick={() => yourFunction()}
  animate
/>
```

#### Props

| Prop          | Type      | Purpose                                                           |
| ------------- |:---------:| ------------------------------------------------------------------|
| className     | string    | Button's classNames                                               |
| **text***     | string    | Button's text                                                     |
| **color***    | string    | Button's color (primary, success, danger, default, disabled)      |
| **onClick***  | function  | Button's function when clicked                                    |
| submit        | bool      | Make this button the submit button of parent form                 |
| action        | string    | Add an icon (add, delete, edit, upload, donwload, send, navigate) |
| animate       | bool      | Animate the button when appearing                                 |
| isSubmitting  | bool      | Disable the button while true (prevents multiple click)           |
| disabled      | bool      | Disable the button                                                |

*Required prop(s).

---

### MultiSelect

![Well Rounded UI MultiSelect](https://i.postimg.cc/LXGrCpJ3/Well-Rounded-Ui-Multi-Select.png)

#### Usage

```jsx
<MultiSelect
  label="User selection"
  name="users"
  options={options} // [{ id: 1, text: "Item Text" }, ...]
  onClick={(selection) => yourFunction(selection)}
/>
```

#### Props

| Prop          | Type              | Purpose                                                       |
| ------------- |:-----------------:| --------------------------------------------------------------|
| **name***     | string            | MultiSelect's html name (used for label)                      |
| **label***    | string            | MultiSelect's label                                           |
| options       | array of objects  | List of avalaible options [{ id: 1, text: "Item Text" }, ...] |
| **onChange*** | function          | Callback function when selection changed                      |

*Required prop(s).

---

### Pagination

![Well Rounded UI Pagination](https://i.postimg.cc/65Z9NHwQ/Well-Rounded-Ui-Pagination.png)

#### Usage

```jsx
<Pagination
  totalItems={5}
  itemsPerPage={1}
  activePage={activePage}
  onChange={(page) => setActivePage(page)}
/>
```

#### Props

| Prop              | Type      | Purpose                              |
| ----------------- |:---------:| -------------------------------------|
| **totalItems***   | number    | Pagination total items               |
| **itemsPerPage*** | number    | Pagination items per page            |
| **activePage***   | number    | Pagination's active page             |
| **onChange***     | function  | Callback function when changing page |

*Required prop(s).

---

### Select

![Well Rounded UI Select](https://i.postimg.cc/HLyKrNZJ/Well-Rounded-Ui-Select.png)

#### Usage

```jsx
<Select
  name="role"
  defaultOption="Filter by role"
  onChange={(e) => setRole(e.target.value)}
>
  <option value="-1">All roles</option>
  <option value="Admin">Admin</option>
  <option value="Moderator">Moderator</option>
  <option value="User">User</option>
</Select>
```

#### Props

| Prop          | Type             | Purpose                                         |
| ------------- |:----------------:| ------------------------------------------------|
| className     | string           | Select's classNames                             |
| **name***     | string           | Select's name (used for label)                  |
| label         | string           | Select's label                                  |
| register      | function         | Register function of `react-hook-form`          |
| required      | bool             | Makes the Select required when using `<form />` |
| **children*** | html options     | List of html options to shown inside the Select |
| defaultOption | string           | Text of the first option                        |
| defaultValue  | string           | Defines the default selected option             |

*Required prop(s).

---

### Table

![Well Rounded UI Table](https://i.postimg.cc/W408LqbK/Well-Rounded-Ui-Table.png)

#### Usage

```jsx
<Table
  keyColumn="name"
  columns={["Profile picture", "Name", "Role", "Active"]}
  data={data.map((d) => ({ ...d, role: returnRole(d.role) }))}
  layout={[{ type: "image" }, { type: "text" }, { type: "raw" }, { type: "boolean" }]}
  actions={[
    {
      action: "edit",
      iconOnly: false,
      onClick: (keyColumn) =>
          Alert("Edit Action", `Edit action on "${keyColumn}" detected.`),
    },
    {
      action: "delete",
      iconOnly: false,
      onClick: (keyColumn) =>
          Alert("Delete Action", `Delete action on "${keyColumn}" detected.`),
    }
  ]}
/>
```

#### Props

| Prop           | Type             | Purpose                                                  |
| -------------- |:----------------:| ---------------------------------------------------------|
| **keyColumn*** | string           | Key column name, used as the identifier of each row      |
| **columns***   | array of strings | Column names                                             |
| **data***      | array of objects | Display value in object order                            |
| **layout***    | array of objects | Type of each columns (image, text, raw or boolean)       |
| **actions***   | array of objects | Create and action column with edit and/or delete buttons |

*Required prop(s).

---

### Calendar

![Well Rounded UI Calendar](https://i.postimg.cc/kMZxqLz6/Well-Rounded-Ui-Calendar.png)

#### Usage

```jsx
<Calendar 
  data={[{ date: new Date(2023, 8, 2), id: 1, text: "Doctor's appointment" }]}
  onDayClick={(d) => Alert("A day has been clicked", d.toDateString(), "success")} 
  onDataClick={(d) => Alert("A data has been clicked", d.text, "warning")}
/>
```

#### Props

| Prop          | Type             | Purpose                                                      |
| ------------- |:----------------:| -------------------------------------------------------------|
| year          | number           | Set Calendar's year, current year by default                 |
| month         | number           | Set Calendar's month, current month by default               |
| showWeekends  | bool             | Hide weekends day if set to false, shown by default          |
| onDayClick    | function         | Callback function when clicking on a day (return day date)   |
| onDataClick   | function         | Callback function when clicking on data (return data object) |
| data*         | array of objects | Data displayed inside the Calendar                           |

*[{ date: new Date(), id: 1, text: "Text shown"}] 

---

### File Upload

![Well Rounded UI File Upload](https://i.postimg.cc/zfqmxQMv/Well-Rounded-Ui-File-Upload.png)

#### Usage

```jsx
<FileUpload 
  allowedExtensions={["jpg", "jpeg", "png"]}
  dragAndDrop
  multiple
  onChange={(test) => console.log(test)}
/>
```

#### Props

| Prop              | Type             | Purpose                                                      |
| ----------------- |:----------------:| -------------------------------------------------------------|
| allowedExtensions | array            | Extensions allowed to upload                                 |
| dragAndDrop       | bool             | Create a drag and drop zone                                  |
| multiple          | bool             | Allow to upload multiple files                               |
| onChange          | function         | Callback function when changing files (adding or deleting actions)   |

---

### Image Upload

![Well Rounded UI Image Upload](https://i.postimg.cc/3w4NJPLN/Capture-d-cran-2023-11-06-155844.png)

#### Usage

```jsx
<ImageUpload 
  allowedExtensions={["jpg", "jpeg", "png"]}
  dragAndDrop
  multiple
  onChange={(test) => console.log(test)}
/>
```

#### Props

| Prop              | Type             | Purpose                                                      |
| ----------------- |:----------------:| -------------------------------------------------------------|
| allowedExtensions | array            | Extensions allowed to upload                                 |
| dragAndDrop       | bool             | Create a drag and drop zone (recommanded)                    |
| multiple          | bool             | Allow to upload multiple files                               |
| onChange          | function         | Callback function when changing files (adding or deleting actions)   |
| height            | number           | Height of preview image and upload zone                      |
| width             | number           | Width of preview image and upload zone                       |

---

## Interactions

### Alert

![Well Rounded UI Alert](https://i.postimg.cc/BvF0wXNX/Well-Rounded-Ui-Alert.png)

#### Usage

```jsx
Alert("Edit Action", `Edit action on "${keyColumn}" detected.`);
```

#### Props

| Prop    | Type    | Purpose                                  |
| ------- |:-------:| -----------------------------------------|
| title   | string  | Alert's title                            |
| text    | string  | Alert's text                             |
| icon    | string  | Alert's icon (success, warning or error) |

---

### Floating Sidebar

![Well Rounded UI FloatingSidebar](https://i.postimg.cc/MGQ9fy39/Well-Rounded-Ui-Floating-Sidebar.png)

#### Usage

```jsx
<FloatingSidebar
  onClose={() => setIsFloatingSidebarOpen(false)}
  show={isFloatingSidebarOpen}
  title="Floating sidebar"
>
  <div className="p-3">
    <p>This is floating sidebar</p>
  </div>
</FloatingSidebar>
```

#### Props

| Prop      | Type     | Purpose                                          |
| --------- |:--------:| -------------------------------------------------|
| onClose   | function | Callback function to close the sidebar           |
| show      | bool     | Determine if the sidebar is open or not          |
| children  | dom      | Anything you want to display inside your sidebar |
| className | string   | Sidebar's classNames                             |
| title     | string   | Sidbar's title (shown at the top)                |
| direction | string   | Sidbar's direction, can be "left" or "right      |

---

### Modal

![Well Rounded UI Modal](https://i.postimg.cc/QdP6M6mB/Well-Rounded-Ui-Modal.png)

#### Usage

```jsx
<Modal onClose={() => setIsModalOpen(false)} show={isModalOpen}>
  <ModalHeader>
    <h3>Modal title</h3>
  </ModalHeader>
  <ModalBody>
    <p>This is modal body</p>
  </ModalBody>
  <ModalFooter>
    <Button
      text="Cancel"
      color="danger"
      onClick={() => setIsModalOpen(false)}
    />
  </ModalFooter>
</Modal>
```

Feel free to use [`<ModalHeader />`](#modal-header), [`<ModalBody />`]({#modal-body}) and [`<ModalFooter />`](#modal-footer) to enhance your modals !

#### Props

| Prop      | Type     | Purpose                                        |
| --------- |:--------:| -----------------------------------------------|
| onClose   | function | Callback function to close the modal           |
| show      | bool     | Determine if the modal is open or not          |
| children  | dom      | Anything you want to display inside your modal |

---

## Layout

### Badge

![Well Rounded UI Badge](https://i.postimg.cc/Y9gyHFmm/Well-Rounded-Ui-Badge.png)

#### Usage

```jsx
<Badge color="primary">
  Badge text
</Badge>
```

#### Props

| Prop      | Type        | Purpose                                                               |
| --------- |:-----------:| ----------------------------------------------------------------------|
| className | string      | Badge's classNames                                                    |
| children  | dom (text)  | Badge's content (mostly used for text)                                |
| color     | string      | Badge's color (primary, secondary, warning, default, success, danger) |

---

### Card

![Well Rounded UI Card](https://i.postimg.cc/gjNJqT58/Well-Rounded-Ui-Card.png)
#### Usage

```jsx
<Card>
  <CardHeader>
    <h3>Any title</h3>
  </CardHeader>
  {/* Your card content */}
  <CardFooter>
    {/* Any card footer content like buttons, etc */}
  </CardFooter>
</Card>
```

Feel free to use [`<CardHeader />`](#card-header) and [`<CardFooter />`](#card-footer) to enhance your modals !

#### Props

| Prop          | Type     | Purpose           |
| ------------- |:--------:| ------------------|
| className     | string   | Card's classNames |
| **children**  | dom      | Card's content    |

---

### Card Header

#### Usage

```jsx
<CardHeader>
  <h3>Any title</h3>
</CardHeader>
```

#### Props

| Prop          | Type     | Purpose               |
| --------------|:--------:| ----------------------|
| **children**  | dom      | Card Header's content |

---

### Card Footer

#### Usage

```jsx
<CardFooter>
  {/* Any card footer content like buttons, etc */}
</CardFooter>
```

#### Props

| Prop          | Type     | Purpose               |
| --------------|:--------:| ----------------------|
| **children**  | dom      | Card Footer's content |

---

### Modal Header

#### Usage

```jsx
<ModalHeader>
  <h3>Any title</h3>
</ModalHeader>
```

#### Props

| Prop          | Type     | Purpose                |
| ------------- |:--------:| -----------------------|
| **children**  | dom      | Modal Header's content |

---

### Modal Body

#### Usage

```jsx
<ModalBody>
  <p>Any content</p>
</ModalBody>
```

#### Props

| Prop          | Type     | Purpose                |
| ------------- |:--------:| -----------------------|
| **children**  | dom      | Modal Body's content |

---

### Modal Footer

#### Usage

```jsx
<ModalFooter>
  {/* Any modal footer content like buttons, etc */}
</ModalFooter>
```

#### Props

| Prop          | Type     | Purpose                |
| ------------- |:--------:| -----------------------|
| **children**  | dom      | Modal Footer's content |

---

### Row

![Well Rounded UI Row](https://i.postimg.cc/YSwS4dx3/Well-Rounded-Ui-Row.png)
#### Usage

```jsx
<Row>
  {/* Your row content */}
</Row>
```

Mostly used to display [`<Col />`](#col).

#### Props

| Prop      |  Type    | Purpose          |
| --------- |:--------:| -----------------|
| className | string   | Row's classNames |
| children  | dom      | Row's content    |

---

### Col

![Well Rounded UI Col](https://i.postimg.cc/YCF9q5Q0/Well-Rounded-Ui-Col.png)

#### Usage

```jsx
<Col lg={4} md={4} sm={6} xs={12}>
  {/* Your col content */}
</Col>
```

The column layout work the same as Bootstrap on a basis of 12 columns. <br/>
Meaning in this example the col will take the maximum width available on "xs" screens (12/12), half on "sm" screens (6/12), one third on md and lg columns (4/12).

#### Props

| Prop       | Type    | Purpose                                                |
| ---------- |:-------:| ------------------------------------------------------ |
| className  | string  | Col's classNames                                       |
| children   | dom     | Col's content                                          |
| lg*        | number  | Space taken over 12 units on large screens (lg)        |
| md*        | number  | Space taken over 12 units on medium screens (md)       |
| sm*        | number  | Space taken over 12 units on small screens (sm)        |
| xs*        | number  | Space taken over 12 units on extra small screens (xs)  |

*Values available: 1 to 12.

---

### Empty Line Placeholder

![Well Rounded UI Empty Line Placeholder](https://i.postimg.cc/HL4kbbZC/Well-Rounded-Ui-Empty-Line-Placeholder.png)

#### Usage

```jsx
<EmptyLinePlaceholder
  style={{ marginLeft: 40, marginBottom: 20 }}
  onClick={() => setFloatingSidebarOpen(true)}
  text="Add a new chapter"
  action="add"
/>
```

#### Props

| Prop    | Type        | Purpose                                                                 |
| ------- |:-----------:| ----------------------------------------------------------------------- |
| style   | styleObject | EmptyLinePlaceholder's inline styles                                    |
| onClick | function    | Callback function when clicking the placeholder                         |
| text    | string      | Text inside the placeholder                                             |
| action  | string      | Add and icon to the right of the text (only "add" value is supported)   |

---

### Progress

![Well Rounded UI Progress](https://i.postimg.cc/cHF1b0G9/Well-Rounded-Ui-Progress.png)

#### Usage

```jsx
<Progress
  className="mt-2"
  value={passwordValidation.progress}
  min={0}
  max={5}
  color={passwordValidation.color}
/>
```

#### Props

| Prop      | Type   | Purpose                    |
| --------- |:------:| -------------------------- |
| className | string | Progress bar's classNames  |
| value     | number | Progress bar value         |
| min       | number | Progress bar min value     |
| max       | number | Progress bar max value     |
| color     | string | Progress bar color         |

---

### Spinner

![Well Rounded UI Spinner](https://i.postimg.cc/s2pvKk2q/Well-Rounded-Ui-Spinner.png)

#### Usage

```jsx
<Spinner className="mb-2" color="primary" size="lg" />
```

#### Props

| Prop      | Type    | Purpose                                                           |
| --------- |:-------:| ----------------------------------------------------------------- |
| className | string  | Spinner's classNames                                              |
| color     | string  | Spinner's color (can be: primary, success, danger, white, black)  |
| size      | string  | Spinner's size (can be: lg, md, sm, xs)                           |

---

### Tabs

![Well Rounded UI Tas](https://i.postimg.cc/gJzksrQL/Well-Rounded-Ui-Tabs.png)

#### Usage

```jsx
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
```

Tabs component needs to be used with [`<TabPane />`](#tab-pane).

#### Props

| Prop      | Type    | Purpose                                                           |
| --------- |:-------:| ----------------------------------------------------------------- |
| children  | dom     | Tabs content, should be one or many [`<TabPane />`](#tab-pane)    |

---

### Tab Pane

#### Usage

```jsx
<TabPane name="Tab 1" key="1">
  Content of Tab Pane 1
</TabPane>
```

Tabs component needs to be used with [`<TabPane />`](#tab-pane).

#### Props

| Prop      | Type    | Purpose                 |
| --------- |:-------:| ----------------------- |
| name      | string  | Tab's title displayed   |
| children  | dom     | Tab's content           |
| disabled  | bool    | Disable the tab         |

<a href="#table-of-contents">^</a>