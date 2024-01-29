//валидатор адреса url

import * as yup from 'yup';

const schema = yup.object({
  url: yup.string().url(),
});

export { schema };
