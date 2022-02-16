//use commonJS require below so we can dynamically import during build-time
if (process.env.NODE_ENV === "production") {
  module.exports = require("./confitureStore.prod");
} else {
  module.exports = require("./configureStore.dev");
}
