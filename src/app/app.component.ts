import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 24;
  lower = true;
  upper = false;
  numbers = false;
  symbols = false;
  alertOpen = false;

  password = '';

  setLength(target: any) {
    if (target.value >= 4) this.length = target.value;
    else this.length = 4;
  }

  toggleLower() {
    this.lower = !this.lower;
  }

  toggleUpper() {
    this.upper = !this.upper;
  }

  toggleNumbers() {
    this.numbers = !this.numbers;
  }

  toggleSymbols() {
    this.symbols = !this.symbols;
  }

  private getRandom(str: string) {
    const index = Math.floor(Math.random() * str.length);
    return str[index];
  }

  generate(e: any) {
    e.preventDefault();
    console.log('called');
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()/§';
    let l = this.length;

    let generatedPw = '';
    let validChars = '';
    if (this.lower) {
      validChars += lower;
      generatedPw += this.getRandom(lower);
      l--;
    }
    if (this.upper) {
      validChars += upper;
      generatedPw += this.getRandom(upper);
      l--;
    }
    if (this.numbers) {
      validChars += numbers;
      generatedPw += this.getRandom(numbers);
      l--;
    }
    if (this.symbols) {
      validChars += symbols;
      generatedPw += this.getRandom(symbols);
      l--;
    }

    for (let i = 0; i < l; i++) {
      generatedPw += this.getRandom(validChars);
    }
    this.password = generatedPw;
  }

  copy(e: any) {
    e.preventDefault();
    navigator.clipboard.writeText(this.password);
    this.alertOpen = true;
    setTimeout(() => (this.alertOpen = false), 3000);
  }
}
