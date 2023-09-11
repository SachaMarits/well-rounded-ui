[![Well Rounded UI Banner](https://i.postimg.cc/dVjkGvFK/Well-Rounded-Ui-Banner.png)](https://github.com/SachaMarits/well-rounded-ui)

## Table of contents

- [Getting started](#getting-started)
- [Dependencies](#dependencies)
- [About](#about-well-rounded)
- [Documentation](#documentation)
- [Live Demo]({#live-demo})

## Getting Started

### Adding Package

Install Well Rounded UI from NPM:

```
npm i well-rounded-ui
```

### Importing Components

Import required Well Rounded UI components within your files:

```jsx
import { Button } from 'well-rounded-ui';
```

Now you are ready to use the imported Well Rounded UI components ! 🔥

### Displaying MDI Icons

To use Material Design Icons import them inside your index.html:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@7.2.96/css/materialdesignicons.min.css">
```
or
```html
<script src="https://cdn.jsdelivr.net/npm/@mdi/font@7.2.96/scripts/verify.min.js"></script>
```
> Import the latest version of the icons: https://www.jsdelivr.com/package/npm/@mdi/font

Now you will see all latest mdi icons !

---

## Dependencies

### Required Peer Dependencies

These libraries are not bundled with Well Rounded UI and required at runtime:

  * [**react**](https://www.npmjs.com/package/react)
  * [**react-dom**](https://www.npmjs.com/package/react-dom)
  * [**react-transition-group**](https://www.npmjs.com/package/react-transition-group)

---

## About Well Rounded

Compact yet powerful package meaning you won't have to spend many hours to understand how simple it is to use !

### Reusable Components

Many reusable components:
* Buttons with predefined styles
* Inputs fields: All types are supported (text, textarea, date, select, checkboxes, etc)
* Easy editable Spinners
* Smooth Alerts like sweet-alert package
* MultiSelect to select several entries
* Modal to show more data over the page
* Floating side bar for in depth information
* Tabs to split your contents
* Badges to highlight important texts
* Customizable Table provided with a Pagination component ! 
* And more to discover...

### Homemade components

This package does not use bootstrap, sweet alert, multi-select, reactstrap and more but they are still available: reasons why?

I build my own bootstrap* column layout, buttons components, multi-select, sweet alert, ... <br />
It avoids the project to import useless css and packages prefering focusing the usefull features only.

*Many class names from bootstrap exist with the same name so you won't be lost ! 

### Material Design Icons

Free to use popular icons with many new icons being added monthly. <br />
I have been using this icon library for many years always finding the perfect icon to use.

https://materialdesignicons.com/

---

## [Documentation](https://sachamarits.github.io/well-rounded-ui)

https://sachamarits.github.io/well-rounded-ui

---

## [Live Demo](https://well-rounded-react-template.sachamarits.be/)

Live demo: https://well-rounded-react-template.sachamarits.be/ <br/>
Most components can be seen within: `Template > Components` and `Template > Crud Table`.