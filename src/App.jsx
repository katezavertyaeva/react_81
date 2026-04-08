import "./App.css";
// Для того, чтобы использовать компонент внутри другого компонента
// нам необходимо импортировать компонент, который мы хотим использовать (Button)
// в файл, в котором лежит компонент, внутри которого (App.jsx) мы будем использовать импортируемый
import Button from "./components/Button/Button";

// Импорты лекций
// import Lesson02 from "./lessons/Lesson02/Lesson02";
import Lesson04 from "./lessons/Lesson04/Lesson04";

function App() {
  return (
    <div className="app">
      {/* Лекция 1. Introduction */}
      {/* <p>My first React app</p> */}
      {/* Вызов компонента Button */}
      {/* <Button />
      <Button /> */}

      {/* Лекция 2. Components */}
      {/* <Lesson02 /> */}

      {/* Lesson 4. State */}
      <Lesson04 />
    </div>
  );
}

export default App;
