import { NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import './header.scss'


const Header = () => {
  const linkIsActive = (isActive) => {
    return isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'
  }

  return (
    <nav className='header'>
      <NavLink className='header__logo' to='/'>OBLICUO</NavLink>
      <ul className='header__nav-list'>
        <li className='header__list-item '>
          <NavLink
            to='/'
            className={({ isActive }) => linkIsActive(isActive)} 
          >Home
          </NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink
            to='/dashboard'
            className={({ isActive }) => linkIsActive(isActive)}
          >Dashboard
          </NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink
            to='/login'
            className={({ isActive }) => linkIsActive(isActive)}
          >Login
          </NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink
            to='/sign-up'
            className={({ isActive }) => linkIsActive(isActive)}
          >Sign Up
          </NavLink>
        </li>
        <li className='header__list-icons'>
            <SearchIcon/>
            <PersonIcon/>
            
        </li>
      </ul>
    </nav>
  )
}
export default Header
