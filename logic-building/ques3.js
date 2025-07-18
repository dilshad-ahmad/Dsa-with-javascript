/* Find the electricity bill price to given data .

              UNIT       --------------    Price
              up to 100  ------------      Rs 4/unit
              101 to 200  ----------       Rs 6/ unit
              201 to 400   --------        Rs 8/unit 
              more than 400 -------         Rs 13/unit    

*/   


let unit = Number(prompt("Enter the unit "));//700
let amount = 0;

 if (unit > 400 ){
    amount = amount +  (unit - 400)*13
    unit = 400
 }

 if(unit >200 && unit <= 400) {
    amount = amount +  (unit - 200) * 8
    unit = 200
 }  
 if (unit >100 && unit <= 200) {
    amount = amount + (unit - 100)*6
    unit = 100  
 }

 amount += unit*4;
 console.log(amount)



