const APP_ROOT = "../../";
const _ = require("lodash");

const viaHandler = async (event, functionName) => {
  const handler = require(`${APP_ROOT}/functions/${functionName}`).handler;

  const context = {};
  const response = await handler(event, context);
  const contentType = _.get(
    response,
    "headers.Content-Type",
    "application/json"
  );
  if (response.body && contentType === "application/json") {
    response.body = JSON.parse(response.body);
  }
  return response;
};

const weInvokeGetIndex = () => viaHandler({}, "getIndex");
const weInvokeGetRestaurants = () => viaHandler({}, "getRestaurants");
const weInvokeSearchRestaurants = (theme) => {
  let event = {
    body: JSON.stringify({ theme }),
  };
  return viaHandler(event, "searchRestaurants");
};

module.exports = {
  weInvokeGetIndex,
  weInvokeGetRestaurants,
  weInvokeSearchRestaurants,
};
