import {createApp, ref} from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs';

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
// highlightjs
import hljs from 'highlight.js';
//List

import 'sakana-widget/lib/index.css';
import SakanaWidget from 'sakana-widget';

new SakanaWidget({autoFit: true, controls: false}).setState().mount('#sakana-widget');

VMdPreview.use(githubTheme, {
    Hljs: hljs,
});

VueMarkdownEditor.use(vuepressTheme, {
    Prism,
});

const app = createApp(App)

app.config.globalProperties.$station = ref(false)
app.config.globalProperties.$userInfo = ref({
    username: "Loading",
    intro: "Loading",
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(VMdPreview)
app.use(VueMarkdownEditor)
app.use(router).mount('#app')

