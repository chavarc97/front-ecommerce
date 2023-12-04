import { NavLink } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuthContext'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './header.scss'


const Header = () => {
  const { isAuth, logout } = useAuthContext()

  const linkIsActive = (isActive) => {
    return isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'
  }

  return (
    <header className=' absolute'>
      <nav className='header fixed top-0 left-0 right-0 z-40'>
        <NavLink className='header__logo ' to='/'>OBLICUO</NavLink>
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
          {isAuth
            ? (
              <>
                <li className='header__list-item'>
                  <NavLink
                    to='/'
                    className='header__item-link'
                    onClick={logout}
                  >Logout
                  </NavLink>
                </li>
                <li className='header__list-item'>
                  <NavLink
                  to='/cart'
                  >
                    <div>
                    <ShoppingCartIcon className=' relative'/>
                    <div className='absolute'>
                        1
                    </div>
                    </div>
                  </NavLink>
                </li>
              </>
            )
            : (
              <>
                <li className='header__list-item'>
                  <NavLink
                    to='/login'
                    className={({ isActive }) => linkIsActive(isActive)}
                  >Login
                  </NavLink>
                </li>

                <li className='header__list-item'>
                  <NavLink
                    to='/signup'
                    className={({ isActive }) => linkIsActive(isActive)}
                  >Signup
                  </NavLink>
                </li>
              </>
            )}
             
        </ul>
      </nav>
    </header>
  )
}
export default Header
