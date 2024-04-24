const { getNodeLib } = require('packw');
const chalk = require('chalk');

getNodeLib({ index: './demo/index.ssr.jsx' }, () => {
  console.log(chalk.yellowBright('node库构建成功!'));
});
