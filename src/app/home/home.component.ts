
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  clickValue: number = 0;
  sourceArray: number[] = [0, 1, 2];
  displayArray: any = [];
  bgColorArray: any = [];
  xWin: boolean = false;
  oWin: boolean = false;
  matchDraw: boolean = false;

  ngOnInit() {
    this.arrayCreateFunc();
  }

  arrayCreateFunc() {
    this.displayArray = [];
    this.bgColorArray = [];
    this.clickValue = 0;
    this.oWin = false;
    this.xWin = false;
    this.matchDraw = false;
    for (let i = 0; i < 3; i++) {
      this.displayArray[i] = [];
      this.bgColorArray[i] = [];
      for (let j = 0; j < 3; j++) {
        this.displayArray[i][j] = 'O';
        this.bgColorArray[i][j] = false;
      }
    }
  }

  clickFunc(i: number, j: number) {
    if (this.clickValue < 10 && this.oWin === false && this.xWin === false && this.matchDraw === false) {
      this.validationFunc();
      this.bgColorArray[i][j] = true;
      this.validationFunc();
      this.opponentFunc(i, j);
      this.validationFunc();
      this.clickValue += 1;
    }
  }

  opponentFunc(i: number, j: number) {
    if (this.clickValue < 9 && this.xWin === false && this.oWin === false && this.matchDraw === false) {

      if (i === 0 && j == 0) {
        this.xWinFunc();
        this.validationFunc();
        if (this.xWin === false && this.oWin === false) {
          if (this.bgColorArray[1][1] !== true && this.displayArray[2][2] === 'O' && this.bgColorArray[2][2] === true) {
            this.xValueAssignFunc(1, 1);
          }
          else if (this.bgColorArray[0][1] !== true && this.displayArray[0][2] === 'O' && this.bgColorArray[0][2] === true) {
            this.xValueAssignFunc(0, 1);
          }
          else if (this.bgColorArray[0][2] !== true && this.displayArray[0][1] === 'O' && this.bgColorArray[0][1] === true) {
            this.xValueAssignFunc(0, 2);
          }
          else if (this.bgColorArray[2][2] !== true && this.displayArray[1][1] === 'O' && this.bgColorArray[1][1] === true) {
            this.xValueAssignFunc(2, 2);
          }
          else if (this.bgColorArray[1][0] !== true && this.displayArray[2][0] === 'O' && this.bgColorArray[2][0] === true) {
            this.xValueAssignFunc(1, 0);
          }
          else if (this.bgColorArray[2][0] !== true && this.displayArray[1][0] === 'O' && this.bgColorArray[1][0] === true) {
            this.xValueAssignFunc(2, 0);
          }
          else if (this.bgColorArray[1][1] !== true) {
            this.xValueAssignFunc(1, 1);
          }
          else if (this.bgColorArray[0][1] !== true) {
            this.xValueAssignFunc(0, 1);
          }
          else if (this.bgColorArray[0][2] !== true) {
            this.xValueAssignFunc(0, 2);
          }
          else if (this.bgColorArray[2][2] !== true) {
            this.xValueAssignFunc(2, 2);
          }
          else if (this.bgColorArray[1][0] !== true) {
            this.xValueAssignFunc(1, 0);
          }
          else if (this.bgColorArray[2][0] !== true) {
            this.xValueAssignFunc(2, 0);
          }
          else {
            this.matchDraw = true;
          }
        }
      }

      else if (i === 1 && j == 0) {
        this.xWinFunc();
        this.validationFunc();
        if (this.xWin === false && this.oWin === false) {
          if (this.bgColorArray[0][0] !== true && (this.displayArray[2][0] === 'O' && this.bgColorArray[2][0] === true)) {
            this.xValueAssignFunc(0, 0);
          }
          else if (this.bgColorArray[2][0] !== true && (this.displayArray[0][0] === 'O' && this.bgColorArray[0][0] === true)) {
            this.xValueAssignFunc(2, 0);
          }
          else if (this.bgColorArray[1][1] !== true && (this.displayArray[1][2] === 'O' && this.bgColorArray[1][2] === true)) {
            this.xValueAssignFunc(1, 1);
          }
          else if (this.bgColorArray[1][2] !== true && (this.displayArray[1][1] === 'O' && this.bgColorArray[1][1] === true)) {
            this.xValueAssignFunc(1, 2);
          }
          else if (this.bgColorArray[0][0] !== true) {
            this.xValueAssignFunc(0, 0);
          }
          else if (this.bgColorArray[2][0] !== true) {
            this.xValueAssignFunc(2, 0);
          }
          else if (this.bgColorArray[1][1] !== true) {
            this.xValueAssignFunc(1, 1);
          }
          else if (this.bgColorArray[1][2] !== true) {
            this.xValueAssignFunc(1, 2);
          }
          else {
            this.matchDraw = true;
          }
        }
      }

      else if (i === 2 && j == 0) {
        this.xWinFunc();
        this.validationFunc();
        if (this.xWin === false && this.oWin === false) {
          if (this.bgColorArray[1][0] !== true && (this.displayArray[0][0] === 'O' && this.bgColorArray[0][0] === true)) {
            this.xValueAssignFunc(1, 0);
          }
          else if (this.bgColorArray[0][0] !== true && (this.displayArray[1][0] === 'O' && this.bgColorArray[1][0] === true)) {
            this.xValueAssignFunc(0, 0);
          }
          else if (this.bgColorArray[1][1] !== true && (this.displayArray[0][2] === 'O' && this.bgColorArray[0][2] === true)) {
            this.xValueAssignFunc(1, 1);
          }
          else if (this.bgColorArray[0][2] !== true && (this.displayArray[1][1] === 'O' && this.bgColorArray[1][1] === true)) {
            this.xValueAssignFunc(0, 2);
          }
          else if (this.bgColorArray[2][1] !== true && (this.displayArray[2][2] === 'O' && this.bgColorArray[2][2] === true)) {
            this.xValueAssignFunc(2, 1);
          }
          else if (this.bgColorArray[2][2] !== true && (this.displayArray[2][1] === 'O' && this.bgColorArray[2][1] === true)) {
            this.xValueAssignFunc(2, 2);
          }
          else if (this.bgColorArray[1][0] !== true) {
            this.xValueAssignFunc(1, 0);
          }
          else if (this.bgColorArray[0][0] !== true) {
            this.xValueAssignFunc(0, 0);
          }
          else if (this.bgColorArray[1][1] !== true) {
            this.xValueAssignFunc(1, 1);
          }
          else if (this.bgColorArray[0][2] !== true) {
            this.xValueAssignFunc(0, 2);
          }
          else if (this.bgColorArray[2][1] !== true) {
            this.xValueAssignFunc(2, 1);
          }
          else if (this.bgColorArray[2][2] !== true) {
            this.xValueAssignFunc(2, 2);
          }
          else {
            this.matchDraw = true;
          }
        }
      }

      else if (i === 0 && j == 1) {
        this.xWinFunc();
        this.validationFunc();
        if (this.xWin === false && this.oWin === false) {
          if (this.bgColorArray[0][0] !== true && (this.displayArray[0][2] === 'O' && this.bgColorArray[0][2] === true)) {
            this.xValueAssignFunc(0, 0);
          }
          else if (this.bgColorArray[0][2] !== true && (this.displayArray[0][0] === 'O' && this.bgColorArray[0][0] === true)) {
            this.xValueAssignFunc(0, 2);
          }
          else if (this.bgColorArray[1][1] !== true && (this.displayArray[2][1] === 'O' && this.bgColorArray[2][1] === true)) {
            this.xValueAssignFunc(1, 1);
          }
          else if (this.bgColorArray[2][1] !== true && (this.displayArray[1][1] === 'O' && this.bgColorArray[1][1] === true)) {
            this.xValueAssignFunc(2, 1);
          }
          else if (this.bgColorArray[0][0] !== true) {
            this.xValueAssignFunc(0, 0);
          }
          else if (this.bgColorArray[0][2] !== true) {
            this.xValueAssignFunc(0, 2);
          }
          else if (this.bgColorArray[1][1] !== true) {
            this.xValueAssignFunc(1, 1);
          }
          else if (this.bgColorArray[2][1] !== true) {
            this.xValueAssignFunc(2, 1);
          }
          else {
            this.matchDraw = true;
          }
        }
      }

      else if (i === 1 && j == 1) {
        this.xWinFunc();
        this.validationFunc();
        if (this.xWin === false && this.oWin === false) {
          if (this.bgColorArray[0][0] !== true && (this.displayArray[2][2] === 'O' && this.bgColorArray[2][2] === true)) {
            this.xValueAssignFunc(0, 0);
          }
          else if (this.bgColorArray[0][1] !== true && (this.displayArray[2][1] === 'O' && this.bgColorArray[2][1] === true)) {
            this.xValueAssignFunc(0, 1);
          }
          else if (this.bgColorArray[0][2] !== true && (this.displayArray[2][0] === 'O' && this.bgColorArray[2][0] === true)) {
            this.xValueAssignFunc(0, 2);
          }
          else if (this.bgColorArray[1][0] !== true && (this.displayArray[1][2] === 'O' && this.bgColorArray[1][2] === true)) {
            this.xValueAssignFunc(1, 0);
          }
          else if (this.bgColorArray[1][2] !== true && (this.displayArray[1][0] === 'O' && this.bgColorArray[1][0] === true)) {
            this.xValueAssignFunc(1, 2);
          }
          else if (this.bgColorArray[2][0] !== true && (this.displayArray[0][2] === 'O' && this.bgColorArray[0][2] === true)) {
            this.xValueAssignFunc(2, 0);
          }
          else if (this.bgColorArray[2][1] !== true && (this.displayArray[0][1] === 'O' && this.bgColorArray[0][1] === true)) {
            this.xValueAssignFunc(2, 1);
          }
          else if (this.bgColorArray[2][2] !== true && (this.displayArray[0][0] === 'O' && this.bgColorArray[0][0] === true)) {
            this.xValueAssignFunc(2, 2);
          }
          else if (this.bgColorArray[0][0] !== true) {
            this.xValueAssignFunc(0, 0);
          }
          else if (this.bgColorArray[0][1] !== true) {
            this.xValueAssignFunc(0, 1);
          }
          else if (this.bgColorArray[0][2] !== true) {
            this.xValueAssignFunc(0, 2);
          }
          else if (this.bgColorArray[1][0] !== true) {
            this.xValueAssignFunc(1, 0);
          }
          else if (this.bgColorArray[1][2] !== true) {
            this.xValueAssignFunc(1, 2);
          }
          else if (this.bgColorArray[2][0] !== true) {
            this.xValueAssignFunc(2, 0);
          }
          else if (this.bgColorArray[2][1] !== true) {
            this.xValueAssignFunc(2, 1);
          }
          else if (this.bgColorArray[2][2] !== true) {
            this.xValueAssignFunc(2, 2);
          }
          else {
            this.matchDraw = true;
          }
        }
      }

      else if (i === 2 && j == 1) {
        this.xWinFunc();
        this.validationFunc();
        if (this.xWin === false && this.oWin === false) {
          if (this.bgColorArray[0][1] !== true && (this.displayArray[1][1] === 'O' && this.bgColorArray[1][1] === true)) {
            this.xValueAssignFunc(0, 1);
          }
          else if (this.bgColorArray[1][1] !== true && (this.displayArray[0][1] === 'O' && this.bgColorArray[0][1] === true)) {
            this.xValueAssignFunc(1, 1);
          }
          else if (this.bgColorArray[2][0] !== true && (this.displayArray[2][2] === 'O' && this.bgColorArray[2][2] === true)) {
            this.xValueAssignFunc(2, 0);
          }
          else if (this.bgColorArray[2][2] !== true && (this.displayArray[2][0] === 'O' && this.bgColorArray[2][0] === true)) {
            this.xValueAssignFunc(2, 2);
          }
          else if (this.bgColorArray[0][1] !== true) {
            this.xValueAssignFunc(0, 1);
          }
          else if (this.bgColorArray[1][1] !== true) {
            this.xValueAssignFunc(1, 1);
          }
          else if (this.bgColorArray[2][0] !== true) {
            this.xValueAssignFunc(2, 0);
          }
          else if (this.bgColorArray[2][2] !== true) {
            this.xValueAssignFunc(0, 0);
          }
          else {
            this.matchDraw = true;
          }
        }
      }

      else if (i === 0 && j == 2) {
        this.xWinFunc();
        this.validationFunc();
        if (this.xWin === false && this.oWin === false) {
          if (this.bgColorArray[0][1] !== true && (this.displayArray[0][0] === 'O' && this.bgColorArray[0][0] === true)) {
            this.xValueAssignFunc(0, 1);
          }
          else if (this.bgColorArray[0][0] !== true && (this.displayArray[0][1] === 'O' && this.bgColorArray[0][1] === true)) {
            this.xValueAssignFunc(0, 0);
          }
          else if (this.bgColorArray[1][1] !== true && (this.displayArray[2][0] === 'O' && this.bgColorArray[2][0] === true)) {
            this.xValueAssignFunc(1, 1);
          }
          else if (this.bgColorArray[2][0] !== true && (this.displayArray[1][1] === 'O' && this.bgColorArray[1][1] === true)) {
            this.xValueAssignFunc(2, 0);
          }
          else if (this.bgColorArray[1][2] !== true && (this.displayArray[2][2] === 'O' && this.bgColorArray[2][2] === true)) {
            this.xValueAssignFunc(1, 2);
          }
          else if (this.bgColorArray[2][2] !== true && (this.displayArray[1][2] === 'O' && this.bgColorArray[1][2] === true)) {
            this.xValueAssignFunc(2, 2);
          }
          else if (this.bgColorArray[0][1] !== true) {
            this.xValueAssignFunc(0, 1);
          }
          else if (this.bgColorArray[0][0] !== true) {
            this.xValueAssignFunc(0, 0);
          }
          else if (this.bgColorArray[1][1] !== true) {
            this.xValueAssignFunc(1, 1);
          }
          else if (this.bgColorArray[2][0] !== true) {
            this.xValueAssignFunc(2, 0);
          }
          else if (this.bgColorArray[1][2] !== true) {
            this.xValueAssignFunc(1, 2);
          }
          else if (this.bgColorArray[2][2] !== true) {
            this.xValueAssignFunc(2, 2);
          }
          else {
            this.matchDraw = true;
          }
        }
      }

      else if (i === 1 && j == 2) {
        this.xWinFunc();
        this.validationFunc();
        if (this.xWin === false && this.oWin === false) {
          if (this.bgColorArray[0][2] !== true && (this.displayArray[2][2] === 'O' && this.bgColorArray[2][2] === true)) {
            this.xValueAssignFunc(0, 2);
          }
          else if (this.bgColorArray[2][2] !== true && (this.displayArray[0][2] === 'O' && this.bgColorArray[0][2] === true)) {
            this.xValueAssignFunc(2, 2);
          }
          else if (this.bgColorArray[1][1] !== true && (this.displayArray[1][0] === 'O' && this.bgColorArray[1][0] === true)) {
            this.xValueAssignFunc(1, 1);
          }
          else if (this.bgColorArray[1][0] !== true && (this.displayArray[1][1] === 'O' && this.bgColorArray[1][1] === true)) {
            this.xValueAssignFunc(1, 0);
          }
          else if (this.bgColorArray[0][2] !== true) {
            this.xValueAssignFunc(0, 2);
          }
          else if (this.bgColorArray[2][2] !== true) {
            this.xValueAssignFunc(2, 2);
          }
          else if (this.bgColorArray[1][1] !== true) {
            this.xValueAssignFunc(1, 1);
          }
          else if (this.bgColorArray[1][0] !== true) {
            this.xValueAssignFunc(1, 0);
          }
          else {
            this.matchDraw = true;
          }
        }
      }

      else if (i === 2 && j == 2) {
        this.xWinFunc();
        this.validationFunc();
        if (this.xWin === false && this.oWin === false) {
          if (this.bgColorArray[1][2] !== true && (this.displayArray[0][2] === 'O' && this.bgColorArray[0][2] === true)) {
            this.xValueAssignFunc(1, 2);
          }
          else if (this.bgColorArray[0][2] !== true && (this.displayArray[1][2] === 'O' && this.bgColorArray[1][2] === true)) {
            this.xValueAssignFunc(0, 2);
          }
          else if (this.bgColorArray[1][1] !== true && (this.displayArray[0][0] === 'O' && this.bgColorArray[0][0] === true)) {
            this.xValueAssignFunc(1, 1);
          }
          else if (this.bgColorArray[0][0] !== true && (this.displayArray[1][1] === 'O' && this.bgColorArray[1][1] === true)) {
            this.xValueAssignFunc(0, 0);
          }
          else if (this.bgColorArray[2][1] !== true && (this.displayArray[2][0] === 'O' && this.bgColorArray[2][0] === true)) {
            this.xValueAssignFunc(2, 1);
          }
          else if (this.bgColorArray[2][0] !== true && (this.displayArray[2][1] === 'O' && this.bgColorArray[2][1] === true)) {
            this.xValueAssignFunc(2, 0);
          }
          else if (this.bgColorArray[1][2] !== true) {
            this.xValueAssignFunc(1, 2);
          }
          else if (this.bgColorArray[0][2] !== true) {
            this.xValueAssignFunc(0, 2);
          }
          else if (this.bgColorArray[1][1] !== true) {
            this.xValueAssignFunc(1, 1);
          }
          else if (this.bgColorArray[0][0] !== true) {
            this.xValueAssignFunc(0, 0);
          }
          else if (this.bgColorArray[2][1] !== true) {
            this.xValueAssignFunc(2, 1);
          }
          else if (this.bgColorArray[2][0] !== true) {
            this.xValueAssignFunc(2, 0);
          }
          else {
            this.matchDraw = true;
          }
        }
      }
    }
  }

  xWinFunc() {
    if ((this.displayArray[1][0] === 'X' && this.displayArray[2][0] === 'X' && this.bgColorArray[0][0] === false) || (this.displayArray[1][1] === 'X' && this.displayArray[2][2] === 'X' && this.bgColorArray[0][0] === false) || (this.displayArray[0][1] === 'X' && this.displayArray[0][2] === 'X' && this.bgColorArray[0][0] === false)) {
      this.xValueAssignFunc(0, 0);
    }
    else if ((this.displayArray[0][0] === 'X' && this.displayArray[2][0] === 'X' && this.bgColorArray[1][0] === false) || (this.displayArray[1][1] === 'X' && this.displayArray[1][2] === 'X' && this.bgColorArray[1][0] === false)) {
      this.xValueAssignFunc(1, 0);
    }
    else if ((this.displayArray[1][0] === 'X' && this.displayArray[0][0] === 'X' && this.bgColorArray[2][0] === false) || (this.displayArray[2][1] === 'X' && this.displayArray[2][2] === 'X' && this.bgColorArray[2][0] === false) || (this.displayArray[1][1] === 'X' && this.displayArray[0][2] === 'X' && this.bgColorArray[2][0] === false)) {
      this.xValueAssignFunc(2, 0);
    }
    else if ((this.displayArray[0][2] === 'X' && this.displayArray[0][0] === 'X' && this.bgColorArray[0][1] === false) || (this.displayArray[2][1] === 'X' && this.displayArray[1][1] === 'X' && this.bgColorArray[0][1] === false)) {
      this.xValueAssignFunc(0, 1);
    }
    else if ((this.displayArray[2][2] === 'X' && this.displayArray[0][0] === 'X' && this.bgColorArray[1][1] === false) || (this.displayArray[2][0] === 'X' && this.displayArray[0][2] === 'X' && this.bgColorArray[1][1] === false) || (this.displayArray[0][1] === 'X' && this.displayArray[2][1] === 'X' && this.bgColorArray[1][1] === false) || (this.displayArray[1][0] === 'X' && this.displayArray[1][2] === 'X' && this.bgColorArray[1][1] === false)) {
      this.xValueAssignFunc(1, 1);
    }
    else if ((this.displayArray[1][1] === 'X' && this.displayArray[0][1] === 'X' && this.bgColorArray[2][1] === false) || (this.displayArray[2][0] === 'X' && this.displayArray[2][2] === 'X' && this.bgColorArray[2][1] === false)) {
      this.xValueAssignFunc(2, 1);
    }
    else if ((this.displayArray[2][2] === 'X' && this.displayArray[1][2] === 'X' && this.bgColorArray[0][2] === false) || (this.displayArray[0][0] === 'X' && this.displayArray[0][1] === 'X' && this.bgColorArray[0][2] === false) || (this.displayArray[1][1] === 'X' && this.displayArray[2][0] === 'X' && this.bgColorArray[0][2] === false)) {
      this.xValueAssignFunc(0, 2);
    }
    else if ((this.displayArray[2][2] === 'X' && this.displayArray[0][2] === 'X' && this.bgColorArray[1][2] === false) || (this.displayArray[1][0] === 'X' && this.displayArray[1][1] === 'X' && this.bgColorArray[1][2] === false)) {
      this.xValueAssignFunc(1, 2);
    }
    else if ((this.displayArray[1][1] === 'X' && this.displayArray[0][0] === 'X' && this.bgColorArray[2][2] === false) || (this.displayArray[2][0] === 'X' && this.displayArray[2][1] === 'X' && this.bgColorArray[2][2] === false) || (this.displayArray[0][2] === 'X' && this.displayArray[1][2] === 'X' && this.bgColorArray[2][2] === false)) {
      this.xValueAssignFunc(2, 2);
    }
  }

  xValueAssignFunc(i: number, j: number) {
    this.displayArray[i][j] = 'X';
    this.bgColorArray[i][j] = true;
  }

  validationFunc() {
    if (((this.displayArray[0][0] === this.displayArray[1][1]) && (this.displayArray[1][1] === this.displayArray[2][2])) && (this.bgColorArray[0][0] === true && this.bgColorArray[1][1] === true && this.bgColorArray[2][2] === true)) {
      this.teamDecideFunc(0, 0);
    }
    else if (((this.displayArray[0][2] === this.displayArray[1][1]) && (this.displayArray[1][1] === this.displayArray[2][0])) && (this.bgColorArray[0][2] === true && this.bgColorArray[1][1] === true && this.bgColorArray[2][0] === true)) {
      this.teamDecideFunc(0, 2);
    }
    else if (((this.displayArray[0][0] === this.displayArray[0][1]) && (this.displayArray[0][1] === this.displayArray[0][2])) && (this.bgColorArray[0][0] === true && this.bgColorArray[0][1] === true && this.bgColorArray[0][2] === true)) {
      this.teamDecideFunc(0, 0);
    }
    else if (((this.displayArray[1][0] === this.displayArray[1][1]) && (this.displayArray[1][1] === this.displayArray[1][2])) && (this.bgColorArray[1][0] === true && this.bgColorArray[1][1] === true && this.bgColorArray[1][2] === true)) {
      this.teamDecideFunc(1, 2);
    }
    else if (((this.displayArray[2][0] === this.displayArray[2][1]) && (this.displayArray[2][1] === this.displayArray[2][2])) && (this.bgColorArray[2][0] === true && this.bgColorArray[2][1] === true && this.bgColorArray[2][2] === true)) {
      this.teamDecideFunc(2, 0);
    }
    else if (((this.displayArray[0][0] === this.displayArray[1][0]) && (this.displayArray[1][0] === this.displayArray[2][0])) && (this.bgColorArray[0][0] === true && this.bgColorArray[1][0] === true && this.bgColorArray[2][0] === true)) {
      this.teamDecideFunc(0, 0);
    }
    else if (((this.displayArray[0][1] === this.displayArray[1][1]) && (this.displayArray[1][1] === this.displayArray[2][1])) && (this.bgColorArray[0][1] === true && this.bgColorArray[1][1] === true && this.bgColorArray[2][1] === true)) {
      this.teamDecideFunc(0, 1);
    }
    else if (((this.displayArray[0][2] === this.displayArray[1][2]) && (this.displayArray[1][2] === this.displayArray[2][2])) && (this.bgColorArray[0][2] === true && this.bgColorArray[1][2] === true && this.bgColorArray[2][2] === true)) {
      this.teamDecideFunc(0, 2);
    }
    else {
      if (this.clickValue == 9) {
        this.matchDraw = true;
      }
    }
  }

  teamDecideFunc(i: number, j: number) {
    if (this.displayArray[i][j] === 'O') {
      this.oWin = true;
    }
    else if (this.displayArray[i][j] === 'X') {
      this.xWin = true;
    }
  }
}


