/* Automatically generated by './build/add-module.js' */
/* 发布集成环境下 router-view 不同 */
// const containerFactory = () => {
//   if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {
//     return () =>
//       import( /* webpackChunkName: "appview" */ '@/modules/layout/layout');
//   }
//   return () =>
//     import( /* webpackChunkName: "contentview" */ '@/components/layout/content');
// };
export default [{
  path: '/button',
  component: () => import(/* webpackChunkName: "button" */ './button')
}];
