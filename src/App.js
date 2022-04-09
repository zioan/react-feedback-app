import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom'
import Header from './components/Header'
import Card from './components/shared/Card'
import Post from './components/Post'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import Redirect from './components/Redirect'
import RedirectHelper from './components/RedirectHelper'
import NestedRoutes from './components/NestedRoutes'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      {/* React router 6 */}
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
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
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
    </FeedbackProvider>
  )
}

export default App
