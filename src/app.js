import { schema } from "./validate";

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
    }
  }


  const form = document.querySelector('.rss-form')
  
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.querySelector('#url-input')
    state.form.data.url = input.value;
    // state.form.data.links.push(input.value);

    // try {
    //   schema.validate(state.form.data)
    // } catch (er) {
    //   state.form.erorr = er.message
    //   console.log(state.form.erorr)
    // }
    console.log(state.form.data)
  })
};

export { app };