// Access modifiers in classes regulate how methods and properties of a class are accessed
// functions are public by default
class ClassWithPublicProperty {
	public id: number;
}

//instantiate
let publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;

//private property; Accessing this class property gives error
class ClassWithPrivateProperty {
	private id: number;
	constructor(_id: number) {
		this.id = _id;
	}
}

// Using access modifiers in parameters
class ClassWithAutomaticProperties {
	constructor(public id: number, private name: string) {}
}

let myAutoClass = new ClassWithAutomaticProperties(45, 'Toyota');

//Readonly Access Modifier
class withReadOnly {
	readonly name: string;
	constructor(_name: string) {
		this.name = _name;
	}
}

// CLASS ACCESSOR
//They are functions called when when class properties are changes or retrieved
class ClassWithAccessors {
	private _id: number;
	get id() {
		console.log(`inside get id()`);
		return this._id;
	}
	set id(value: number) {
		console.log(`inside set id()`);
		this._id = value;
	}
}

let classWithAccessors = new ClassWithAccessors();
classWithAccessors.id = 2; //set function gets called here
console.log(classWithAccessors.id); //get function is called at runtime

//STATIC FUNCTION
//they are functions that can be called outside a class witout creating an instance of the class
class StaticClass {
	static printNum(num: number) {
		console.log(`Your number is ${num}`);
	}
}

StaticClass.printNum(4); //calling the static function without instatiating a class

//STATIC PROPERTIES
//are properties that are the same in all instances of the class and also accessed via its class
class StaticProperty {
	static count = 0;
	updateCount() {
		StaticProperty.count++;
	}
}
let firstInstance = new StaticProperty();
console.log(StaticProperty.count);
firstInstance.updateCount();
console.log(StaticProperty.count);

//NAMESPACE
// typescript way of resolving conflicts in classes or interfaces name and classes that needs to be reference/instantiated within a namespace has to be prefix with export
namespace FirstNameSpace {
	class NotExported {}
	export class NameSpaceClass {
		id: number;
	}
	export class FullnameSpaceClass {
		firstname: string;
		lastname: string;
		constructor(_firstname: string, _lastname: string) {
			this.firstname = _firstname;
			this.lastname = _lastname;
		}

		getFullname() {
			console.log(`My name is ${this.firstname} ${this.lastname}`);
		}
	}
}

//instantiating a class within a namespace
let firstNamespace = new FirstNameSpace.NameSpaceClass();
let fullname = new FirstNameSpace.FullnameSpaceClass('Demola', 'Malomo');

fullname.getFullname();
