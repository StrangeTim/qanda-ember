Qanda.Question = DS.Model.extend({
  blurb: DS.attr(),
  body: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
