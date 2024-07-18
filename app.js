
const divage=document.querySelector('.divage')
 console.log(divage)
function helpCalculateAge(){
    const userAge=document.querySelector('.userAge')
    let birth=userAge.value
    let prevyear,prevmonth,prevday;
   
    prevyear=birth.substring(0,4)
    prevmonth=birth.substring(5,7)
    prevday=birth.substring(8,19)
    
    const d=new Date()
    
    let currentYear=d.getFullYear();
    let currentMnoth=d.getMonth();
    let currentDay=d.getDay();

    console.log("prevyear : "+ prevyear + "month : " + prevmonth + "day"+ prevday)
    console.log("currentyear : "+ currentYear + "month : " + currentMnoth + "day"+ currentDay)
    
    let day;
    if(currentDay>prevday){
        
        day=eval(currentDay-prevday);
    }
    else{
        currentMnoth=currentMnoth-1;
        day=eval(currentDay+30-prevday);
        
    }
    let month;
    if(currentMnoth>prevmonth){
        
        month=eval(currentMnoth-prevmonth);
    }
    else{
        currentYear=currentYear-1;
        month=eval(currentMnoth+12- prevmonth);
        
    }
    let year=eval(currentYear-prevyear);
    console.log("day :"+ day )
    console.log("currentyear : "+ year + " ,month : " + month + " , day"+ day)
    
    let text= year +" years, " + + month + " months, "+ day +" days"

    let html=
    `
    <p class="result"> ${text}</p>

    `
    
    divage.insertAdjacentHTML("afterbegin",html)

    text=""
    
}


function calculateAge(e){
    
    e.preventDefault()
    helpCalculateAge()
}