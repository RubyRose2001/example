/**
 * 自动生成module目录
 * src/modules/
 */
const fs = require('fs');
const path = require('path');
const render = require('json-templater/string');
const uppercamelcase = require('uppercamelcase');
const camelCase = require('camelcase');
const endOfLine = require('os').EOL;
const chalk = require('chalk');
const firendOutput = require('./firend-cmd.js');

const moduleName = process.argv[2];
const uppercameModuleName = uppercamelcase(moduleName);
const camelModuleName = camelCase(moduleName);

const OUTPUT_PATH = path.join(__dirname, `../src/modules/${moduleName}`);

const STORE_OUTPUT_PATH = path.join(__dirname, `../src/store/modules/${moduleName}.js`);
const MODULE_OUTPUT_PATH = path.join(__dirname, `../src/modules/${moduleName}/${moduleName}.vue`);
const ROUTER_OUTPUT_PATH = path.join(__dirname, `../src/modules/${moduleName}/${moduleName}.router.js`);
const SERVICE_OUTPUT_PATH = path.join(__dirname, `../src/modules/${moduleName}/${moduleName}.service.js`);
const EXPORT_OUTPUT_PATH = path.join(__dirname, `../src/modules/${moduleName}/export.js`);

const serviceTpl = require('../config/tpl/service.tpl.js');
const routerTpl = require('../config/tpl/router.tpl.js');
const moduleTpl = require('../config/tpl/module.tpl.js');
const exportTpl = require('../config/tpl/export.tpl.js');
const storeTpl = require('../config/tpl/store.tpl.js');

//检查是否已经有同名module
if(fs.existsSync(OUTPUT_PATH)) {
  console.log(`${firendOutput.formatTitle('error', 'ERROR')} ${firendOutput.formatText('error', `${moduleName} module already exist! `)}`)
  return;
}

//service
const serviceStr = render(serviceTpl, {
  moduleName,
  uppercameModuleName
})

//router
const routerStr = render(routerTpl, {
  moduleName
})

//module
const moduleStr = render(moduleTpl, {
  moduleName
})

//export
const exportStr = render(exportTpl, {
  moduleName,
  camelModuleName
})

//store
const storeStr = render(storeTpl, {
  moduleName,
  camelModuleName
})

fs.mkdir(OUTPUT_PATH, err => {
  if(err) {
    console.log(`${firendOutput.formatTitle('error', 'ERROR')} ${firendOutput.formatText('error', `Add new module dir failed! `)}`)
    throw(err);
  };
  fs.writeFileSync(MODULE_OUTPUT_PATH, moduleStr);
  fs.writeFileSync(ROUTER_OUTPUT_PATH, routerStr);
  fs.writeFileSync(SERVICE_OUTPUT_PATH, serviceStr);
  fs.writeFileSync(EXPORT_OUTPUT_PATH, exportStr);
  fs.writeFileSync(STORE_OUTPUT_PATH, storeStr);
  
  console.log(`${firendOutput.formatTitle('success', 'DONE')} ${firendOutput.formatText('success', `New module (${moduleName}) created successfully ! `)}`)
});


