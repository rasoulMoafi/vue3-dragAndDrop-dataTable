<template>
    <DataTableBase :headers="props.headers" :items="props.items" :configs="props.configs">
        <template #header="{ item }">
            <slot name="header" :item="item">
                <!-- <p>{{ item.text }}</p> -->
                <!-- <table>
                    <tr>
                        <th>{{ item.text }}</th>
                    </tr>
                </table> -->
            </slot>
        </template>

        <template v-for="(elem, index) in props.headers" :key="index" v-slot:[`body_${elem.quantity}`]="{ item }">
            <slot :name="`body_${elem.quantity}`" :item="item">
                <slot name="default" :item="item">
                    {{ item }}
                </slot>
            </slot>
        </template>

    </DataTableBase>

</template>

<script setup lang="ts">
import DataTableBase from './DataTableBase.vue'
import type { Config,PrimateHeader } from '../models/tableModels.ts'

export interface Props {
    items: Array<any>,
    headers: PrimateHeader[],
    configs: Config,
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
    background-color: rgb(160, 160, 161);

}

/* table.rounded-corners thead tr:first-child th:first-child {
border-top-left-radius: 10px;
} */

table,
tr {
    width: 100%;
}
</style>