document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();

  console.log('qqr coisa');
  const response = await axios.post('/', {
    username: document.querySelector('[name=username]').value,
    password: document.querySelector('[name=password]').value
  });
  console.log('qqr coisa');

  console.log(response);
  console.log(document.querySelector('[name=username]'));
});