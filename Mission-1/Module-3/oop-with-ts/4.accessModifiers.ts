// access modifiers
class BankAccount {
  public readonly id: number;
  public name: string;
  // private _balance: number;
  protected _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }
  public addDeposit(amount: number) {
    this._balance = this._balance + amount;
  }
  public getBalance() {
    console.log(`Total Balance: ${this._balance}`);
  }
}

class StudentAccount extends BankAccount {
  test() {
    this._balance;
  }
}

const bikash = new BankAccount(1, "A", 20);
bikash.addDeposit(20);
bikash.getBalance();
console.log(bikash);
