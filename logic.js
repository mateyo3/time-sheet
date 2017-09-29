// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDwlfhRuLWQhFehxZBfX7pbmTjxVZ12mqM",
    authDomain: "time-sheet-5a92b.firebaseapp.com",
    databaseURL: "https://time-sheet-5a92b.firebaseio.com",
    projectId: "time-sheet-5a92b",
    storageBucket: "",
    messagingSenderId: "166719991056"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  function clear() {
    $("#name-input").val("");
    $("#role-input").val("");
    $("#date-input").val("");
    $("#rate-input").val("");
  }


$("#employeeSubmitBtn").on("click", function(){

    var name = $("#name-input").val().trim();
    var role = $("#role-input").val().trim();
    var date = $("#date-input").val().trim();
    var rate = $("#rate-input").val().trim();

    var employee {
      name: name,
      role: role,
      date: date,
      rate: rate,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    }

    database.ref().push(employee);

    console.log(employee.name)
    console.log(employee.role)
    console.log(employee.date)
    console.log(employee.rate)

    clear();


  })