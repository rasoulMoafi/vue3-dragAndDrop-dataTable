<template>
    <!-- {{ sizString }} -->
    <div class="wrapper" :style="`grid-template-columns: ${sizString};)`">

        <template v-for="(elem) in localHeaders">
            <div>
                <DataTableHeader :id="`${elem.text}`" :singleHeader="elem" style="text-align: center;"
                    :draggable="elem.draggable === 'true' ? true : false" @dragstart="changeLoc($event)"
                    @drag="dropFunc($event)" :class="elem.draggable === 'true' ? 'pointer' : ''">

                    <template #header="{ item }">
                        <slot name="header" :item="item">
                            <!-- {{elem.text}} -->
                        </slot>
                    </template>


                </DataTableHeader>
            </div>

        </template>
    </div>
    <!-- {{ localitemsHeaders[0] }} -->

    <div class="wrapper" :style="`grid-template-columns: ${sizString};)`">
        <div v-for="(elem, index) in localHeaders" :key="index">

            <div>

                <DataTableItems :id="`${elem.text}`" style="text-align: center;" :items="items"
                    :singleHeader="localHeaders[index]">
                    <template v-slot:[`body_${elem.quantity}`]="{ item }">
                        <slot :name="`body_${elem.quantity}`" :item="item">
                            <slot name="default" :item="item">
                                <!-- {{ item }} -->
                            </slot>
                        </slot>
                    </template>
                </DataTableItems>
            </div>

        </div>
    </div>

</template>

<script setup lang="ts">
import DataTableHeader from './DataTableHeader.vue'
import DataTableItems from './DataTableItems.vue'
import { ref, watch, onMounted } from 'vue'

import { changeSizeToGrid } from '../services/sizeTypeTableGenerate.ts'
import type { Config, Header, PrimateHeader } from '../models/tableModels'

// const header
export interface Props {
    items: Array<any>,
    headers: PrimateHeader[],
    configs: Config,
}

const props = defineProps<Props>();

const localHeaders = ref<any>([])
const localConfig = ref<any>([])
localHeaders.value = props.headers
localConfig.value = props.configs

// localConfig.value.startUnDraggableItems

onMounted(() => {

    for (const item in localHeaders.value) {
        if (localConfig.value.startUnDraggableItems - Number(item) > 0) {
            localHeaders.value[item]['draggable'] = 'false'
        } else if (localHeaders.value.length - Number(item) <= localConfig.value.endUnDraggableItems) {
            localHeaders.value[item]['draggable'] = 'false'
        } else {
            localHeaders.value[item]['draggable'] = 'true'
        }
    }
})
const sizString = ref('')
const sizeArray = ref<any>([]);


sizeArray.value = localHeaders.value.map((item: Header) => item.size);
for (const index in sizeArray.value) {
    sizString.value += changeSizeToGrid(sizeArray.value[String(index)]) + ' '
}

watch(localHeaders, (newHeader) => {
    sizeArray.value = []
    sizeArray.value = newHeader.map((item: Header) => item.size);
    sizString.value = ''
    for (const index in sizeArray.value) {
        sizString.value += changeSizeToGrid(sizeArray.value[String(index)]) + ' '
    }
})


function dropFunc(event: any) {
    
    event.preventDefault();
    for (const index in headerLocationObject.value) {

        // == find the target position
        if (event.x > headerLocationObject.value[index].left && event.x < headerLocationObject.value[index].right && headerLocationObject.value[index].draggable == 'true') {

            // == find the target
            droppedItem.value = headerLocationObject.value[index]

            // == check which direction the choisen header putted (left or right side of the header)
            if (headerLocationObject.value[index].right - event.x > event.x - headerLocationObject.value[index].left) {

                // == check the final position not less than index 0
                if (Number(index) > 0) {

                    // == change the headers sequences for right side of the header
                    if (headerLocationObject.value[Number(index) - 1].draggable == 'true') {
                        localHeaders.value = localHeaders.value.filter((elem: Header) => elem.text != draggedItem?.value?.text)
                        localHeaders.value.splice(Number(index) - 1, 0, draggedItem.value);
                    }
                } else {

                    // == change the headers sequences for index 0 for right side of the header
                    localHeaders.value = localHeaders.value.filter((elem: Header) => elem.text != draggedItem?.value?.text)
                    localHeaders.value.splice(0, 0, draggedItem.value);
                }
                // console.log('right');
            } else {
                if (headerLocationObject.value[Number(index) - 1].draggable == 'true') {
                    localHeaders.value = localHeaders.value.filter((elem: Header) => elem.text != draggedItem?.value?.text)
                    localHeaders.value.splice(Number(index), 0, draggedItem.value);
                }

                // console.log('left');
            }
        }
    }
}


const droppedItem = ref(null)
const headerLocationObject = ref<any[]>([])
const draggedItem = ref<Header>()

function changeLoc(event: any) {
    headerLocationObject.value = []
    // console.log('eeeeeeeeeeeeeeeeeeeeeeeeeee', event);
    for (const item of localHeaders.value) {
        headerLocationObject.value.push({ 'text': item.text, 'left': document.getElementById(`${item.text}`)?.getBoundingClientRect().left, 'right': document.getElementById(`${item.text}`)?.getBoundingClientRect().right, 'draggable': item.draggable })
    }

    for (const item of headerLocationObject.value) {
        if (event.x > item.left && event.x < item.right) {
            // draggedItem.value = item
            draggedItem.value = localHeaders.value.filter((word: Header) => word.text == item.text)[0];
        }
    }

}

</script>

<style scoped>
.wrapper {
    display: grid;
    /* grid-template-columns: 1fr 2fr 3fr 1fr 1fr; */
    /* border: 1px solid salmon; */
    /* gap: 10px; */
}

.pointer {
    cursor: pointer;
}
</style>