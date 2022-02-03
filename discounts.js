const price = 120;
const discount = 18;


function calculateDiscountPrice(price, discount){
    const discountPrice = price - price*discount/100;
    return discountPrice;

}

console.log(discountPrice);