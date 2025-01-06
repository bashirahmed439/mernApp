const mongoose = require("mongoose");

// Utility function to convert object keys to lowercase
const objectKeysToLowerCase = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(item => objectKeysToLowerCase(item)); // Recursive for arrays
  }

  if (typeof obj === 'object' && obj !== null) {
    return Object.keys(obj).reduce((acc, key) => {
      acc[key.toLowerCase()] = obj[key];
      return acc;
    }, {});
  }

  return obj;
};

// Common Methods for MongoDB
const Common = {};

// Insert a document into MongoDB
Common.insert = async (params, model, sess_user) => {
  try {
    const inserted = await model.create(params); // MongoDB equivalent to Knex's `insert`
    return objectKeysToLowerCase(inserted.toObject()); // Convert keys to lowercase
  } catch (err) {
    throw err; // Handle error
  }
};

// Update a document in MongoDB
Common.update = async (params, model, where, sess_user) => {
  try {
    const updated = await model.updateOne(where, { $set: params }); // MongoDB equivalent to Knex's `update`
    if (updated.nModified === 0) {
      throw new Error('No document was updated');
    }
    return objectKeysToLowerCase(updated); // Convert keys to lowercase
  } catch (err) {
    throw err; // Handle error
  }
};

// Delete a document from MongoDB
Common.delete = async (model, where, sess_user) => {
  try {
    const deleted = await model.deleteOne(where); // MongoDB equivalent to Knex's `delete`
    if (deleted.deletedCount === 0) {
      throw new Error('No document was deleted');
    }
    return objectKeysToLowerCase(deleted); // Convert keys to lowercase
  } catch (err) {
    throw err; // Handle error
  }
};

// Export the Common object to be used in other files
module.exports = Common;
