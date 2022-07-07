// import vue from 'rollup-plugin-vue'
import vue from '@vitejs/plugin-vue'

import { nodeResolve } from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import { name } from '../package.json'
import commonjs from '@rollup/plugin-commonjs';
import postcssImport from 'postcss-import';
// 处理 apply 以及内置 mixin
import tailwindcss from 'tailwindcss'

import typescript from '@rollup/plugin-typescript'

const file = type => `dist/${name}.${type}.js`

const overrides = {
    compilerOptions: { declaration: true },
    // exclude: ["tests/**/*.ts", "tests/**/*.tsx"]
}

export { name, file }
export default {
    input: 'src/entry.ts',
    output: {
        name,
        file: file('esm'),
        format: 'es'
    },
    plugins: [
        // nodeResolve(),
        vue(),
        typescript({
            exclude: ["**/__tests__/*.spec.ts"]
        }),
        postcss({
            extensions: [".css"],
            extract: true,
            plugins: [postcssImport(), tailwindcss()]
        }),
        // commonjs({
        //     include: [
        //         "node_modules/**",
        //         "node_modules/**/*"
        //     ]
        // }),
    ],
    external: ['vue', 'lodash-es']
}
