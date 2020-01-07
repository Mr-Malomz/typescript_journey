class ClassWithConstructor {
  id: number;
  name: string;
  constructor(_id: number = 2, _name: string) {
    this.id = _id;
    this.name = _name;
  }
}

//instanciate ClassWithConstructor
const instance = new ClassWithConstructor(2, "Demola");

interface IComplexType {
  id: number;
  name: string;
  print(): string;
  usingTheAnyKeyword(arg1: any): any;
  usingDefaultParameters(optionalArgs1?: number);
  usingRestSyntax(...argArray: number[]);
  usingFunctionCallbacks(callback: (id: number) => string);
}

class ComplexType implements IComplexType {
  id: number;
  name: string;
  //constructor overloading
  constructor(idArg: number, nameArg: string);
  constructor(idArg: string, nameArg: string);
  constructor(idArg: any, nameArg: any) {
    if (typeof idArg === "number") this.id = idArg;
    this.name = nameArg;
  }
  print(): string {
    return "id: " + this.id + " name: " + this.name;
  }
  usingTheAnyKeyword(arg1: any): any {
    this.id = arg1;
  }
  usingOptionalParameters(optionalArgs1?: number) {
    if (optionalArgs1) this.id = optionalArgs1;
  }
  usingDefaultParameters(defaultArg1: number = 0) {
    this.id = defaultArg1;
  }
  usingRestSyntax(...argArray: number[]) {
    if (argArray.length > 0) this.id = argArray[0];
  }
  usingFunctionCallbacks(callback: (id: number) => string) {
    callback(this.id);
  }
}

//instantiation
let ct_1 = new ComplexType(1, "ct_1");
let ct_2 = new ComplexType("abc", "ct_2");
