// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/Brandon/Desktop/Winter Quarter/Web Dev Frameworks/gatsby-weatherapp-pwa/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-about-jsx": () => import("/Users/Brandon/Desktop/Winter Quarter/Web Dev Frameworks/gatsby-weatherapp-pwa/src/pages/about.jsx" /* webpackChunkName: "component---src-pages-about-jsx" */),
  "component---src-pages-index-jsx": () => import("/Users/Brandon/Desktop/Winter Quarter/Web Dev Frameworks/gatsby-weatherapp-pwa/src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */),
  "component---src-pages-openweather-jsx": () => import("/Users/Brandon/Desktop/Winter Quarter/Web Dev Frameworks/gatsby-weatherapp-pwa/src/pages/openweather.jsx" /* webpackChunkName: "component---src-pages-openweather-jsx" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/Brandon/Desktop/Winter Quarter/Web Dev Frameworks/gatsby-weatherapp-pwa/.cache/data.json")

