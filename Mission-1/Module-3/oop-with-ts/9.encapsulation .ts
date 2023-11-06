// Encapsulation
{
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;
    // protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
    private getBalance() {
      console.log(`Total Balance: ${this._balance}`);
    }
    getHiddenMethod() {
      return this.getBalance();
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      // this._balance;
    }
  }

  const bikash = new BankAccount(1, "A", 20);
  bikash.addDeposit(30);
  bikash.getHiddenMethod();
  console.log(bikash);
}
