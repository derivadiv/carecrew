/**
 * @param {string} firstName
 * @param {string} lastName;
 */
function CareGiver (firstName, lastName) {

  this.firstName = firstName;
  this.lastName = lastName;

  this.friendlyName = firstName + ' ' + lastName;

  this.createdAt = Date.now();

  //probably never used
  this.location = {
    state: null,
    zip: null
  };
};

module.exports = CareGiver;
