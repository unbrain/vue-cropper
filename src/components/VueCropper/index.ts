import VueCropper from './index.vue'

export { VueCropper };

import { App } from "vue";

export default {
    install(app: App) {
        app.component("VueCropper", VueCropper);
    },
};