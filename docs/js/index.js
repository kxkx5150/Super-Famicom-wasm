"use strict";
const gamepad = new Gamepad();
window.Module = {
  preRun: [],
  postRun: [],
  canvas: document.getElementById("output"),
  totalDependencies: 0,
  monitorRunDependencies: function (left) {
    this.totalDependencies = Math.max(this.totalDependencies, left);
  },
  onRuntimeInitialized: function() {
    initSNES();
  },
};

window.initSNES = function () {
  var snesReadFile = function (evt) {
    var f = evt.currentTarget.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      Module.FS_createDataFile("/", f.name, new Uint8Array(this.result), true, true);
      snesMain(f.name);
    };
    reader.readAsArrayBuffer(f);
  };
  var snesMain = (function () {
    var interval = null;
    var interval2 = null;
    var run = Module.cwrap("run", null, ["string"]);

    return function (filename) {
      clearInterval(interval);
      interval = setInterval(Module._S9xAutoSaveSRAM, 20000);
      clearInterval(interval2);
      interval2 = setInterval(checkGamepad, 25);
      // reboot_romnum = -1; // seems unnecessary?
      run(filename);
      resizeCanvas();
    };
  })();
  var snesReset = function(e){
    var reset = Module.cwrap("S9xSoftReset", null,null);
    reset();
  };
  document.getElementById("fileInput").addEventListener("change", snesReadFile);
  document.getElementById("resetButton").addEventListener("click", snesReset);
  window.addEventListener("beforeunload", Module._S9xAutoSaveSRAM);
};
const checkGamepad = () =>{
  gamepad.updateGamepad.call(gamepad);
}
window.addEventListener(
  "resize",
  (e) => {
    resizeCanvas();
  },
  true
);
const resizeCanvas = () => {
  setTimeout(() => {
    let canvas = document.getElementById("output");
    const wh = window.innerHeight;
    const ww = window.innerWidth;
    const nw = 256;
    const nh = 239;
    const waspct = ww / wh;
    const naspct = nw / nh;

    if (waspct > naspct) {
      var val = wh / nh;
    } else {
      var val = ww / nw;
    }
    let ctrldiv = document.querySelector(".ctrl_div");
    canvas.style.height = 239 * val - ctrldiv.offsetHeight - 18 + "px";
    canvas.style.width = 256 * val - 24 + "px";
  }, 1200);
};
document.getElementById("setteings").addEventListener("click", (e) => {
  showSetting();
});
document.getElementById("settingdiv").addEventListener("click", (e) => {
  hideSetting();
});
document.getElementById("gamepad_button_container").addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
},true);
function hideSetting() {
  let elem = document.getElementById("settingdiv");
  if (elem.style.display == "block") {
    elem.style.left = "-500px";
    setTimeout(function () {
      elem.style.display = "none";
    }, 400);
  }
}
function showSetting() {
  document.getElementById("settingdiv").style.display = "block";
  setTimeout(function () {
    document.getElementById("settingdiv").style.left = 0;
  }, 10);
}