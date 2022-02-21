'use strict'

const connectDB = require("./db");
const { ObjectId } = require("mongodb");
const errorHandler = require("./errorHandler");

module.exports = {
  getCourses: async () => {
    let db,
      courses = [];
    try {
      db = await connectDB();
      courses = await db.collection("courses").find({}).toArray();
    } catch (error) {
      errorHandler(error)
    }
    return courses;
  },
  getCourse: async (root, args) => {
    let db,
      course = [];
    try {
      db = await connectDB();
      course = await db
        .collection("courses")
        .findOne({ _id: ObjectId(args.id) });
    } catch (error) {
      errorHandler(error);
    }
    return course;
  },
  getStudents: async () => {
    let db,
      students = [];
    try {
      db = await connectDB();
      students = await db.collection("students").find({}).toArray();
    } catch (error) {
      errorHandler(error);
    }
    return students;
  },
  getStudent: async (root, args) => {
    let db,
      students = [];
    try {
      db = await connectDB();
      students = await db.collection("students").findOne({ _id: ObjectId(args.id) });
    } catch (error) {
      errorHandler(error);
    }
    return students;
  },
};