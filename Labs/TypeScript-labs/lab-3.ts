//what are interfaces

/*
interface <name of iterface>
{

}
*/


//example of an interface
interface IPerson{
    firstName:string,
    lastName:string,
    sayHi:()=>string
}
 var customer:IPerson={
     firstName:"Dummy",
     lastName:"Dummylastname",
     sayHi:():string=>{return "Hello"}
 }
 console.log(customer.firstName);
 console.log(customer.lastName);
 console.log(customer.sayHi());