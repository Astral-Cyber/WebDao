import {createApp} from 'vue'
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
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index';
import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css';


VMdPreview.use(githubTheme, {
    Hljs: hljs,
});

VueMarkdownEditor.use(createTodoListPlugin, vuepressTheme, {
    Prism,
});

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(VMdPreview)
app.use(VueMarkdownEditor)
app.use(router).mount('#app')

