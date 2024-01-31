//валидатор адреса url

import * as yup from 'yup';



const validation = ({url, links}) => {
  const schema = yup
    .string()
    .required()
    .url('Ссылка должна быть валидным URL')
    .notOneOf(links, 'RSS уже существует')
    .validate(url);
  return schema;
}

export { validation };
