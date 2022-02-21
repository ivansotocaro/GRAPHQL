'use strict'

const connectDB = require("./db");
const { ObjectId } = require("mongodb");
const errorHandler = require('./errorHandler');

/* Esto lo hacemos porque en nuestro esquema el tipo course
  esta guardando el Id de un estudiane,
  de esta manera podemos obtener el nombre o dato de ese estudiante,
  se exporta y se importa en lso resolvers
*/
module.exports = {
  Course:{
    people: async ({people}) => {
      let db, peopleData, ids
      try {
        db = await connectDB();
        ids = people ? people.map((id => ObjectId(id))) : [];
        peopleData = ids.length > 0 ? await db.collection('students').find({
          _id: {$in: ids}
        }).toArray() : [];
      } catch (error) {
        errorHandler(error);
      }
      return peopleData;
    }
  }
}