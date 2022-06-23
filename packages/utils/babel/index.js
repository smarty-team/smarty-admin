const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generator = require('@babel/generator').default
const types = require('@babel/types')
const fs = require('fs')
const fileName = 'source.tsx'

// 读取文件
const source = fs.readFileSync(__dirname + '/' + fileName).toString()

// 转换AST
const ast = parser.parse(source, {
    plugins: ['typescript', 'jsx']
})

console.log('ast', ast)

// walker
traverse(ast, {
    // 访问者
    CallExpression(path) {
        const calleeStr = generator(path.node.callee).code
        console.log('calleeStr', calleeStr)
        if (['console.log', 'console.error'].includes(calleeStr)) {
            const { line, column } = path.node.loc.start
            path.node.arguments.unshift(types.stringLiteral(`${fileName}(${line} ,${column})`))
        }
    }
})

const { code } = generator(ast, {
    fileName
})
console.log('code:', code)