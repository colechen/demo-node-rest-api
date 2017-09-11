'use strict';
var mysql = require('mysql');
var db = require('../../utils/db_connection');

exports.list_all_tasks = function(req, res) {
  console.log("List all records");
  db.query('SELECT id, title, amount, DATE_FORMAT(date, \'%Y-%m-%d\') as date FROM records ', function(err, data) {
    if (err) console.log(err);
    res.json(data);
  });
};

exports.create_a_task = function(req, res) {
  console.log("Create record");
  var record = {
    title: req.body.record.title,
    amount: req.body.record.amount,
    date: req.body.record.date
  };
  db.query('INSERT INTO records SET ?', record, function(err, data) {
    if (err) console.log(err);
    record['id'] = data.insertId;
    res.json(record);
  });
};


exports.read_a_task = function(req, res) {
  console.log("Get record");
  var id = req.params.id;
  db.query('SELECT * FROM records WHERE id = ?', id, function(err, data) {
    if (err) console.log(err);
    console.log(data);
    res.json(data);
  });
};


exports.update_a_task = function(req, res) {
  console.log("Update record");
  var id = req.params.id;
  var record = {
    title: req.body.record.title,
    amount: req.body.record.amount,
    date: req.body.record.date
  };
  db.query("UPDATE records SET ? WHERE id = ?", [record, id],
    function(err, data) {
      if (err) console.log(err);
      record['id'] = req.params.id;
      res.json(record);
    });
};


exports.delete_a_task = function(req, res) {
  console.log("Delete record");
  var id = req.params.id;
  db.query('DELETE FROM records WHERE id = ?', id, function(err, data) {
    if (err) console.log(err);
    res.json({ message: 'Record deleted' });
  });
};
