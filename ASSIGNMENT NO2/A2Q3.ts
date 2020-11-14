function *ArmstrongNumber()
{
    yield("Hey let's start");
for(let i=0;i<=5000;i++)
        { 
            let digits=i.toString().length;
         
            let sum=0;
            let n=i;
            while(n>0)
            {
                let rem= n % 10;
                sum +=rem ** digits;
                n = parseInt(n/10);
            }
            if(i>1000)
            {
             yield("Hey you were exceeding your limit");
            }
          
            if (sum==i)
            {
               console.log(i);
            }
        }
      
    };
    

   



const myNumber=ArmstrongNumber();
console.log(myNumber.next());
console.log(myNumber.next());


