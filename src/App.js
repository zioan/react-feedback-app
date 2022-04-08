import { v4 as uuidv4 } from 'uuid'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import Card from './components/shared/Card'
import Post from './components/Post'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import Redirect from './components/Redirect'
import RedirectHelper from './components/RedirectHelper'
import NestedRoutes from './components/NestedRoutes'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    // React router 6
    <Router>
      <Header />
      {/* Navigarion example using NavLink */}
      {/* <Card>
        <NavLink to='/' activeClassName='active'>
          Home
        </NavLink>
        <NavLink to='/about' activeClassName='active'>
          About
        </NavLink>
      </Card> */}
      <div className='container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>
          <Route path='/about' element={<AboutPage />} />

          {/* How to send params from route */}
          <Route path='/post/:id/:name' element={<Post />} />

          {/* Redirect */}
          <Route path='/redirect' element={<Redirect />} />
          <Route path='/redirect2' element={<RedirectHelper />} />

          {/* Nested routes / components render by route */}
          <Route path='/nested/*' element={<NestedRoutes />} />
        </Routes>
      </div>
      <AboutIconLink />
    </Router>
  )
}

export default App
