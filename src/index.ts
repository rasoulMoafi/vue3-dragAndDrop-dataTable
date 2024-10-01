import { App } from 'vue';
import DataTable from './components/DataTableMain.vue';

export { DataTable };

export default {
    install(app: App) {
        app.component('DataTable', DataTable);
    },
};