import { Routes, Route } from 'react-router-dom'
import Post from './Post'

function NestedRoutes() {
  return (
    <div>
      {/* http://localhost:3000/nested */}
      <h2>Nested routes example</h2>
      <p>content here</p>

      {/* http://localhost:3000/nested/show */}
      {/* display the components above only on this route */}
      <Routes>
        <Route path='/show' element={<Post />} />
      </Routes>
    </div>
  )
}

export default NestedRoutes
