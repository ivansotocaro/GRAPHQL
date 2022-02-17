'use strict'

const course = [
  {
    _id: "anyid",
    title: "mi titulo 1",
    teacher: "mi profesor 1",
    description: "una descripcion",
    topic: "programacion",
  },
  {
    _id: "anyid",
    title: "mi titulo 2",
    teacher: "mi profesor 2",
    description: "una descripcion",
    topic: "programacion",
  },
  {
    _id: "anyid",
    title: "mi titulo 3",
    teacher: "mi profesor 3",
    description: "una descripcion",
    topic: "programacion",
  }
];

module.exports = {
  getCourse: () => {
    return course
  },
};
