/**
 * Vercel serverless entry: forwards all requests to the Express app.
 * Build must be run first so ../dist/index.cjs and ../dist/public exist.
 */
const { createApp } = require("../dist/index.cjs");

let appPromise = null;

function getApp() {
  if (!appPromise) appPromise = createApp();
  return appPromise;
}

module.exports = async (req, res) => {
  const app = await getApp();
  app(req, res);
};
