const version = async () => {
  return {
    statusCode: 200,
    body: "0.0.1",
  };
};

module.exports = { version };
