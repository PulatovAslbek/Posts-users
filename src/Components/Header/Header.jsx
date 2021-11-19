import './Header.scss';
import { NavLink } from 'react-router-dom';
import useToken from '../../Hooks/useToken';


function Header() {
    const [, setToken] = useToken();

    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="header__nav">
                        <div className="box">
                            <NavLink className="header__nav-item" to="/users">Users</NavLink>
                            <NavLink className="header__nav-item" to="/profile">Profile</NavLink>
                        </div>
                        <button className='header__nav-out' onClick={() => { setToken(false) }} >Log Out</button>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;