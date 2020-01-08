// Access modifiers in classes regulate how methods and properties of a class are accessed
// functions are public by default
var ClassWithPublicProperty = /** @class */ (function () {
    function ClassWithPublicProperty() {
    }
    return ClassWithPublicProperty;
}());
//instantiate
var publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;
//private property; Accessing this class property gives error
var ClassWithPrivateProperty = /** @class */ (function () {
    function ClassWithPrivateProperty(_id) {
        this.id = _id;
    }
    return ClassWithPrivateProperty;
}());
// Using access modifiers in parameters
var ClassWithAutomaticProperties = /** @class */ (function () {
    function ClassWithAutomaticProperties(id, name) {
        this.id = id;
        this.name = name;
    }
    return ClassWithAutomaticProperties;
}());
var myAutoClass = new ClassWithAutomaticProperties(45, 'Toyota');
//Readonly Access Modifier
var withReadOnly = /** @class */ (function () {
    function withReadOnly(_name) {
        this.name = _name;
    }
    return withReadOnly;
}());
// CLASS ACCESSOR
//They are functions called when when class properties are changes or retrieved
var ClassWithAccessors = /** @class */ (function () {
    function ClassWithAccessors() {
    }
    Object.defineProperty(ClassWithAccessors.prototype, "id", {
        get: function () {
            console.log("inside get id()");
            return this._id;
        },
        set: function (value) {
            console.log("inside set id()");
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    return ClassWithAccessors;
}());
var classWithAccessors = new ClassWithAccessors();
classWithAccessors.id = 2; //set function gets called here
console.log(classWithAccessors.id); //get function is called at runtime
//STATIC FUNCTION
//they are functions that can be called outside a class witout creating an instance of the class
var StaticClass = /** @class */ (function () {
    function StaticClass() {
    }
    StaticClass.printNum = function (num) {
        console.log("Your number is " + num);
    };
    return StaticClass;
}());
StaticClass.printNum(4); //calling the static function without instatiating a class
//STATIC PROPERTIES
//are properties that are the same in all instances of the class and also accessed via its class
var StaticProperty = /** @class */ (function () {
    function StaticProperty() {
    }
    StaticProperty.prototype.updateCount = function () {
        StaticProperty.count++;
    };
    StaticProperty.count = 0;
    return StaticProperty;
}());
var firstInstance = new StaticProperty();
console.log(StaticProperty.count);
firstInstance.updateCount();
console.log(StaticProperty.count);
//NAMESPACE
// typescript way of resolving conflicts in classes or interfaces name and classes that needs to be reference/instantiated within a namespace has to be prefix with export
var FirstNameSpace;
(function (FirstNameSpace) {
    var NotExported = /** @class */ (function () {
        function NotExported() {
        }
        return NotExported;
    }());
    var NameSpaceClass = /** @class */ (function () {
        function NameSpaceClass() {
        }
        return NameSpaceClass;
    }());
    FirstNameSpace.NameSpaceClass = NameSpaceClass;
    var FullnameSpaceClass = /** @class */ (function () {
        function FullnameSpaceClass(_firstname, _lastname) {
            this.firstname = _firstname;
            this.lastname = _lastname;
        }
        FullnameSpaceClass.prototype.getFullname = function () {
            console.log("My name is " + this.firstname + " " + this.lastname);
        };
        return FullnameSpaceClass;
    }());
    FirstNameSpace.FullnameSpaceClass = FullnameSpaceClass;
})(FirstNameSpace || (FirstNameSpace = {}));
//instantiating a class within a namespace
var firstNamespace = new FirstNameSpace.NameSpaceClass();
var fullname = new FirstNameSpace.FullnameSpaceClass('Demola', 'Malomo');
fullname.getFullname();
