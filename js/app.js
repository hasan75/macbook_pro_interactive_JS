function ExtraCalculation(product, price){
    const ExtraPrice = document.getElementById(product+'-cost');
    ExtraPrice.innerText = price;
    const ExtraPriceAmount = parseFloat(ExtraPrice.innerText)
    //return ExtraPriceAmount
    calculateTotal()
}

// function getElement(product){
//    const cost = document.getElementById(product+'-cost');
//     const costText = cost.innerText;
//     const costAmount = parseFloat(costText)
// }

//calculate total
function calculateTotal(){
    const basePrice = document.getElementById('base-price-cost').innerText
    const bestPrice = parseFloat(basePrice)
    const memoryCost = document.getElementById('memory-cost').innerText
    const extraMemoryCost = parseFloat(memoryCost)
    const storageCost = document.getElementById('storage-cost').innerText
    const extraStorageCost = parseFloat(storageCost)

    const deliveryCost = document.getElementById('delivery-cost').innerText
    const extraDeliveryCost = parseFloat(deliveryCost)

    const totalAmount = bestPrice + extraMemoryCost + extraStorageCost + extraDeliveryCost;
    
    const totalPrice = document.getElementById('total-price')
    totalPrice.innerText = totalAmount;
}

//extra memory button events
document.getElementById('memory8GB-button').addEventListener('click',function(){
   ExtraCalculation('memory', 0);
})
document.getElementById('memory16GB-button').addEventListener('click',function(){
    ExtraCalculation('memory', 180);
})

//extra storage button events
document.getElementById('storage256-button').addEventListener('click',function(){
    ExtraCalculation('storage', 0);
})

document.getElementById('storage512-button').addEventListener('click',function(){
    ExtraCalculation('storage', 100);
})

document.getElementById('storage1TB-button').addEventListener('click',function(){
    ExtraCalculation('storage', 180);
})

//delivery charge events
document.getElementById('delivery-free-button').addEventListener('click',function(){
    ExtraCalculation('delivery', 0);
})
document.getElementById('delivery-cost-button').addEventListener('click',function(){
    ExtraCalculation('delivery', 20);
})