import { withMutation } from '../../../hoc'
import { SIGNUP_USER } from '../providers/graphql/signup.mutation'
import SignupFormikForm from './SignupFormikForm'

export default withMutation(SignupFormikForm, SIGNUP_USER)
