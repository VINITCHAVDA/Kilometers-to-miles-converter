function convert() {
    var kilometeters = document.getElementById("kilometeters").value;
    var btn = document.getElementById("btn");
    var btn = kilometeters * 0.621372;

    document.getElementById("p1").innerHTML =
      kilometeters + "kilometers is approximately" + btn + "miles";
  }