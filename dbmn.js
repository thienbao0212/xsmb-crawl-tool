const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('databasemn.json');
const db = low(adapter);

db.defaults({ prizes: [] }).write();

module.exports = db;