// Redirect helper component
import { useNavigate } from 'react-router-dom'

function RedirectHelper() {
  const navigate = useNavigate()

  const onCLick = () => {
    // do something and redirect
    console.log('hello')
    navigate('/about')
  }

  return (
    <div>
      <h3>Redirect on Click</h3>
      <button onClick={onCLick}>Click</button>
    </div>
  )
}

export default RedirectHelper
