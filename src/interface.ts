interface IDetails {
  id: number;
  name: string;
}

const details = (params: IDetails): void => {
  let print = () => {
    return console.log(`The name is ${params.name} and id of ${params.id}`);
  }
 return print()
}

details({id: 45, name:'Ademola'})

