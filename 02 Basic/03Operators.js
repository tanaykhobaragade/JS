// //OPERATORS
// // + - / * %
// var num1 = 7; //variable name should not start with numbers ex: 2num
// var num2 = 6;
//  console.log(num1 + num2);

//  //boolean value
//   var answer = (num1 > num2);
//    console.log(answer);


//FUNCTIONALITY OF WEBSITE
//listing price and selling price is provided, to calculate percentage
    // D = (L - S)/L * 100
    var sellingPrice = 199;
    var listingPrice = 799;

    var discountPercent = ((listingPrice - sellingPrice) / listingPrice) *100;

    console.log("Discounted Percentage is "+ discountPercent);
    displayDiscountPercentage = Math.round(discountPercent);
    console.log(displayDiscountPercentage + "% off");

    var result = listingPrice > sellingPrice;
     console.log(typeof result); //operator or keyword typeof

     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

