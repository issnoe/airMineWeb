import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Tasks = new Mongo.Collection('tasks');
Router.configure({
  layoutTemplate: '',

  template: ''

});
if (Meteor.isServer) {
  
  Router.route('/auth', function () {
    var name = this.params;
    var data = this.request.body;

    this.response.writeHead(404, {
      'Content-Type': 'application/json'
    });
    this.response.end("404-Sin autorización. " + (data));



  }, { where: 'server' });
  // This code only runs on the server
  Meteor.publish('tasks', function tasksPublication() {
    return Tasks.find();
  });
}
Meteor.methods({
  'tasks.insert'(text) {
    check(text, String);

    // Make sure the user is logged in before inserting a task
    //if (! Meteor.userId()) {
    //throw new Meteor.Error('not-authorized');
    // }

    Tasks.insert({
      text,
      createdAt: new Date(),

    });
  },
  'tasks.remove'(taskId) {
    check(taskId, String);

    Tasks.remove(taskId);
  },
  'tasks.setChecked'(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);

    Tasks.update(taskId, { $set: { checked: setChecked } });
  },
});