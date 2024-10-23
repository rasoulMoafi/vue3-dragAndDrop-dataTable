# Vue Draggable Table Component

`drag-and-drop-data-table` is a TypeScript-based Vue component that allows users to create dynamic tables with drag-and-drop column reordering. With this package, you can build responsive tables where users can easily adjust the column arrangement by dragging and dropping columns to their desired positions. It's perfect for applications that require flexible data presentation and an enhanced user experience.

## Installation

First, install drag-and-drop-data-table via npm or yarn:

```javascript
npm install drag-and-drop-data-table
# or
yarn add drag-and-drop-data-table

```


## Setup

To use drag-and-drop-data-table in your Vue 3 project, follow these steps:

1- Import the Datatable in your main app file (e.g., main.js or main.ts).

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import 'vue3-snackbar-reactive/styles';

const app = createApp(App);
```

2- Add the <DataTable/> component to the main layout of your project or wherever you want the use the DataTable to appear.


```javascript
setup() {
  import { DataTable } from 'drag-and-drop-data-table';
}
```
```javascript
<template>
  <div>
    <!-- Your app's content -->
    <DataTable :headers="headers" :items="desserts" :configs="tableConfig"/>
  </div>
</template>
```

## Usage with Slots

drag-and-drop-data-table supports slot usage for custom syling and apperance of headers and bodies. If you opt not to use a slot, the component uses its default internal rendering mechanism. Here's how to engage with slots for a personalized touch:


### Slot Props

The <DataTable />  has three slot:

    header: can use for customize header
    body_[`value of your table column`]: can use for customize one of your columns
    default: can use for customize all of the body cells

### Example

Incorporate the <snackbarMessage/> component with a slot to tailor its display:

```javascript
<template #header="{ item }">
  <div>
    <p style="background-color: red;">{{ item.text }}</p>
  </div>
</template>

<template #body_fat="{ item }">
  <p style="background-color: blue;">
    {{ item }}
  </p>
</template>
<template #default="{ item }">
  <p style="background-color: blue;">
    {{ item }}
  </p>
</template>
```

### Styling the DataTable
