// рендер страницы

const render = (state) => {
  const input = document.querySelector('#url-input');
  const feedback = document.querySelector('.feedback');
  
  console.log(state.form.status)
  
  switch (state.form.status) {
    // case 'is valid':
    //   feedback.textContent = 'RSS успешно загружен';
    //   feedback.classList.remove('text-danger');
    //   feedback.classList.add('text-success');
    //   break;
    
      case 'is not valid':
      feedback.textContent = state.form.data.erorr;
      feedback.classList.remove('text-success')
      feedback.classList.add('text-danger')
      input.classList.add('is-invalid')
      break;
  }

  
};

export { render };
