if (process.env.NODE_ENV === 'prod') {
  // production URI
} else {
  module.exports = { mongoURI: `mongodb://localhost/${process.env.BOOKS_API_DATABASE_NAME}` };
}
