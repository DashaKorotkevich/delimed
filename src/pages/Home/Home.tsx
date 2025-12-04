import Header from "@components/layout/Header"
import Button from "@/components/ui/button/Button"
import but from '@assets/but.svg'
import styles from './Home.module.css'
import temp from '@assets/temp.svg'
import achivka from '@assets/achivka.svg'
import components from '@assets/components.svg'
import man from '@assets/man.svg'
import calend from '@assets/calend.svg'
import { Input } from '@components/ui/input/Input';
import arrow from '@assets/arrow.svg'
import { useState } from 'react';
import {useCitySuggestions} from '@shared/hooks/useCitySuggestions'
import { useAppDispatch } from '../../store/hooks';
import { changeCityFrom, changeCityTo } from '../../store/actions';

function Home() {
  const dispatch = useAppDispatch();

  const [inputValueFrom, setInputValueFrom] = useState('');
  const [inputValueTo, setInputValueTo] = useState('');

  const { suggestions: suggestionsFrom, isLoading: isLoadingFrom } = useCitySuggestions(inputValueFrom);
  const { suggestions: suggestionsTo, isLoading: isLoadingTo } = useCitySuggestions(inputValueTo);



  const handleCityFromChange = (value: string) => {
    setInputValueFrom(value);
    dispatch(changeCityFrom({ cityFrom: value }));
    console.log('Диспатч вызван с:', value);
  };

  const handleCityToChange = (value: string) => {
    setInputValueTo(value);
    dispatch(changeCityTo({ cityTo: value }));
        console.log('Диспатч вызван с:', value);
  };


  return (
    <div>
      <Header/>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={`${styles.heroHeart} ${styles.heroBox}`}>
            <h1 className={styles.h1}>Агрегатор транспортных услуг</h1>
            <p className={styles.heroP}>Грузоперевозки медицинского оборудования и реагентов</p>
            <Button 
              size='large' 
              style={{
                position: 'absolute',
                right: '0px',
                bottom: '0px'
              }}
              className="button-hover-effect"
              to="/calculator"
            >
              <img src={but} alt="" style={{marginRight: '10px'}}/>
              Рассчитать стоимость
            </Button>
          </div>
          <div className={`${styles.heroWork} ${styles.heroBox}`}>
          </div>
          <div className={`${styles.heroPills} ${styles.heroBox}`}></div>
          <div className={`${styles.heroNuances} ${styles.heroBox}`}>
            <h3 className={styles.heroH3}>Учитываем все нюансы вашего заказа</h3>
            <div className={styles.dieContainer}>
              <div className={styles.die}>
                <img className={styles.dieIcon} src={temp} alt="" />
                <p>Температура</p>
              </div>
              <div className={styles.die}>
                <img className={styles.dieIcon} src={calend} alt="" />
                <p>Срочная доставка</p>
              </div>
              <div className={styles.die}>
                <img className={styles.dieIcon} src={achivka} alt="" />
                <p>Страховка</p>
              </div>
              <div className={styles.die}>
                <img className={styles.dieIcon} src={man} alt="" />
                <p>Грузчики</p>
              </div>
              <div className={styles.die}>
                <img className={styles.dieIcon} src={components} alt="" />
                <p>Упаковка</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className={styles.h2}>Почему бизнес выбирает нас</h2>
            <div className={styles.whyBoxContainer}>
              <div className={styles.whyBox}>
                <p className={styles.whyBoxHeader}>Специализация на медицинских грузах</p>
                <p className={styles.whyBoxText}>Сформируем маршрут специально для безопасной перевозки реагентов и хрупкого оборудования</p>
              </div>
              <div className={styles.whyBox}>
                <p className={styles.whyBoxHeader}>Всесторонняя <br/> юридическая защита</p>
                <p className={styles.whyBoxText}>Наша платформа и все действия на <br/> ней защищены законом. Каждая <br/>доставка сопровождается пакетом соответствующих документов</p>
              </div>
              <div className={styles.whyBox}>
                <p className={styles.whyBoxHeader}>Единое решение для <br/> доставки и погрузки</p>
                <p className={styles.whyBoxText}>Закажите транспорт и грузчиков в одном окне, экономя время на координацию и переговоры</p>
              </div>
              <div className={styles.whyBox}>
                <p className={styles.whyBoxHeader}>Прозрачное ценообразование и аналитика</p>
                <p className={styles.whyBoxText}>Сравнивайте цены, сроки и условия разных компаний-перевозчиков в реальном времени. Узнайте больше о рынке, чтобы снизить расходы на логистику</p>
              </div>
              <div className={styles.whyBox}>
                <p className={styles.whyBoxHeader}>Технологичная и <br/>удобная платформа</p>
                <p className={styles.whyBoxText}>Интерфейс простой и понятный. Умные фильтры помогают быстро найти подходящего перевозчика</p>
              </div>
              <div className={styles.whyBox}>
                <p className={styles.whyBoxHeader}>Команда экспертов в вашем распоряжении</p>
                <p className={styles.whyBoxText}>Если возникли проблемя при составлении маршрута, свяжитесь с намиши экспертами, и они вам помогут!</p>
              </div>
            </div>
        </section>
        <section>
          <h2 className={styles.h2}>Начните заполнять черновик заявки</h2>
          <form action="" className={styles.heroForm}>
              <div className={styles.formContainer}>
                <Input variant='CityInput' placeholder="Введите город" label="Откуда" value={inputValueFrom} onChange={handleCityFromChange} suggestions={suggestionsFrom} prefVariant="home" />
                <img src={arrow} alt="" />
                <Input variant='CityInput' placeholder="Введите город" label="Куда" value={inputValueTo} onChange={handleCityToChange} suggestions={suggestionsTo} prefVariant="home"/>
              </div>
              <Button type="button" size='medium' className="button-hover-effect" to="/calculator">Продолжить</Button>
          </form>
        </section>
        <section>
          <div className={styles.whereSectionTitleContainer}>
            <h2 className={styles.whereSectionTitleTop}>Работаем по</h2>
            <h2 className={styles.whereSectionTitleBottom}>всей России</h2>
          </div>
          <div className={styles.whereSectionImg}></div>
        </section>
      </main>
    </div>
  )
}

export default Home