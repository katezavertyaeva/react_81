// Упрощенный импорт для стилей
import "./styles.css";

function Button() {
  // Вся дополнительная логика (создание переменных, выражения, функции и т.д.)
  // прописывается внутри тела компонента ДО return
  const isMainName = false;
  const buttonName = isMainName ? "Main Button" : "Button";

  return <button className="my-button">{buttonName}</button>;
}

// Чтобы мы могли использовать компонент (вызвать) в других компонентах
// его сначала нужно экспортировать. Для компонентов используется экспорт по умолчанию
export default Button;
