# 前端自动化打包工具 



```
安装cnpm

npm config set registry https://registry.npm.taobao.org
# 修改镜像源

npm install -g less

npm i -g less
# -g 安装到全局 --global

npm install --save-dev webpack
# --save-dev 本地安装

npm install --save-dev webpack@<version>
# 安装指定版本号


# 如果你使用 webpack 4+ 版本，你还需要安装 CLI。

npm install --save-dev webpack-cli

当你在本地安装 webpack 后，你能够从 node_modules/.bin/webpack 访问它的 bin 版本。

node_modules/.bin/webpack -v
# 查看版本号

npm init 
# 初始化包软件项目

node_modules 
# node.js包软件的安装目录

package.json
# 项目描述文件

package-lock.json
# 版本锁定文件



拿到别人的项目 没有 node_modules 目录
npm install
# 根据包描述文件安装依赖
```


```
# 默认打包
node_modules/.bin/webpack => npx webpack


=>
Hash: e5b08fa642b586d176fb
Version: webpack 4.43.0
Time: 2717ms
Built at: 2020-07-02 2:23:57 ├F10: PM┤
  Asset      Size  Chunks             Chunk Names
main.js  72.1 KiB       0  [emitted]  main
Entrypoint main = main.js
[1] ./src/index.js 357 bytes {0} [built]
[2] (webpack)/buildin/global.js 472 bytes {0} [built]
[3] (webpack)/buildin/module.js 497 bytes {0} [built]
    + 1 hidden module

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/


# 入口文件 默认src/index.js
# 出口文件 默认dist/main.js



/dist 打包之后的目录 生成 css
/src 工程目录 写 less

npx webpack -o xx.js
# 指定出口


# 配置文件 当前项目根目录node_modules同级  package.json
webpack.config.js
npx webpack
# 默认指定 webpack.config.js 作为配置文件

npx webpack --config webpack.config.test.js
# 手动指定配置文件





```


<!-- NPM SCRIPTS -->
package.json

```json
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "yyy": "npx webpack",
    "zzz": "npx webpack --config webpack.config.test.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.12"
  },
  "dependencies": {
    "lodash": "^4.17.15"
  }
}
```

npm test
npm run yyy
npm start