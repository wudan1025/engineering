/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
// https://astexplorer.net/ ast 在线转换工具

//它可以把源代转成抽象语法树
// ast 是深度优先(前序遍历)
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
/* 
整体结果
Program
 FunctionDeclaration
  Identifier
  Identifier
  BlockStatement
  BlockStatement
 FunctionDeclaration
Program 
*/
let visitor = {
  // 进入时触发
  enter(node, parent) {
    /*
    结果: 前序 深度遍历
    Program
    FunctionDeclaration
    Identifier
    BlockStatement
    */
    console.log(padding() + node.type);
    if (node.type === 'FunctionDeclaration') {
      node.id.name = 'newFunction';
    }
    indent++;
  },
  // 离开时触发
  leave(node, parent) {
    /*
    结果: 后序遍历
    Identifier
    BlockStatement
    FunctionDeclaration
    Program
    */
    indent--;
    console.log(padding() + node.type);
  },
};
estraverse.traverse(ast, visitor);
//重新生成源代码
let newSourceCode = escodegen.generate(ast);
// console.log(newSourceCode);
/*
// 转化结果
function newFunction() {
}
*/
/*
function ast(){}

转化为 ast 语法树后(使用 https://astexplorer.net/ 在线转换)

{
  "type": "File",
  "start": 0,
  "end": 16,
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 16
    }
  },
  "errors": [],
  "program": {
    "type": "Program",
    "start": 0,
    "end": 16,
    "loc": {
      "start": {
        "line": 1,
        "column": 0
      },
      "end": {
        "line": 1,
        "column": 16
      }
    },
    "sourceType": "module",
    "interpreter": null,
    "body": [
      {
        "type": "FunctionDeclaration",
        "start": 0,
        "end": 16,
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 16
          }
        },
        "id": {
          "type": "Identifier",
          "start": 9,
          "end": 12,
          "loc": {
            "start": {
              "line": 1,
              "column": 9
            },
            "end": {
              "line": 1,
              "column": 12
            },
            "identifierName": "ast"
          },
          "name": "ast"
        },
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 14,
          "end": 16,
          "loc": {
            "start": {
              "line": 1,
              "column": 14
            },
            "end": {
              "line": 1,
              "column": 16
            }
          },
          "body": [],
          "directives": []
        }
      }
    ],
    "directives": []
  },
  "comments": []
}
*/
