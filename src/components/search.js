var ko = require('knockout');

function init(action) {
  var myViewModel = function() {
    this.text = ko.observable('jeans');
    this.search = action;
  };
  require("./search.scss!");
  
  var handlebars = require('handlebars');

  var searchTemplate = handlebars.compile(require("./search.hbs!text"));

  ko.components.register('search-box', {
    template: searchTemplate(),
    viewModel: myViewModel
  });

  ko.applyBindings();
}

module.exports = {
  init: init
}
