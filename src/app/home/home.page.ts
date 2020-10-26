import { Component } from '@angular/core';
import * as Symbols from './symbols';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  display = '0';
  keyGroups = Symbols.KEY_GROUPS;
  lastValue = '0';
  operator = '';

  constructor() {}

  onButtonPress(key: string) {
    console.log(key);

    if (Number.isInteger(key) || key === Symbols.SYM_DOT) {
      if (this.display === '0' || this.display === this.lastValue || this.display === Symbols.ERR_DIV_BY_ZERO) {
        this.display = key;
      }
      else {
        this.display = this.display + key.toString();
      }
    } else {
      switch(key) {
        case Symbols.SYM_EQUALS: {
          this.lastValue = this.calculate(this.lastValue, this.display, this.operator);
          this.operator = '';
          this.display = this.lastValue;
          break;
        }
        case Symbols.SYM_ALLCLEAR: {
          this.display = '0';
          this.lastValue = '0';
          this.operator = '';
          break;
        }
        case Symbols.SYM_CLEAR: {
          this.display = '0'
          break;
        }
        case Symbols.SYM_DELETE: {
          this.display = this.display.substring(0, this.display.length - 1);
          break;
        }
        case Symbols.SYM_NEGATE: {
          this.display = (-parseFloat(this.display)).toString();
          break;  
        }
        default: {
          if (this.display === Symbols.ERR_DIV_BY_ZERO) {
            this.display = '0';
          }
          if (this.operator === '')
          {
            this.lastValue = this.display;
            this.operator = key;
            this.display = '0';
          }
          else {
            this.lastValue = this.calculate(this.lastValue, this.display, this.operator);
            this.operator = key;
            this.display = '0';
          }
        }
      }
    }
  }

  calculate(left_value: string, right_value: string, operator: string) {
    let result = '0';
    let lval = Number.parseFloat(left_value);
    let rval = Number.parseFloat(right_value);
    switch(operator) {
      case Symbols.SYM_PLUS: {
        result = (lval + rval).toString();
        break;
      }
      case Symbols.SYM_MINUS: {
        result = (lval - rval).toString();
        break;
      }
      case Symbols.SYM_TIMES: {
        result = (lval * rval).toString();
        break;
      }
      case Symbols.SYM_DIVIDE: {
        if (rval !== 0) {
          result = (lval / rval).toString();
        }
        else {
          result = Symbols.ERR_DIV_BY_ZERO;
        }
        break;
      }
    }
    return result;
  }

}
