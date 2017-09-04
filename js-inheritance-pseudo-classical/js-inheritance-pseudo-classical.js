// Refactor `makePhone` and `makeSmartPhone` to use pseudo classical inheritance
// They should have exactly the same methods as the objects returned from the
// original maker functions except in pseudo classical style. ie., you should be
// able to use your new functions like so to create new phone instances.
//
//   var myPhone = new Phone();
//   var mySmartPhone = new SmartPhone();
//

// DO NOT MODIFY FUNCTIONS `makePhone` AND `makeSmartPhone`
// USE THE CONSTRUCTOR FUNCTIONS LOCATED AT THE END OF THIS FILE

var makePhone = function(phoneNumber) {
  this.result = {};
  this.result.phoneNumber = phoneNumber;
};

this.prototype.send = function(recipientPhoneNumber, message) {
    return 'sending the message "' + message + '" to the phone number ' + recipientPhoneNumber + ' from ' + this.phoneNumber;
  };



var makeSmartPhone = function(phoneNumber, email) {
  makePhone.call(this,phoneNumber)
  this.oldSend = this.send;
  this.email = this.email;
  
};

makeSmartPhone.prototype=Objects.create(makePhone.prototype);
makeSmartPhone.prototype.constructor=makeSmartPhone;

this.prototype.send = function(recipientPhoneNumberOrEmail, message) {
    if (typeof recipientPhoneNumberOrEmail === 'number') {
      // We need `.call` here to make sure that `this` will reference our smart phone in makePhone's send
      return oldSend.call(this, recipientPhoneNumberOrEmail, message);
    } else {
      return 'sending the message "' + message + '" to email ' + recipientPhoneNumberOrEmail + ' from ' + this.email;
    }
  };



//  const p1 = new makePhone();
//  const p2 = new makeSmartPhone();
//