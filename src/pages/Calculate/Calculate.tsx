import Header from "@components/layout/Header"
import styles from './Calculate.module.css'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import type { RootState } from '../../store';
import { Input } from '@components/ui/input/Input';
import arrow from '@assets/arrow.svg'
import { useState } from 'react';
import {useCitySuggestions} from '@shared/hooks/useCitySuggestions'
import { useAppDispatch } from '../../store/hooks';
import { changeCityFrom, changeCityTo, changeDateCollection, changeDeliveryMethod, changeDataCityFromCompleted, changeDataCityToCompleted, changeTypeCargo, changeWeight, changeVolume } from '../../store/actions';
import cdekLogo from '@assets/cdek.svg';
import delovieliniiLogo from '@assets/delovielinii.svg';
import { useDeliveryOptions } from '@shared/hooks/useDeliveryOptions';

function Calculate() {
  const dispatch = useAppDispatch();
  
  const [inputValueFrom, setInputValueFrom] = useState('');
  const [inputValueTo, setInputValueTo] = useState('');
  const [inputValueDate, setInputValueDate] = useState('');
  const [inputValueDeliveryMethod, setInputValueDeliveryMethod] = useState('');
  const [inputValueTypeCargo, setInputValueTypeCargo] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [inputValueWeight, setInputValueWeight] = useState('');
  const [inputValueVolume, setInputValueVolume] = useState('');

  const { suggestions: suggestionsFrom, isLoading: isLoadingFrom } = useCitySuggestions(inputValueFrom);
  const { suggestions: suggestionsTo, isLoading: isLoadingTo } = useCitySuggestions(inputValueTo);

  const suggestionsDeliveryMethod = ['Самовывоз', 'Доставка'];
  const suggestionsTypeCargo = [ 'Медицинская мебель', 'Лабораторное оборудование', 'Портативная медицинская электроника', 'Профессиональная медицинская электроника', 'Инструменты', 'Материал для одноразового использования', 'Реагенты для лаборатории', 'Флаконы и ампулы']

  const cityFrom = useSelector((state: RootState) => state.form.cityFrom);
  const cityTo = useSelector((state: RootState) => state.form.cityTo);
  const dateCollection = useSelector((state: RootState) => state.form.dateCollection);
  const deliveryMethod = useSelector((state: RootState) => state.form.deliveryMethod);
  const dataCityFromCompleted = useSelector((state: RootState) => state.form.dataCityFromCompleted);
  const dataCityToCompleted = useSelector((state: RootState) => state.form.dataCityToCompleted);
  //const typeCargo = useSelector((state: RootState) => state.form.typeCargo);
  const weight = useSelector((state: RootState) => state.form.weight);
  const volume = useSelector((state: RootState) => state.form.volume);

  const { deliveryOptions, isLoading, error, fetchDeliveryOptions } = useDeliveryOptions();

  // useEffect для автоматической отправки при выполнении условий
  useEffect(() => {
    if (dataCityFromCompleted && dataCityToCompleted) {
      console.log('Оба города заполнены, отправляю запрос...');
      fetchDeliveryOptions(cityFrom, cityTo, dateCollection, deliveryMethod, weight, volume);
    }
  }, [dataCityFromCompleted, dataCityToCompleted, cityFrom, cityTo, dateCollection, deliveryMethod, weight, volume,  fetchDeliveryOptions]);

  const handleCityCompleted = (type: 'from' | 'to') => {
    if (type === 'from') {
      dispatch(changeDataCityFromCompleted({dataCityFromCompleted: true}));
    } else {
      dispatch(changeDataCityToCompleted({dataCityToCompleted: true}));
    }
  };

  const handleWeightChange = (value: string) => {
    setInputValueWeight(value);
    dispatch(changeWeight({ weight: value }));
    console.log('Диспатч вызван Weight:', value);
  };

    const handleVolumeChange = (value: string) => {
    setInputValueVolume(value);
    dispatch(changeVolume({ volume: value }));
    console.log('Диспатч вызван Volume:', value);
  };

  const handleTypeCargoChange = (value: string) => {
    setInputValueTypeCargo(value);
    dispatch(changeTypeCargo({ typeCargo: value }));
    console.log('Диспатч вызван TypeCargo:', value);
  };

  const handleDeliveryMethodChange = (value: string) => {
    setInputValueDeliveryMethod(value);
    dispatch(changeDeliveryMethod({ deliveryMethod: value }));
    console.log('Диспатч вызван DeliveryMethod:', value);
  };

  const handleDataChange = (value: string) => {
    setInputValueDate(value);
    dispatch(changeDateCollection({ dateCollection: value }));
    console.log('Диспатч вызван date:', value);
  };

  const handleCityFromChange = (value: string) => {
    setInputValueFrom(value);
    dispatch(changeCityFrom({ cityFrom: value }));
    console.log('Диспатч вызван cityFrom:', value);
  };

  const handleCityToChange = (value: string) => {
    setInputValueTo(value);
    dispatch(changeCityTo({ cityTo: value }));
    console.log('Диспатч вызван cityTo:', value);
  };

  return (
    <div className="App">
      <Header></Header>
      <main className={styles.main}>
        <section className={styles.mainSection}>
          <h1 className={styles.h1}>Заказ 1</h1>
          <div className={styles.cargoContainer}>
            <p>Груз 1</p>
            {/*<Input variant='TypeCargoInput' placeholder="Выберете тип" label="Тип груза" value={inputValueTypeCargo} onChange={handleTypeCargoChange} suggestions={suggestionsTypeCargo} className="calc"/>*/}
            <Input variant='BaseInput' placeholder="1.2" label="Вес, кг" value={inputValueWeight} onChange={handleWeightChange} className="calc"/>
            <Input variant='BaseInput' placeholder="40×30×20" label="Габариты, см" value={inputValueVolume} onChange={handleVolumeChange} className="calc"/>
            {/*<Input variant='TypeCargoInput' disabled={disabled} placeholder="Стандартная" label="Защита от воздействий" className="calc"/>*/}
          </div>
        </section>
        <section className={styles.mainSection}>
          <h1 className={styles.h1}>Настройка заказов (заказ 1)</h1>
          <form action="" className={styles.calcForm}>
            <div className={styles.formContainerInputs}>
              <div className={styles.formContainerRow}>
                <Input variant='CityInput' placeholder="Введите город" label="Откуда" value={inputValueFrom} onChange={handleCityFromChange} suggestions={suggestionsFrom} className="calc"/>
                <img src={arrow} alt="" className={styles.formContainerImg}/>
                <Input variant='CityInput' placeholder="Введите город" label="Куда" value={inputValueTo} onChange={handleCityToChange} suggestions={suggestionsTo} className="calc"/>
              </div>
              <div className={styles.formContainerRow}>
                <Input variant='DateInput' placeholder="Введите дату" label="Дата сбора" value={inputValueDate} onChange={handleDataChange} className="calc"/>
                {/*<Input variant='DeliveryMethodInput' placeholder="Самовывоз" label="Способ" value={inputValueDeliveryMethod} onChange={handleDeliveryMethodChange} suggestions={suggestionsDeliveryMethod} prefVariant="calc"/>*/}
              </div>
            </div>
          </form>
        </section>
        <section className={styles.mainSection}>
          <h1 className={styles.h1}>
            Биржа услуг {`(${deliveryOptions.length} найдено)`}
            {isLoading && <span className={styles.loadingText}> • Загрузка...</span>}
          </h1>
          
          {/* Индикатор загрузки */}
          {isLoading && (
            <div className={styles.loadingContainer}>
              <div className={styles.loadingSpinner}></div>
              <p>Ищем лучшие варианты доставки...</p>
            </div>
          )}

          {/* Результаты */}
          <div className={styles.optionItemsContainer}>
            {!isLoading && deliveryOptions.map((option, index) => (
              <div key={index} className={styles.optionItem}>
                <div className={styles.optionItemRowContainer}>
                  <div>
                    <img 
                      src={option.provider === "cdek" ? cdekLogo : delovieliniiLogo} 
                      alt={option.provider} 
                    />
                    <p className={styles.optionItemRowItemName}>{option.name}</p>
                  </div>
                  <div className={styles.optionItemRowContainer}></div>
                </div>
                <div className={styles.optionItemRowContainer}>
                  <div></div>
                  <div className={styles.optionItemRowItemPrice}>{`${(option.price / 100).toFixed(2)} ₽`}</div>
                </div>
                <div></div>
              </div>
            ))}
          </div>

          {/* Сообщение когда нет результатов */}
          {!isLoading && deliveryOptions.length === 0 && cityFrom && cityTo && (
            <p className={styles.noResults}>Нет доступных вариантов доставки для выбранных городов</p>
          )}
        </section>
      </main>
    </div>
  )
}

export default Calculate