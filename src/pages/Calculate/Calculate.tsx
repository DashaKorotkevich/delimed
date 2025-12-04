import Header from "@components/layout/Header"
import styles from './Calculate.module.css'
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

function Calculate() {
  const cityFrom = useSelector((state: RootState) => state.form.cityFrom);
  const cityTo = useSelector((state: RootState) => state.form.cityTo);
  return (
    <div className="App">
      <Header></Header>
      <main className={styles.main}>
      <p>Город отправления: {cityFrom || 'не выбран'}</p>
      <p>Город назначения: {cityTo || 'не выбран'}</p>
      </main>
    </div>
  )
}

export default Calculate