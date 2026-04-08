// Шаг 1 - импорт хука из библиотеки React;
import { useState } from "react";

import Button from "../Button/Button";
import "./styles.css";

// Чтобы что-то на странице изменилось в React компонентах, то есть произошёл re-render (перерисовка)
// есть два основных способа: 1 - чтобы изменился props, 2 - чтобы изменилось внутреннее состояние
// компонента. Но во 2 случае компонент должен иметь такое состояние и его можно создать с помощью
// хука useState
function Counter() {
  // Шаг 2 - вызов хука useState и получение возвращаемых значений
  // При вызове хука useState мы должны передать начальное значение того, что мы
  // планируем хранить в стейте и затем изменять
  //  Хук возвращает массив из двух значений(всегда):
  //  1 - это и есть переменная, которая будет со временем изменяться
  //  2 - это функция - это единственный инструмент, с помощью которого мы можем
  // изменить state
  const [counter, setCounter] = useState(0);

  //  Шаг 3 - создание функций, которые мы будет передавать кнопкам.
  // Внутри этих функций мы вызываем функцию для изменения состояния setCounter
  // Есть 2 варианта вызова функции для изменения состояния
  // 1 - setState(новое значение стейта) - такой способ используется тогда, когда
  // нам не важно какое значение было до (red -> blue);
  // 2 - setState((prevState)=>prevState + 1) - такой способ используется тогда, когда
  // нам !важно какое значение было до (когда мы высчитываем новое значение для state
  //   увеличивая старое значение на 5 )
  const onCounterMinus = () => {
    setCounter((prevState) => prevState - 1);
  };
  const onCounterPlus = () => {
    setCounter((prevState) => prevState + 1);
  };

  const onCounterClear = () => {
    setCounter(0);
  };

  return (
    <div className="counter-wrapper">
      <div className="button-wrapper">
        <Button name="-" onButtonClick={onCounterMinus} />
      </div>
      <div className="result">{counter}</div>
      <div className="button-wrapper">
        <Button name="+" onButtonClick={onCounterPlus} />
      </div>
      <div className="button-wrapper">
        <Button name="Clear" onButtonClick={onCounterClear} />
      </div>
    </div>
  );
}

export default Counter;
