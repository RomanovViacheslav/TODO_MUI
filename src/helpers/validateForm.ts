import * as yup from 'yup';

export const validateSchema = yup.object().shape({
  name: yup.string().required('Поле должно быть заполнено'),
  info: yup.string().required('Поле должно быть заполнено'),
});
