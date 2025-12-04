import logo from '@assets/logo.svg';
import Button from '@components/ui/button/Button'
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="Logo" />
      <nav className={styles.nav}>
        <a href="/calculator" className={styles.navLink}>Рассчитать стоимость</a>
        <a href="/calculator" className={styles.navLink}>Найти грузчика</a>
        <a href="/calculator" className={styles.navLink}>Партнерам</a>
        <a href="/calculator" className={styles.navLink}>О компании</a>
      </nav> 
      <Button size='small'>Войти</Button>  
    </header>
  );
}

export default Header;
