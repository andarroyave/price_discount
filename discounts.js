const price = 120;
const discount = 18;

const coupons = [
    {
        name: "cupon1",
        discount: 10,
    },
    {
        name: "cupon2",
        discount: 20,
    },
    {
        name: "cupon3",
        discount: 30,
    }
]



function calculateDiscountPrice(price, discount){
    const discountPrice = price - price*discount/100;
    return discountPrice;

}

function getCoupon(name){    
    let coupon = coupons.find(coupon => coupon.name==name)  
    return coupon
  
}

function validateCoupon(name){
    return getCoupon(name) != undefined

}

function getDiscount(){

    let couponName = document.getElementById("coupon_input").value;
    if(!validateCoupon(couponName)){
        alert("El cupón no es válido.")
    }
    else{
        const price = document.getElementById("price_input").value;
        const discount = getCoupon(couponName).discount;
        const finalPrice = calculateDiscountPrice(price, discount);
        console.log(finalPrice)
        document.getElementById("result_message").innerText = "El precio final es $" + finalPrice
    }


}