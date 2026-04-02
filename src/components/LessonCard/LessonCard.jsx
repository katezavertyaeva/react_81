// Если мы экспортируем по умолчанию, то в момент импорта мы можем
// менять название (то есть придумывать псевдоним). Когда это нужно?
// Например, если вы используете библиотеку и там уже есть компонент и
// его название конфликтует с вашим, но вам в этом файле нужно использовать оба
import MyButton from "../Button/Button";
import "./styles.css";
// Именованный импорт
import { lessonData, getFullNameUppercase } from "./data";

function LessonCard() {
  // Если мы возвращаем JSX с несколькими соседними элементами, то у них
  // обязательно должна быть обертка, то есть общий родитель
  return (
    <div className="lesson-card-wrapper">
      <h3>Lesson {lessonData.lesson_number}</h3>
      <p>{lessonData.topic}</p>
      <p>
        {getFullNameUppercase(
          lessonData.teaher_name,
          lessonData.teacher_surname,
        )}
      </p>
      <img src={lessonData.img_src} />
      <MyButton />
    </div>
  );
}

export default LessonCard;
