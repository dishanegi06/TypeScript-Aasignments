var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    Account.ttlBalance = function () {
        var accounts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            accounts[_i] = arguments[_i];
        }
        var sum = 0;
        for (var _a = 0, accounts_1 = accounts; _a < accounts_1.length; _a++) {
            var i = accounts_1[_a];
            sum += i.balance;
        }
        console.log("Total Balance is " + sum);
    };
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(id, name, balance, interest) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.interest = (interest * 10 * 1000) / 100;
        return _this;
    }
    return SavingAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(id, name, balance, cash_credit) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.cash_credit = cash_credit;
        return _this;
    }
    return CurrentAccount;
}(Account));
var s1 = new SavingAccount(10, "D", 10000, 5.8);
var s2 = new SavingAccount(11, "E", 20000, 6.8);
var s3 = new SavingAccount(12, "F", 30000, 7.8);
var c1 = new CurrentAccount(20, "N", 20000, 1000);
var c2 = new CurrentAccount(21, "O", 40000, 1000);
var c3 = new CurrentAccount(22, "P", 60000, 1000);
var result = Account.ttlBalance(s1, s2, s3, c1, c2, c3);
console.log(s1, s2, s3, c1, c2, c3);
