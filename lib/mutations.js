'use strict'

const connectDB = require("./db");
const { ObjectId } = require("mongodb");
const errorHandler = require("./errorHandler");

module.exports = {
  createCourse: async (root, args) => {
    const defaults = {
      teacher: "",
      topic: "",
    };
    const newCourse = Object.assign(defaults, args.input);
    let db, course;
    try {
      db = await connectDB();
      course = await db.collection("courses").insertOne(newCourse);
      args.input._id = course.insertedId;
    } catch (error) {
      errorHandler(error);
    }

    return args.input;
  },
  editCourse: async (root, args) => {
    let db, course;
    try {
      db = await connectDB();
      await db
        .collection("courses")
        .updateOne({ _id: ObjectId(args._id) }, { $set: args.input });
      course = await db
        .collection("courses")
        .findOne({ _id: ObjectId(args._id) });
    } catch (error) {
      errorHandler(error);
    }

    return course;
  },
  createStudent: async (root, args) => {
    let db, student;
    try {
      db = await connectDB();
      student = await db.collection("students").insertOne(args.input);
      args.input._id = student.insertedId;
    } catch (error) {
      errorHandler(error);
    }

    return args.input;
  },
  editStudent: async (root, args) => {
    let db, student;
    try {
      db = await connectDB();
      await db
        .collection("students")
        .updateOne({ _id: ObjectId(args._id) }, { $set: args.input });
      student = await db
        .collection("students")
        .findOne({ _id: ObjectId(args._id) });
    } catch (error) {
      errorHandler(error);
    }

    return student;
  },
  addPeople: async (root, args) => {
    let db, person, course
    try{
      db = await connectDB();
      course = await db.collection('courses').findOne({ _id: ObjectId(args.courseID) });
      person = await db.collection("students").findOne({ _id: ObjectId(args.personID) });

      if(!course || !person)  throw new Error('la Persona o el Curso no Existe')
      await db
        .collection("courses")
        .updateOne(
          { _id: ObjectId(args.courseID) },
          { $addToSet: { people: ObjectId(args.personID) } }
        );
    }catch (error) {
      errorHandler(error);
    }
    return course;
  }
};