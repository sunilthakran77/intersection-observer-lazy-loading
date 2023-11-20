import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <ul className='menu'>
        <li>
            <Link to="/listItems">List Items</Link>
        </li>
        <li>
            <Link to="/infiniteScroll">Infinite Scroll</Link>
        </li>
    </ul>
  )
}

export default NavBar