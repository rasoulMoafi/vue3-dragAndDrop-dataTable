<template>
    <div>
        <slot name="header" :item="props.singleHeader">
        </slot>

    </div>
</template>

<script setup lang="ts">
import type { Header } from '../models/tableModels'



export interface Props {
    singleHeader: Header,
}
const props = defineProps<Props>();




</script>

<style scoped>
table,
th,
td {
    border: 1px groove rgb(209, 209, 209);
    border-collapse: collapse;
}

table {
    border-radius: 25px !important;

}

/* table.rounded-corners thead tr:first-child th:first-child {
border-top-left-radius: 10px;
} */

table,
tr {
    width: 100%;
}
</style>