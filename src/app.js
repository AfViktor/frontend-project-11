import onChange from "on-change";
import { validation } from "./validate";
import { render } from "./view";

const app = () => {
  
  const state = {
    form: {
      status: '',
      validate: '',
      data: {
        url: '',
        links: []
      },
      erorr: ''
    },
    request: {
      status: ''
    }
  }

  const watchedState = onChange(state, render);

  const form = document.querySelector('.rss-form')
  
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.querySelector('#url-input')
    state.form.data.url = input.value;
    
    validation(state.form.data)
      .then((url) => {
        state.form.data.links.push(url);
        watchedState.form.status = 'is valid'
        // render(state)
      })
      .catch((err) => {
        state.form.data.erorr = err.message
        state.form.status = 'is not valid'
        render(state)
      })
  })
};

export { app };