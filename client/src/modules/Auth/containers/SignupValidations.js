import * as Yup from 'yup'

const SignupValidations = Yup.object().shape({
  email: Yup.string()
    .email('Email is invalid!!')
    .required('Email is required!!'),
  username: Yup.string().required('Username is required!!'),
  password: Yup.string().required('Password is required!!'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required!!')
})

export { SignupValidations }
