// // 1. Amazon (E-commerce Shopping Experience)
// var selcetion=prompt("select the item");
// var cart=["mobile","shoes","books","laptop"];
// var itemfound=false;

// for(i=0;i<=cart.length-1;i++){
// if(selcetion.toLocaleLowerCase()==cart[i].toLocaleLowerCase()){
//     itemfound=true;
//     confirm("please confirm to purchase");
// break;
// }
// }

// if(!itemfound){
//     alert("item no found")
// }

// // 2. Hotstar: Subscription Plan Selection (Switch Case & Prompt)
// var Plan=prompt("selct the plan")

// switch (Plan) {
//     case "basic":
//         alert("the cost of the paln is rs150 and duration is 1 month")
//         break;
//     case "premium":
//         alert("the cost of the paln is rs350 and duration is 3 month")
//         break;
//     case "yearly":
//         alert("the cost of the paln is rs1000 and duration is 1 year")
//         break;

//     default:
//         alert("please select a valid plan")
//         break;
// }
// // ----------------------------------
// // 3. Uber (Ride Booking Experience)
// var booking=confirm("confirm booking")
// console.log(booking);

// if(booking){
//     setTimeout(function () {
//         alert("your ride has been booked")
//     } ,3000)
// }
// else{
//     alert("your ride has not been booked")
// }
// // 4. Amazon Product Rating Feature (For Loop, Conditional Statements, Alert)
// var userRating=prompt("please provide rating for the item")
// var rating=false;
// for(i=1;i<=5;i++){
//     if(Number(userRating)===i){
//         alert(`you have give ${i} rating to the item`)
//         rating=true;
//     }
// }
// if(rating==false){
// alert("you have not given any rating to the item")
// }
// // --------------------------------------
// // Hotstar: Video Quality Selection (Switch Case & Prompt)
// var quality=prompt("selct the quality of video")

// switch (quality) {
//     case "350":
//         alert("you have selceted 350p quality")
//         break;
//     case "720":
//         alert("you have selceted 720p quality")
//         break;
//     case "1080":
//         alert("you have selceted 1080p quality")
//         break;

//     default:
//         alert("please select valid video quality")
//         break;
// }
// // ------------------------------------
// // 6. Hotstar: Logging Out (Confirm & SetTimeout)
// var userLogout=confirm("please confirm do you want to logout or not")
// if(userLogout){
//     setTimeout(function() {
//         alert("you have been logged out succesfully")

//     },2000)
// }

for(i=10;i>=1;i--){
    console.log(i);

}


