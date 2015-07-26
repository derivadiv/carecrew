function CaregiverModelView (id) {

  var self = this;

  self.patients = ko.observableArray([]);

  self.selectedPatient = ko.observable();

  self.selectedPatient.subscribe(function () {
    window.location.href = '/patient?id=' + self.selectedPatient()._id;
  });

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
  };

  self.addNewPatient = function () {

    var name = $('#addpat-name').val();
    var phone = $('#addpat-phone').val();
    var birthday = $('#addpat-birthday').val();
    var gender = $('#addpat-gender').val();
    var allergies = $('#addpat-allergies').val();

    var data = {
      name: name,
      phone: phone,
      birthday: birthday,
      gender: gender,
      allergies: allergies
    };

    $.ajax(
      'http://localhost:8888/patient',
      {
        method: 'POST',
        data: data,
        complete: function (xhr, status) {
          console.log(status);

        }
      }
    );


  }

  self.initialize();

  ko.applyBindings(self);
};