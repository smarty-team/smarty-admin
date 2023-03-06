
import SmartyUI from 'smarty-ui-rollup'
import 'smarty-ui-rollup/dist/smarty-ui-rollup.esm.css'

// // 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import Theme from 'vitepress/dist/client/theme-default'

export default {
    ...Theme,
    enhanceApp({ app }) {
        app.use(SmartyUI)
        app.component('Demo', Demo)
        app.component('DemoBlock', DemoBlock)
    },
}