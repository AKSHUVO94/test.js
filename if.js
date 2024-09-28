// var a = 2;
// var b = 5;

// if(b>a){
// console.log("Thats Right")
// }


//  if else if and else statement 

// let A = 0
// let B = 0;

// if (A > B) {
//     console.log('Approve')
// }
// else if (B > A) {
//     console.log("Bold")
// }
// else {
//     console.log ("Nothing")
// }


//  Switch Statement 

// var A = 150;
// var A = 100;

// switch(A){
//     case 90:
//         console.log("Hundard Fifty");
//         break;
//     case 100:
//         console.log ("Hundard");
//         break;
//     case 150:
//         console.log("Hundarf Fifty");
//         break;
//     default:
//         console.log("Zero");
// }


// var A = ["Approve",
//          "Decline",
//          "Pending",
//          "Cancel"];

// switch(A) {
//     case "Decline":
//         console.log("Decline Already");
//         break;
//     case "Pending":
//         console.log("Voucher Pending");
//         break;
//     case "Approve":
//         console.log("Already Approve");
//         break;
//     case "Cancel":
//         console.log("Voucher Cancled");
//         break;
//     default:
//         console.log("Voucher is not completed");
// }

// var names = ["Approve", "Pending", "Decline", "Cancel"]; 

// names.forEach(function (A) {
//     switch (A) {
//         case 'Approve':
//             console.log('Approve');
//             break;
//         case 'Pending':
//             console.log('Pending');
//             break;
//         case 'Decline':
//             console.log('Decline');
//             break;
//         default:
//             console.log('Nothing');
//     }
// });



// var myDate = new Date('01-09-2022');

// // console.log (myDate.toDateString());
// console.log (myDate.toLocaleDateString());

// var myDate = new Date(); 
// var day = String(myDate.getDate()).padStart(2, '0'); // Get day and pad with zero if needed
// var month = String(myDate.getMonth() + 1).padStart(2, '0'); // Get month (0-11) and pad with zero
// var year = myDate.getFullYear(); // Get full year


// var formattedDate = `${day}-${month}-${year}`;

// console.log(formattedDate); 


// var DateTime = new Date();
// var Day = String(DateTime.getDate()).padStart(2, '0');
// var Month = String(DateTime.getMonth()+1).padStart(2,'0');
// var year = String(DateTime.getFullYear());

// var dateFormat = Day + '-' + Month + '-' + year
// console.log(dateFormat);


// var DateTime = new Date();
// var Day = String(DateTime.getDate()).padStart(2, '0');
// var Month = String(DateTime.getMonth() + 1).padStart(2, '0');
// var year = String(DateTime.getFullYear()).slice(2); // Get last two digits of the year

// var dateFormat = Day + '-' + Month + '-' + year;
// console.log(dateFormat); // Outputs: e.g., "27-09-24"


// var A = [100, 150, 200, 250, 300, 350];

// A.forEach(function(A){
//     switch (A)  {
//        case 1000:
//         console.log("Aaysh");
//         break;
//     case 1500:
//         console.log("Aayat");
//         break;
//     case 2000:
//         console.log("Munatha");
//         break;
//     case 2500:
//         console.log("Mouse")
//         break;
//     case 3000:
//         console.log("Watch")
//         break;
//     case 3500:
//         console.log("Mobile")
//         break;
//     default:
//         console.log("Nothing")
//             break;       
//     }
// });



// var A = [100, 150, 200, 250, 300, 350];
// var foundMatch = false; // Track if a match is found

// A.forEach(function(value) {
//     switch (value) {
//         case 1000:
//             console.log("Aaysh");
//             foundMatch = true;
//             break;
//         case 1500:
//             console.log("Aayat");
//             foundMatch = true;
//             break;
//         case 2000:
//             console.log("Munatha");
//             foundMatch = true;
//             break;
//         case 2500:
//             console.log("Mouse");
//             foundMatch = true;
//             break;
//         case 3000:
//             console.log("Watch");
//             foundMatch = true;
//             break;
//         case 3500:
//             console.log("Mobile");
//             foundMatch = true;
//             break;
//         default:
            
//             break;       
//     }
// });

// if (!foundMatch) {
//     console.log("Nothing");
// }

       
// var myDate = new Date();
// var day = String(myDate.getDate()).padStart(2, '0');

// console.log(day);

// var myDate = new Date();
// var Day = String(myDate.getDate()).padStart(2, '0');
// var month = String(myDate.getMonth()+1).padStart(2,'0');
// var year =String(myDate.getFullYear()).slice(0)

// var dateFormat = Day + '-' + month + '-' + year
// console.log(dateFormat); 



// var mydate = new Date();
// var day = String(mydate.getDay()).padStart(2,'0')
// var month = mydate.toLocaleString('default',{month: 'short'})
// var Month = String(mydate.getMonth()).padStart(2,'0')
// var year = String(mydate.getFullYear())
// var hours = mydate.getHours()
// var minutes = mydate.getMinutes()
// var ampm = hours >= 12 ? 'PM' : 'AM';

// hours = hours % 12;
// hours = hours ? String(hours).padStart(2, '0') : '12'; 

// var dateFormat = day + '-'+ month + '-' +year + ' ' + hours + '-' + minutes + ' :' + ampm

// console.log(dateFormat);