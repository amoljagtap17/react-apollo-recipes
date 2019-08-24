import { withMutation } from '../providers'
import { SIGNIN_USER } from '../providers/graphql/signin.mutation'
import SigninFormikForm from './SigninFormikForm'

export default withMutation(SigninFormikForm, SIGNIN_USER)
