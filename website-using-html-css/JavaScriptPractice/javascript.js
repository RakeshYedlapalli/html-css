function iterate() {
    //window.print();
    for (var i = 0; i < 10; i++) {
       // sleep(1)
      //console.log("Called");
      //document.getElementById("h1Id").style.fontSize = Math.random() * 50;
      document.getElementById("h1Id").style.fontSize = "red";
      document.getElementById("param").style.display = 'none';

      //document.getElementById('buttonId').onclick();
    //  iterate()

var car = {name:"BMW",speed:"100km",weight:20.3};

//alert("Car details are ->"+ car.name)

    }


  }
  function sleep(seconds) {
      var e = new Date().getTime() + seconds * 1000;
      while (new Date().getTime() <= e) {}
    }