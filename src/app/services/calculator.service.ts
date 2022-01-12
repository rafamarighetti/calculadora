import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  constructor() { }

  calculate(value1: number, value2: number, opt: string): number {
    let result: number;
 
    switch (opt) {
      case 'sum':
        result = value1 + value2;
        break;
      case 'subtraction':
        result = value1 - value2;
        break;
      case 'multiplication':
        result = value1 * value2;
        break;
      case 'division':
        result = value1 / value2;
        break;
      default:
        result = 0;
        break;
    }

    return result;
  }
}