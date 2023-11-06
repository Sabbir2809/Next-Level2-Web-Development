{
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
    // public addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }
    set deposite(amount: number) {
      this._balance = this.balance + amount;
    }
    // public getBalance() {
    //   console.log(`Total Balance: ${this._balance}`);
    // }
    get balance() {
      return this._balance;
    }
  }

  const bikash = new BankAccount(1, "A", 20);
  console.log((bikash.deposite = 80));
  console.log(bikash.balance);
}
