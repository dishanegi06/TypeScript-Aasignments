let count=0;

function ArmstrongNumber()
{

  return{ 
     next: function()
     {
       count++;
       return count < 2000 ?
       {value: getArmstrongNumber(count++),done : false}:
       {value: undefined, done: true};
     }


   } 
}
function getArmstrongNumber(num)
{
        
        for(let i=num; i<=2000 ;i++)
        { 
            let power=i.toString().length;
            let sum=0;
            let n=i;
            while(n>0)
            {
                let rem= n % 10;
                sum +=Math.pow(rem,power);
                n = parseInt(n/10);
            }
            if (sum===i)
            {
               count=sum;
               return i;
            }
        }
      

  }   



const myNumber=ArmstrongNumber();
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());



