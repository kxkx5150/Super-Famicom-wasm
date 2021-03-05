"use strict";
class Gamepad {
  constructor() {
    this.selected = -1;
    this.pads = [];
    this.INPUT = {
      A: 0,
      B: 1,
      X: 8,
      Y: 9,
      L: 10,
      R: 11,
      SELECT: 2,
      START: 3,
      UP: 4,
      DOWN: 5,
      LEFT: 6,
      RIGHT: 7,
    };
    this.buttonMap = {
      START: {
        no: 9,
        press: false,
      },
      SELECT: {
        no: 8,
        press: false,
      },
      A: {
        no: 1,
        press: false,
      },
      B: {
        no: 2,
        press: false,
      },
      X: {
        no: 0,
        press: false,
      },
      Y: {
        no: 3,
        press: false,
      },

      L: {
        no: 4,
        press: false,
      },
      R: {
        no: 5,
        press: false,
      },
    };
    this.axesMap = {
      RIGHT: {
        no: 7,
        press: false,
      },
      LEFT: {
        no: 6,
        press: false,
      },
      DOWN: {
        no: 5,
        press: false,
      },
      UP: {
        no: 4,
        press: false,
      },
    };
    window.addEventListener("gamepadconnected", (e) => {
      this.pads[e.gamepad.index] = e.gamepad;
      if (this.selected === -1) this.selected = e.gamepad.index;
      document.getElementById("gamepad_info").textContent = "Gamepad connected ";
      document.getElementById("gamepad_name").textContent = e.gamepad.id;
    });
    this.button_info_elem = document.getElementById("gamepad_presse_button");
    this.createOptions("start_button");
    this.createOptions("select_button");
    this.createOptions("a_button");
    this.createOptions("b_button");
    this.createOptions("x_button");
    this.createOptions("y_button");
    this.createOptions("l_button");
    this.createOptions("r_button");
    this.loadValue();
    document.getElementById("start_button").addEventListener("change", this.setValue.bind(this));
    document.getElementById("select_button").addEventListener("change", this.setValue.bind(this));
    document.getElementById("a_button").addEventListener("change", this.setValue.bind(this));
    document.getElementById("b_button").addEventListener("change", this.setValue.bind(this));
    document.getElementById("x_button").addEventListener("change", this.setValue.bind(this));
    document.getElementById("y_button").addEventListener("change", this.setValue.bind(this));
    document.getElementById("l_button").addEventListener("change", this.setValue.bind(this));
    document.getElementById("r_button").addEventListener("change", this.setValue.bind(this));
  }
  loadValue() {
    let lobj = localStorage.getItem("button_settings");
    if (lobj) {
      this.buttonMap = JSON.parse(lobj);
    }
    document.getElementById("start_button").value = this.buttonMap.START.no;
    document.getElementById("select_button").value = this.buttonMap.SELECT.no;
    document.getElementById("a_button").value = this.buttonMap.A.no;
    document.getElementById("b_button").value = this.buttonMap.B.no;
    document.getElementById("x_button").value = this.buttonMap.X.no;
    document.getElementById("y_button").value = this.buttonMap.Y.no;
    document.getElementById("l_button").value = this.buttonMap.L.no;
    document.getElementById("r_button").value = this.buttonMap.R.no;
  }
  setValue() {
    this.buttonMap.START.no = document.getElementById("start_button").value - 0;
    this.buttonMap.SELECT.no = document.getElementById("select_button").value - 0;
    this.buttonMap.A.no = document.getElementById("a_button").value - 0;
    this.buttonMap.B.no = document.getElementById("b_button").value - 0;
    this.buttonMap.X.no = document.getElementById("x_button").value - 0;
    this.buttonMap.Y.no = document.getElementById("y_button").value - 0;
    this.buttonMap.L.no = document.getElementById("l_button").value - 0;
    this.buttonMap.R.no = document.getElementById("r_button").value - 0;

    localStorage.setItem("button_settings", JSON.stringify(this.buttonMap));
  }
  createOptions(cont_id) {
    let cont = document.getElementById(cont_id);
    for (var i = 0; i < 20; i++) {
      var option = document.createElement("option");
      option.value = i;
      option.text = "Button " + i;
      cont.appendChild(option);
    }
  }
  keyDown(player, button, input) {
    if (player === 1) {
      switch (button) {
        case 0: //a
          _S9xReportButton(0x61, true);

          break;
        case 1: //b
          _S9xReportButton(0x7a, true);

          break;
        case 8: //x
          _S9xReportButton(0x78, true);

          break;

        case 9: //y
          _S9xReportButton(0x73, true);

          break;

        case 10: //l
          _S9xReportButton(0x64, true);

          break;

        case 11: //r
          _S9xReportButton(0x63, true);

          break;
        case 2: //select
          _S9xReportButton(16, true);

          break;
        case 3: //start
          _S9xReportButton(13, true);
          break;
        case 4: //up
          _S9xReportButton(1106, true);

          break;
        case 5: //down
          _S9xReportButton(1105, true);

          break;
        case 6: //left
          _S9xReportButton(1104, true);

          break;
        case 7: //right
          _S9xReportButton(1103, true);

          break;
        default:
          break;
      }
    }
  }
  keyUp(player, button, input) {
    if (player === 1) {
      switch (button) {
        case 0: //a
          _S9xReportButton(0x61, false);

          break;
        case 1: //b
          _S9xReportButton(0x7a, false);

          break;
        case 8: //x
          _S9xReportButton(0x78, false);

          break;

        case 9: //y
          _S9xReportButton(0x73, false);

          break;

        case 10: //l
          _S9xReportButton(0x64, false);

          break;

        case 11: //r
          _S9xReportButton(0x63, false);

          break;

        case 2: //select
          _S9xReportButton(16, false);

          break;
        case 3: //start
          _S9xReportButton(13, false);

          break;
        case 4: //up
          _S9xReportButton(1106, false);

          break;
        case 5: //down
          _S9xReportButton(1105, false);

          break;
        case 6: //left
          _S9xReportButton(1104, false);

          break;
        case 7: //right
          _S9xReportButton(1103, false);

          break;
      }
    }
  }
  checkAxes(axes, input) {
    var val = 0;
    if (axes[0] < -0.5) {
      val += 1;
    } else if (axes[0] > 0.5) {
      val += 2;
    }
    if (axes[1] < -0.5) {
      val += 4;
    } else if (axes[1] > 0.5) {
      val += 8;
    }
    if (val === 1) {
      this.checkAxesButton("UP", false, input);
      this.checkAxesButton("DOWN", false, input);
      this.checkAxesButton("RIGHT", false, input);
      this.checkAxesButton("LEFT", true, input);
    } else if (val === 2) {
      this.checkAxesButton("UP", false, input);
      this.checkAxesButton("DOWN", false, input);
      this.checkAxesButton("LEFT", false, input);
      this.checkAxesButton("RIGHT", true, input);
    } else if (val === 4) {
      this.checkAxesButton("LEFT", false, input);
      this.checkAxesButton("RIGHT", false, input);
      this.checkAxesButton("DOWN", false, input);
      this.checkAxesButton("UP", true, input);
    } else if (val === 8) {
      this.checkAxesButton("LEFT", false, input);
      this.checkAxesButton("RIGHT", false, input);
      this.checkAxesButton("UP", false, input);
      this.checkAxesButton("DOWN", true, input);
    } else if (val === 5) {
      this.checkAxesButton("RIGHT", false, input);
      this.checkAxesButton("DOWN", false, input);
      this.checkAxesButton("UP", true, input);
      this.checkAxesButton("LEFT", true, input);
    } else if (val === 6) {
      this.checkAxesButton("LEFT", false, input);
      this.checkAxesButton("DOWN", false, input);
      this.checkAxesButton("RIGHT", true, input);
      this.checkAxesButton("UP", true, input);
    } else if (val === 9) {
      this.checkAxesButton("RIGHT", false, input);
      this.checkAxesButton("UP", false, input);
      this.checkAxesButton("DOWN", true, input);
      this.checkAxesButton("LEFT", true, input);
    } else if (val === 10) {
      this.checkAxesButton("LEFT", false, input);
      this.checkAxesButton("UP", false, input);
      this.checkAxesButton("DOWN", true, input);
      this.checkAxesButton("RIGHT", true, input);
    } else {
      this.checkAxesButton("LEFT", false, input);
      this.checkAxesButton("RIGHT", false, input);
      this.checkAxesButton("UP", false, input);
      this.checkAxesButton("DOWN", false, input);
    }
  }
  checkAxesButton(name, pressed, input) {
    if (pressed) {
      // if (this.axesMap[name].press) return;
      this.axesMap[name].press = true;
      this.keyDown(1, this.INPUT[name], input);
      return true;
    } else {
      if (this.axesMap[name].press) {
        this.axesMap[name].press = false;
        this.keyUp(1, this.INPUT[name], input);
      }
    }
    return;
  }
  checkButton(name, buttons, input) {
    for (var i = 0; i < buttons.length; i++) {
      let btn = buttons[i];
      if (btn.pressed) {
        this.button_info_elem.textContent = "Button " + i;
      }
      if (i === this.buttonMap[name].no) {
        if (btn.pressed) {
          // if (this.buttonMap[name].press) return;
          this.buttonMap[name].press = true;
          this.keyDown(1, this.INPUT[name], input);
          return true;
        } else {
          if (this.buttonMap[name].press) {
            this.buttonMap[name].press = false;
            this.keyUp(1, this.INPUT[name], input);
          }
        }
      }
    }
    return;
  }
  updateGamepad(input) {
    var pad = navigator.getGamepads()[this.selected];
    if (pad) {
      this.checkButton("START", pad.buttons, input);
      this.checkButton("SELECT", pad.buttons);
      this.checkAxes(pad.axes, input);
      this.checkButton("A", pad.buttons, input);
      this.checkButton("B", pad.buttons, input);
      this.checkButton("X", pad.buttons, input);
      this.checkButton("Y", pad.buttons, input);
      this.checkButton("L", pad.buttons, input);
      this.checkButton("R", pad.buttons, input);
    }
  }
}
