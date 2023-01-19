function Laskeikä() {
    var birthdate = document.getElementById("Syntymäpäivä").value;
    var birthdateArray = birthdate.split(".");
    var birthdateObject = new Date(birthdateArray[2], birthdateArray[1] - 1, birthdateArray[0]);
    var today = new Date();
    var age = today.getFullYear() - birthdateObject.getFullYear();
    var month = today.getMonth() - birthdateObject.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthdateObject.getDate())) {
        age--;
    }
    document.getElementById("Ikä").innerHTML = age;
  }
  