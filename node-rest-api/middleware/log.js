// Middleware function to log request details
const logRequestDetails = (req, res, next) => {
    console.log(`Request URL: ${req.originalUrl}`);
    console.log(`Request Method: ${req.method}`);
    next();
  };

  module.exports = logRequestDetails;