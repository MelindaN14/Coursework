const app = require('./server');
const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});