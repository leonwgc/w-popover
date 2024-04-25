const { getNodeLib } = require('packw');
const chalk = require('chalk');

getNodeLib({ index: './demo/index.ssr.jsx' }, () => {
  console.log(chalk.greenBright('prerender library generated!'));
});
