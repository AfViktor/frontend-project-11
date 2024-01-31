//валидатор адреса url

import * as Yup from 'yup';

const schema = Yup.object({
  url: Yup
  .string()
  .url(),
  links: Yup.mixed().notOneOf('RSS уже существует'),
});

export { schema };
