

class FibonnaciSeries
{

 next(n:number)
 {
     let final;
     let previousNo:Symbol;
     previousNo=0;
     let currentNo:Symbol;
     currentNo=1;

     for(let i=0;i<n;i++ )
     {
        
         //console.log(previousNo);
         final=previousNo + currentNo;
         previousNo=currentNo;
         currentNo=final;
             
     }
         return final;
     };
 }
 let fibo1=new FibonnaciSeries();
 console.log(fibo1.next(3));