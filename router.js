QandA.Router.map(function () {
  this.resource('all-questions', {path: '/'});
  this.resource('question', {path: 'all-question/:question_id'}, function() {
    this.resource('new-answer');
  });
  this.resource('new-question');
  this.resource('contact');
  this.resource('recent-answers');
});
