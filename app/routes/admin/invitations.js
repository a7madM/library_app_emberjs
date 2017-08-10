import Ember from 'ember';

export default Ember.Route.extend({
  title: 'Invitations',
  model() {
    return this.store.findAll('invitation');
  }
});
