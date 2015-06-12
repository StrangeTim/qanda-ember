Qanda.NewQuestionController = Ember.Controller.extend ({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        blurb: this.get('blurb'),
        body: this.get('body')
      });
      newQuestion.save();
      this.setProperties({blurb: " ", body: " "});
      this.transitionToRoute('questions');
    }
  }
});
