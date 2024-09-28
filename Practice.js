// console.log("Hello World")

// var Num1 = "55";
// var Convert = 45;
// Num1 = parseFloat(Num1);
// console.log(Num1+Convert)

// var A = 15.654789;
// var B = 15.65478;
// var AB = Math.round(A)
// var sum =Math.floor(B)
// console.log(AB+sum)

// var B = Math.random() *1000
// console.log(B)

var B = ["Approve",
        "Pending", 
        "Decline",
        "Reject",
        "Cancel"];

B.forEach(function (A) {
    switch (A) {
        case "Approve":
            console.log("Alredy Approved");
            break;
        case "Decline":
            console.log("Already Decline");
            break;
        case "Reject":
            console.log("Voucher Rejected");
            break;
        case "Cancel":
            console.log("Voucher canceled");
            break;
        case "Pending":
            console.log("Voucher is pending");
            break;
        default:
            console.log("Nothing");
    }
});