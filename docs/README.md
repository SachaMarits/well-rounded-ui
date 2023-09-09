# Well Rounded UI Documentation

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

| Prop        | Type      | Purpose  |
| ----------- |:---------:| ---------|
| className   | string    | Input and label classNames |
| **name***    | string    | Input's html name |
| type        | string    | Input's type (for example "textarea") |
| placeholder | string    | Input's placeholder |
| register    | function  | Register function of `react-hook-form` |
| errors      | string or object | Display errors when they occur |
| required    | bool      | Makes the input required when using `<form />` |
| minLength   | number    | Minimum input length |
| maxLength   | number    | Maximum input length |

*Required prop(s).

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

| Prop          | Type      | Purpose  |
| ------------- |:---------:| ---------|
| className     | string    | Button's classNames |
| **text***     | string    | Button's text |
| **color***    | string    | Button's color (primary, success, danger, default, disabled) |
| **onClick***  | function  | Button's function when clicked |
| submit        | bool      | Make this button the submit button of parent form |
| action        | string    | Add an icon (add, delete, edit, upload, donwload, send, navigate) |
| animate       | bool      | Animate the button when appearing |
| isSubmitting  | bool      | Disable the button while true (prevents multiple click) |
| disabled      | bool      | Disable the button |

*Required prop(s).

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

| Prop          | Type      | Purpose  |
| ------------- |:---------:| ---------|
| **name***     | string    | MultiSelect's html name (used for label) |
| **label***    | string    | MultiSelect's label |
| options       | array of objects    | List of avalaible options [{ id: 1, text: "Item Text" }, ...] |
| **onChange*** | function  | Callback function when selection changed |

*Required prop(s).

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

| Prop              | Type      | Purpose  |
| ----------------- |:---------:| ---------|
| **totalItems***   | number    | Pagination total items |
| **itemsPerPage*** | number    | Pagination items per page |
| **activePage***   | number    | Pagination's active page |
| **onChange***     | function  | Callback function when changing page |

*Required prop(s).

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

| Prop          | Type             | Purpose  |
| ------------- |:----------------:| ---------|
| className     | string           | Select's classNames |
| **name***     | string           | Select's name (used for label) |
| label         | string           | Select's label |
| register      | function         | Register function of `react-hook-form` |
| required      | bool             | Makes the Select required when using `<form />` |
| **children*** | html options     | List of html options to shown inside the Select |
| defaultOption | string           | Text of the first option |
| defaultValue  | string           | Defines the default selected option |

*Required prop(s).

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

| Prop           | Type             | Purpose  |
| -------------- |:----------------:| ---------|
| **keyColumn*** | string | Key column name, used as the identifier of each row |
| **columns***   | array of strings | Column names |
| **data***      | array of objects | Display value in object order |
| **layout***    | array of objects | Type of each columns (image, text, raw or boolean) |
| **actions***   | array of objects | Create and action column with edit and/or delete buttons |

*Required prop(s).