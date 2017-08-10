import Ember from 'ember';

export default Ember.Route.extend({
  title: 'Inbox',
  model() {
    return this.store.findAll('contact');
  }
});