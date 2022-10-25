import classes from './header.module.scss';
import logo from '../../assets/reactjs-gallery-logo.webp';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header className={classes.header}>
            <Link to='/'>
                <img src={logo} alt='logo' />
            </Link>
        </header>
    );
}

export default Header;