function myFirstComponent(fn,ln,ag) {
    this.firstName = fn;
    this.lastName = ln;
    this.age = ag;
}

myFirstComponent.prototype.write = function () {
    return "My first name is " + this.firstName + " " + this.lastName + " and I am " + this.age + " years old.";
}
 var dood = new myFirstComponent("dood","brodia",35);

document.write(dood.write());