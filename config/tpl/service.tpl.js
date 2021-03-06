const serviceTpl =
`/* Automatically generated by './build/add-module.js' */
import insightUtils from 'insight-utils';

// HttpUtils from insight-utils, HttpUtils.get or HttpUtils.post
const HttpUtils = insightUtils.httpUtils;

// path prefix
const baseUrl = window.config.globalConfig.apiPath.service; // 基础地址
// const auth = window.config.globalConfig.apiPath.auth; // auth地址

// service path
const urls = {};

// service methods
const {{uppercameModuleName}}Srv = {};

export default {{uppercameModuleName}}Srv;
`;

module.exports = serviceTpl;
