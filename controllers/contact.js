Qanda.ContactController = Ember.Controller.extend({
  messageSent: false,
  actions: {
    sendMessage: function(){
      var message = prompt('Wha\' \'choo want?');
      this.set('messageSent', true);
    }
  }
});
