function IndexViewModel (id) {

  var self = this;

  self.patients = ko.observableArray([]);

  self.initialize = function () {

    $.ajax(
      'http://localhost:8888/patients/all?id=' + id,
      {
        method: 'GET',
        complete: function (xhr, status) {
          switch (status) {
            case 'success':
              var response = JSON.parse(xhr.responseText);

              self.patients(response);
              break;
            default:
              console.log(status);
          }
        }
      }
    );
  }

  self.initialize();

  ko.applyBindings(self);
};