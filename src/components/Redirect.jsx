// How to redirect with react router 6
import { Navigate } from 'react-router-dom'

function Redirect() {
  const status = 200

  if (status === 404) {
    return <Navigate to='/' />
  }

  return <div>Redirect</div>
}

export default Redirect
