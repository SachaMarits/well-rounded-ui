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
  register={register}
  control={control}
  required
/>
```
Where `register` and `control` comes from `useForm()` used by `react-hook-form`.<br/>
> When using `react-hook-form` if required, maxLength or minLength error is detected, it will automatically shows an error message below the input field concerned.

#### Props

| Props        | Type           | Usage  |
| ------------- |:-------------:| -----:|
| className      | right-aligned | $1600 |
| name        | centered      |   $12 |
| type        | are neat      |    $1 |
| placeholder | are neat      |    $1 |

- className(string): set the input and label classNames.
- name(string): sets the input's html name. **highly recommended** when using a label → clicking it focuses the related field.
- type(string): sets the input's type (for example "textarea").
- placeholder(string): sets the input's placeholder
- register(function): register function for `react-hook-form`.
-

## Interactions

## Layout