import { schema } from "./validate";

const app = () => {
  const state = {
    form: {
      status: '',
      validate: '',
      data: {
        url: ''
      }
    }
  }


  const form = document.querySelector('.rss-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.querySelector('#url-input')
    state.form.data.url = input.value

    const errors = schema.validateSync(state.form.data)
    
    console.log(state.form.data)
    console.log(errors)
  })
  console.log(form);
};

export { app };