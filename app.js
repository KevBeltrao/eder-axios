const app = require('./config/server.js');
const path = require('path')

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'app/views/index.html'));
});

app.post('/', (req, res) => {
  res.send(req.body);
});

app.listen(3000, () => {
  console.log('Ready');
});
