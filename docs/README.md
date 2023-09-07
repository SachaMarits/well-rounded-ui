# Well Rounded UI Documentation

## Inputs

### Input Field

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
| **color***    | string    | Button's color (primary, success, danger, default, disabled)|
| **onClick***  | function  | Button's function when clicked |
| submit        | bool      | Make this button the submit button of parent form |
| action        | string    | Add an icon (add, delete, edit, upload, donwload, send, navigate) |
| animate       | bool      | Animate the button when appearing |
| isSubmitting  | bool      | Disable the input while true (prevents multiple click) |
| disabled      | bool      | Disable the input |

*Required prop(s).