<template>

    <!-- ==== each box separately -->
    <div v-for="(item, index) in props.items" :key="index">
        <slot :name="`body_${props.singleHeader.quantity}`" :item="item[props.singleHeader.quantity]">
            <slot name="default" :item="item[props.singleHeader.quantity]">
            </slot>
        </slot>

    </div>

</template>

<script setup lang="ts">
import type { Header } from '../models/tableModels'

export interface Props {
    singleHeader: Header,
    items: Array<any>,
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
