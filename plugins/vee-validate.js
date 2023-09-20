import { extend } from 'vee-validate'
import { required, min } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: (field) => `Поле ${field} является обязательным`,
})

extend('min', {
  ...min,
  message: (field, { length }) =>
    `Поле ${field} должно быть не менее ${length} символов`,
})
