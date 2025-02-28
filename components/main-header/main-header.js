import Link from 'next/link';
import classes from './main-header.module.css';
import logoImg from '@/assets/logo.png';

export default function MainHeader() {
    return (
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <img src={logoImg.src} alt='A plate with food on it' />
                NextLevel Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li><Link href="/meals">Browse Meals</Link></li>
                    <li><Link href="/community">Foodies Community</Link></li>
                </ul>
            </nav>
        </header>
    );
}