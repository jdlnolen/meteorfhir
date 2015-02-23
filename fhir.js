if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({


    'click #createButton':function(){
    console.log('clicked');
    }

  });

  HTTP.post('list', {
    data: { foo: 'bar' }
  }, function(err, result) {
    console.log('Content: ' + result.content + ' === "Hello"');
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });


  HTTP.methods({
    'list': function(data) {
      if (data.foo === 'bar') {
        /* data we pass via the header is parsed by EJSON.parse
        If not able, then it returns the raw data instead */
      }
      return 'Hello';
    }
  });




}
