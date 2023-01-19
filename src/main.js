import {createApp, ref} from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-message-box.css'

import VMdEditor from '@kangc/v-md-editor/lib/codemirror-editor';
import '@kangc/v-md-editor/lib/style/codemirror-editor.css';

//Github
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
//Vuepress
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';


// highlightjs
import hljs from 'highlight.js';

//markdown-it插件
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index';
import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css';

// codemirror 编辑器的相关资源
import Codemirror from 'codemirror';
// mode
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/vue/vue';
// edit
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/matchbrackets';
// placeholder
import 'codemirror/addon/display/placeholder';
// active-line
import 'codemirror/addon/selection/active-line';
// scrollbar
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';
// style
import 'codemirror/lib/codemirror.css';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';

import 'sakana-widget/lib/index.css';
import SakanaWidget from 'sakana-widget';

VMdEditor.Codemirror = Codemirror;
VMdEditor.use(githubTheme, {
    //Prism,
    Hljs: hljs,
    // extend(markdownIt) {
    //     markdownIt.use(kbdplugin())
    // },
});
VMdEditor.use(createLineNumbertPlugin());
VMdEditor.use(createTodoListPlugin());


new SakanaWidget({autoFit: true, controls: false}).setState({i:0.002}).mount('#sakana-widget');

VMdPreview.use(githubTheme, {
    //Prism,
    Hljs: hljs,
    // extend(md) {
    //     md.use(kbdplugin())
    // },
});
VMdPreview.use(createLineNumbertPlugin());
VMdPreview.use(createTodoListPlugin());



const app = createApp(App)

app.config.globalProperties.$allHas = ref()
app.config.globalProperties.$reload = ref(true)
app.config.globalProperties.$station = ref(false)
app.config.globalProperties.$userInfo = ref({
    username: "Loading",
    intro: "Loading",
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(VMdPreview)
app.use(VMdEditor)
app.use(router).mount('#app')

