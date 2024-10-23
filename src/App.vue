<template>
    <DataTableMain :headers="headers" :items="desserts" :configs="tableConfig">
        <!-- <template #header="{ item }">
            <div>
                <p style="background-color: cyan;">{{ item.text }}</p>
            </div>
        </template> -->

        <template #body_fat="{ item }">
            <p style="background-color: blue;">
                {{ item }}
            </p>
        </template>
        <template #body_protein="{ item }">
            <p style="background-color: red;">
                {{ item }}
            </p>
        </template>
    </DataTableMain>
</template>

<script setup lang="ts">

import DataTableMain from './components/DataTableMain.vue'
import { ref } from 'vue'

const headers = ref(
    [
        { text: 'Dessert (100g serving)', quantity: 'name', size: 'md', },
        { text: 'Calories', quantity: 'calories', size: 'md', },
        { text: 'Fat 22(g)', quantity: 'fat', size: 'sm', },
        { text: 'Carbs (g)', quantity: 'carbs', size: 'lg', },
        { text: 'Protein (g)', quantity: 'protein', size: '300', },
        { text: 'ali', quantity: 'ali', size: 'md', },
        { text: 'elyas', quantity: 'elyas', size: 'lg', },
    ]
)
const desserts = ref([
    {

        calories: 159,
        fat: 6.0,
        name: 'Frozen Yogurt',
        carbs: 24,
        protein: 4.0,
        ali: 1.9,
        elyas: 8.5
    },
    {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        ali: 1.5,
        elyas: 7.5
    },
    {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 3,
        ali: 1.5,
        elyas: 7.5
    },
])


const tableConfig = ref({
    startUnDraggableItems: 1,
    endUnDraggableItems: 1,

})

</script>


<style scoped>
table{
    direction: ltr;

}
table,
th,
td {
    border: 1px groove rgb(209, 209, 209);
    border-collapse: collapse;
}

table {
    border-radius: 25px !important;

}


table,
tr {
    width: 100%;
}
</style>
