import { withMutation } from '../../../hoc'
import { SIGNIN_USER } from '../'
import SigninFormikForm from './SigninFormikForm'

export default withMutation(SigninFormikForm, SIGNIN_USER)
