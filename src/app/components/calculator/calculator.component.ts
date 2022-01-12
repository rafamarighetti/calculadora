import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  value1!: number;
  opt!: string;
  value2!: number;
  result!: number;
  next!: boolean;

  constructor(
    private calculatorService: CalculatorService 
  ) { }

  ngOnInit() {
    this.clear();
  }

  clear(): void {
    this.value1 = 0;
    this.value2 = 0;
    this.opt = '';
    this.result = 0;
    this.next = false;
  }

  addValue(val: any) {
    if(this.opt === '' && !this.next){
      this.value1 = this.concateNum(this.value1, val) 
      this.result = this.value1
    } else {
      this.value2 = this.concateNum(this.value2, val);
      this.result = this.value2
      this.next = true;
    }
  }

  concateNum(value: number, newValue: number) {
    let concateVal = value.toString() + newValue.toString();
    return Number(concateVal);  
  }

  changeOpt(opt: string) {
    if(this.next && this.opt){
      this.calculate();
    }
    this.opt = opt;
  }

  calculate() {
    this.value1 = this.calculatorService.calculate(this.value1, this.value2, this.opt);
    this.result = this.value1;
    this.opt = "";
    this.value2 = 0;
  }

  get display(): number {
    return this.result
  }
}
