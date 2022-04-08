import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
      <Link to='/about'>
        {/* query and search for route */}
        {/* <Link
          to={{
            pathname: '/about',
            search: '?sort=name',
            hash: '#about-section',
          }}
        > */}
        <FaQuestion size={30} />
      </Link>
    </div>
  )
}

export default AboutIconLink
