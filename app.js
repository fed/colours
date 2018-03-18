fetch('model.json')
  .then(response => response.json())
  .then(data => {
    const app = new Vue({
      el: '#app',
      data
    });
  });
