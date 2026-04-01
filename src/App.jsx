import "./App.css";
// Для того, чтобы использовать компонент внутри другого компонента
// нам необходимо импортировать компонент, который мы хотим использовать (Button)
// в файл, в котором лежит компонент, внутри которого (App.jsx) мы будем использовать импортируемый
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="app">
      <p>My first React app</p>
      {/* Вызов компонента Button */}
      <Button />
      <Button />
    </div>
  );
}

export default App;
