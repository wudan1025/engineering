/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
//babel核心模块
const core = require('@babel/core');
//用来生成或者判断节点的AST语法树的节点
let types = require('@babel/types');
// 转换箭头函数
// 官方方法
//let arrowFunctionPlugin = require('babel-plugin-transform-es2015-arrow-functions');
// 自己写的
let arrowFunctionPlugin = {
  visitor: {
    // 遍历到对应type会执行对应回调函数
    //如果是箭头函数，那么就会进来此函数，参数是箭头函数的节点路径对象
    ArrowFunctionExpression(path) {
      let node = path.node;
      //   hostFunctionEnvironment(path);
      // 改变函数类型，将箭头函数改为普通函数
      node.type = 'FunctionExpression';
    },
  },
};
/**
 * 1.要在函数的外面声明一个_this变量，值是this
 * 2.在函数的内容，换this 变成_this
 * @param {*} path
 */
function hostFunctionEnvironment(path) {
  //确定我的this变量在哪个环境里生成，向上查找 是普通函数或者是根节点 Program
  const thisEnvFn = path.findParent((parent) => {
    return (
      (parent.isFunction() && !path.isArrowFunctionExpression()) ||
      parent.isProgram()
    );
  });
  let thisBindings = '_this';
  //var _this = this;
  if (!thisEnvFn.scope.hasBinding(thisBindings)) {
    thisEnvFn.scope.push({
      id: types.identifier(thisBindings), //_this
      init: types.thisExpression(), //this
    });
  }
  //替换this
  let thisPaths = getScopeInfo(path);
  thisPaths.forEach((thisPath) => {
    //把this替换成_this
    thisPath.replaceWith(types.identifier(thisBindings));
  });
}
function getScopeInfo(path) {
  let thisPaths = [];
  path.traverse({
    ThisExpression(path) {
      thisPaths.push(path);
    },
  });
  return thisPaths;
}
let sourceCode = `
const sum = (a, b) => {
    console.log(this);
    const minus = (c,d)=>{
          console.log(this);
        return c-d;
    }
    return a + b;
}
`;
let targetSource = core.transform(sourceCode, {
  plugins: [arrowFunctionPlugin],
});

console.log(targetSource.code);

/*
const sum = function (a, b) {
  console.log(this);

  const minus = function (c, d) {
    console.log(this);
    return c - d;
  };

  return a + b;
};
 */
