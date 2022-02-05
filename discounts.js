const price = 120;
const discount = 18;


function calculateDiscountPrice(price, discount){
    const discountPrice = price - price*discount/100;
    return discountPrice;

}


function getDiscount(){

    const price = document.getElementById("price_input").value;
    const discount = document.getElementById("discount_input").value;
    const finalPrice = calculateDiscountPrice(price, discount);
    console.log(finalPrice)
    document.getElementById("result_message").innerText = "El precio final es $" + finalPrice

}