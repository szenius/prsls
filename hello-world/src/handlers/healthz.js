const healthz = async () => {
  return {
    statusCode: 200,
    body: "OK",
  };
};

module.exports = { healthz };
