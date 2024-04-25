const path = require('path');
const fs = require('fs');

module.exports = function (htmlWebpackPlugin) {
  let renderer = {};

  if (fs.existsSync(path.resolve(`./ssr-lib/index.js`))) {
    renderer = require(`./ssr-lib/index.js`).default;
  }

  const body = renderer?.();

  return `
        <!doctype html>
        <html>
        <head>
	        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
          <meta name="apple-mobile-web-app-capable" content="yes">
	        <meta name="apple-touch-fullscreen" content="yes">
	        ${htmlWebpackPlugin.tags.headTags}
          <link rel="shortcut icon"/>
	        <title>w-popover demo</title>
        </head>
        <body>
	        <div id='root'>${body}</div>
		      ${htmlWebpackPlugin.tags.bodyTags}
		  </body>
      </html>
 `;
};
