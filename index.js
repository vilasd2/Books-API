const app = require('./app');

const port = process.env.BOOKS_API_PORT || 8080;

console.log(`Server started and listening on port ${port}`);

app.listen(port);
