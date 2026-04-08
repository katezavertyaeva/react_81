import Button from "../../components/Button/Button";
import Counter from "../../components/Counter/Counter";
import "./styles.css";

function Lesson04() {
  const showMessage = () => {
    alert("Example outer function");
  };

  const showMessageWithName = (name) => {
    alert(`Outer click - ${name}`);
  };

  return (
    <div className="lesson04-wrapper">
      <Counter />
      {/* Пример 1 - создание функции внутри onClick (анонимная функция) */}
      <Button
        name="INNER FUNC"
        onButtonClick={() => {
          alert("Example inner function");
        }}
      />
      {/* Пример 2 - создание функции вне кнопки и передача названия */}
      <Button name="OUTER FUNC" onButtonClick={showMessage} />
      {/* Пример 3 - создание функции вне кнопки с параметрами*/}
      <Button
        name="FUNC WITH PARAM"
        onButtonClick={() => {
          showMessageWithName("Tom");
        }}
      />
    </div>
  );
}

export default Lesson04;
