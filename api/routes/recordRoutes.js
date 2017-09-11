'use strict';
module.exports = function(app) {
  var recordController = require('../controllers/recordController');

  // recordList Routes
  app.route('/records')
    .get(recordController.list_all_tasks)
    .post(recordController.create_a_task);


  app.route('/records/:id')
    .get(recordController.read_a_task)
    .put(recordController.update_a_task)
    .delete(recordController.delete_a_task);
};
