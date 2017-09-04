// This will attach your set your credentials as headers for all requests sent.
$.ajaxPrefilter(function(settings, _, jqXHR) {
  jqXHR.setRequestHeader('X-Parse-Application-Id', '5ec0221ee8b439a1fc8fdfd6a638b3e6af1cb1b4');
  jqXHR.setRequestHeader('X-Parse-REST-API-Key', 'bbfaf2b05152043f1b8207ba13c600d4bf296795');
});

//-------------- BEGIN VARIABLE/FUNCTION DECLARATIONS ---------------------

var SERVER_URL = 'http://parse.shared.hackreactor.com/chatterbox/classes/messages';

//This one calls the Parse server to grab data, and sends it to processData
var getData = function() {
  $.ajax(SERVER_URL + '?order=-createdAt', {
    contentType: 'application/json',
    success: function(data) {
      processData(data); // eslint-disable-line no-use-before-define
    },
    error: function(data) {
      $('#error').prepend(' oh no').append('!');
    }
  });
};

// Here we sort the server messages by 'Created at' and send them to displayData
var processData = function(data) {
  var sortedData = data.results.sort(function(a, b) {
    var aDate = new Date(a.createdAt);
    var bDate = new Date(b.createdAt);
    if (aDate > bDate) {
      return -1;
    } else if (aDate === bDate) {
      return 0;
    } else {
      return 1;
    }
  });
  displayData({results: sortedData}, userSelected); // eslint-disable-line no-use-before-define
};

var checkNewData = function(data) {
  var compDate = newestDate; // eslint-disable-line no-use-before-define
  var newDate = new Date(data.results[0].createdAt);
  if (newDate > compDate) {
    return true;
  } else {
    return false;
  }
};

var userSelectedGroup = {};
var newestDate = new Date();
var userSelected;

var displayMessage = function(message, user, $results) {
  newestDate = new Date(message.createdAt);

  if (user === message.username || !user) {
    var timestamp = moment(message.createdAt).format('h:mm:ss a');
    var $result = $('<li></li>').attr('data-username', message.username);
    var $message = $('<p></p>').text(message.text);
    var $userName = $('<a></a>').text(message.username).addClass('onlyUser');
    var $likeUser = $('<a></a>').addClass('addUser').text(': ');
    var $timeStamp = $('<span></span>').text(timestamp);
     if (userSelectedGroup[message.username]) {
      $message.addClass('highlight');
    }
    $result.html([$userName, $timeStamp, $likeUser, $message]);
    if ($results !== undefined)
     $results.push($result);
    
  }  
}

var displayData = function(data, user) {
  var $results = [];
  var resultCount = 0;

  var i = 0;
  while (resultCount < 10 && i < data.results.length) {
    displayMessage( data.results[i], user, $results);
    i++;
    resultCount++;
  }

  $('#main').find('ul').html($results);

  $('.onlyUser').on('click', function() {
    if (userSelected !== $(this).closest('li').data('username')) {
      userSelected = $(this).closest('li').data('username');
      $('#backButton').toggle();
      if (!userSelected) {
        $('.title').text('Chat with JSON');
      } else {
        $('.title').text(userSelected);
      }
      getData();
    }
  });

  $('.addUser').on('click', function() {
    if (userSelectedGroup[$(this).closest('li').data('username')]) {
      delete userSelectedGroup[$(this).closest('li').data('username')];
    } else {
      userSelectedGroup[$(this).closest('li').data('username')] = true;
    }
    getData();
  });
};
//send data to the server 
var postData = function(message, username) {
  $.ajax({
    url: SERVER_URL,
    contentType: 'application/json',
    type: 'POST',
    data: JSON.stringify({
      username: username,
      text: message
    }),
    success: function(data) {
      console.log('Success!', data);
      displayMessage(message, username);
    },
    error: function(data) {
      console.log(data);
    }
  });
};
