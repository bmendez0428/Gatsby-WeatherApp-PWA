const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Brandon/Desktop/Winter Quarter/Web Dev Frameworks/gatsby-weatherapp-pwa/.cache/dev-404-page.js"))),
  "component---src-pages-about-jsx": hot(preferDefault(require("/Users/Brandon/Desktop/Winter Quarter/Web Dev Frameworks/gatsby-weatherapp-pwa/src/pages/about.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/Brandon/Desktop/Winter Quarter/Web Dev Frameworks/gatsby-weatherapp-pwa/src/pages/index.jsx"))),
  "component---src-pages-openweather-jsx": hot(preferDefault(require("/Users/Brandon/Desktop/Winter Quarter/Web Dev Frameworks/gatsby-weatherapp-pwa/src/pages/openweather.jsx")))
}

