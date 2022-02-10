// https://astexplorer.net/ ast 在线转换工具

//它可以把源代转成抽象语法树
let esprima = require('esprima');
//它可遍历语法权树，修改树上的语法节点
let estraverse = require('estraverse');
// 生成代码
let escodegen = require('escodegen');
// 源代码
let sourceCode = 'function ast(){}';
// 调用api 转化为ast 语法树
let ast = esprima.parse(sourceCode);
let indent = 0;
const padding = () => ` `.repeat(indent);
// 访问器
let visitor = {
    // 进入
    enter(node, parent) {
        console.log(padding() + node.type);
        if (node.type === 'FunctionDeclaration') {
            node.id.name = 'newFunction';
        }
        indent++;
    },
    // 离开
    leave(node, parent) {
        indent--;
        console.log(padding() + node.type);
    }
}
estraverse.traverse(ast, visitor)
//重新生成源代码
let newSourceCode = escodegen.generate(ast);
console.log(newSourceCode);