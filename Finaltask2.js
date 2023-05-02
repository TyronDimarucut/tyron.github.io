let NOI = 0;

function increment() {
	NOI++;
	document.getElementById("NOI").value = NOI;
	document.getElementById("NI").textContent = NOI;
	updateCost();
	
}

function decrement() {
	if(NOI>0){
	NOI--;
	document.getElementById("NOI").value = NOI;
	document.getElementById("NI").textContent = NOI;
	}
	updateCost();
}

function updateCost() {
	price = 15.97
	totalPrice = NOI * price;
	NOI = parseFloat (document.getElementById("NOI").value);
	document.getElementById("NI").innerHTML = "$" + totalPrice.toFixed(2);
	
	Fee = parseFloat (document.getElementById("Fee").value);
	document.getElementById("SH").innerHTML = "$" + Fee.toFixed(2);

	bTax = totalPrice + Fee;
	Fee = parseFloat (document.getElementById("Fee").value);
	document.getElementById("TBT").innerHTML = "$" + bTax.toFixed(2);	

	esTax = Math.round(bTax * 10) / 100;
	document.getElementById("ET").innerHTML = "$" + esTax.toFixed(2);	

	totalOrder =bTax + esTax;
	document.getElementById("TO").innerHTML = "$" + totalOrder.toFixed(2);

	Fee = parseFloat (document.getElementById("Fee").value);
	document.getElementById("SH").innerHTML = "$" + Fee.toFixed(2);

}