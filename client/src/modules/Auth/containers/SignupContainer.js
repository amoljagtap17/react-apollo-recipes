import { withMutation } from '../../../hoc'
import { SIGNUP_USER } from '../'
import SignupFormikForm from './SignupFormikForm'

export default withMutation(SignupFormikForm, SIGNUP_USER)
