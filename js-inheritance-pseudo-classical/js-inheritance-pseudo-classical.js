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
  var result = {};

  result.phoneNumber = phoneNumber;
  result.send = function(recipientPhoneNumber, message) {
    return 'sending the message "' + message + '" to the phone number ' + recipientPhoneNumber + ' from ' + this.phoneNumber;
  };

  return result;
};

var makeSmartPhone = function(phoneNumber, email) {
  var phone = makePhone(phoneNumber);
  var oldSend = phone.send;

  phone.email = email;
  phone.send = function(recipientPhoneNumberOrEmail, message) {
    if (typeof recipientPhoneNumberOrEmail === 'number') {
      // We need `.call` here to make sure that `this` will reference our smart phone in makePhone's send
      return oldSend.call(this, recipientPhoneNumberOrEmail, message);
    } else {
      return 'sending the message "' + message + '" to email ' + recipientPhoneNumberOrEmail + ' from ' + this.email;
    }
  };

  return phone;
};

// your code is here
///////////////////////////////////////

var Make = function (phoneNumber) {
    this.phoneNumber = phoneNumber;
//    this.send = function(recipientPhoneNumber,message){
//  return 'sending the message "' + message + '" to the phone number ' + recipientPhoneNumber + ' from ' + this.phoneNumber;  
}
};

Make.prototype.send = function(recipientPhoneNumber,message){
  return 'sending the message "' + message + '" to the phone number ' + recipientPhoneNumber + ' from ' + this.phoneNumber;  
}
/////////////////////////////////////////////////////

var MakePhone = function (phoneNumber) {
    Make.call(this,phoneNumber)
}

MakePhone.prototype.send = function(recipientPhoneNumber,message){
   return Make.send.call(this,recipientPhoneNumber,message)
}

MakePhone.prototype = Object.create(Make.prototype)
MakePhone.prototype.constructor = MakePhone

////////////////////////////////////////////////////////
var MakeSmartPhone = function (phoneNumber, email){
    Make.call(this,phoneNumber)
    this.email = email;
}
MakeSmartPhone.prototype.send = function(recipientPhoneNumberOrEmail, message){
   if (typeof recipientPhoneNumberOrEmail === 'number') {
     return Make.send.call(this,recipientPhoneNumber,message)  
   }
   return 'sending the message "' + message + '" to email ' + recipientPhoneNumberOrEmail + ' from ' + this.email;
}


MakeSmartPhone.prototype = Object.create(Make.prototype)
MakeSmartPhone.prototype.constructor =MakeSmartPhone