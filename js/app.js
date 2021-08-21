function ExtraCalculation(product, price){
    const ExtraPrice = document.getElementById(product+'-cost');
    ExtraPrice.innerText = price;
    const ExtraPriceAmount = parseFloat(ExtraPrice.innerText)

    // calculate total 
    calculateTotal()
}

function getElement(product){
   const cost = document.getElementById(product+'-cost');
    const costText = cost.innerText;
    console.log(costText)
    const costAmount = parseFloat(costText)
    return costAmount
}

//calculate total
function calculateTotal(){
    const bestPrice = getElement('base-price')
    const extraMemoryCost = getElement('memory')
    const extraStorageCost = getElement('storage')
    const extraDeliveryCost = getElement('delivery')

    const totalAmount = bestPrice + extraMemoryCost + extraStorageCost + extraDeliveryCost;
    
    //total price
    const totalPrice = document.getElementById('total-price')
    totalPrice.innerText = totalAmount;

    //the last total price
    const lastTotal = document.getElementById('last-total');
    lastTotal.innerText = totalAmount;
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

//event for cupon
document.getElementById('apply-button').addEventListener('click',function(){
    const promoInput = document.getElementById('input-field')
    const promoText = promoInput.value
    if(promoText == 'stevekaku'){
        const lastTotal = document.getElementById('last-total');
        const lastTotalAmount = parseFloat(lastTotal.innerText)
        lastTotal.innerText = lastTotalAmount - (lastTotalAmount/5)
    }
})