// Именованный экспорт
export const lessonData = {
  lesson_number: 2,
  topic: "Components",
  teaher_name: "Ekaterina",
  teacher_surname: "Zavertyaeva",
  img_src:
    "https://thumbs.dreamstime.com/b/vector-%D1%80%D1%83%D1%87%D0%BA%D0%B0-%D1%81%D1%82%D0%B0%D1%80%D1%8B%D1%85-%D0%BA%D0%BD%D0%B8%D0%B3-%D0%B8-quill-%D0%BF%D0%B5%D1%80%D0%B0-%D1%87%D0%B5%D1%80%D0%BD%D0%B8-95380725.jpg",
};

export const getFullNameUppercase = (name, surname) => {
  return `${name.toUpperCase()} ${surname.toUpperCase()}`;
};
