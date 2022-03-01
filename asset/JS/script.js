function openServices(servicesName) {
    var i;
    var x = document.getElementsByClassName("contain-all");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(servicesName).style.display = "block";
  }