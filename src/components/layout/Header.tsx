import logo from '@assets/logo.svg';
import Button from '@components/ui/button/Button'

function Header() {
  return (
    <header style={headerStyles.header}>
     <img style={headerStyles.logo} src={logo} alt="" />
      <nav style={headerStyles.nav}>
        <a href="/calculator">Рассчитать стоимость</a>
        <a href="/calculator">Найти грузчика</a>
        <a href="/calculator">Партнерам</a>
        <a href="/calculator">О компании</a>
      </nav> 
      <Button size='small'>Войти</Button>  
    </header>
  );
}

const headerStyles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16.5px 44px',
    backgroundColor: 'var(--color-white)',
    borderRadius: 'var(--border-radius-s)',
    marginBottom: '42px'
  },
  logo: {
    height: '60px',
    width: 'auto'
  },
  nav: {
    display: 'flex',
    gap: '40px',
    fontSize: 'var(--font-size-xl)'
  }
} as const;

export default Header
