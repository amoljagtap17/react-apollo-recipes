import * as Yup from 'yup'

const SigninValidations = Yup.object().shape({
  username: Yup.string().required('Username is required!!'),
  password: Yup.string().required('Password is required!!')
})

export { SigninValidations }
