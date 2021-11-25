function addItem() {
    let quantity = parseInt(document.getElementById("quantity").value);
    quantity += 1;
    document.getElementById("quantity").value = quantity;
}

function reduceItem() {
    let quantity = parseInt(document.getElementById("quantity").value);
    quantity -= 1;
    document.getElementById("quantity").value = quantity;

    if(quantity<=0){
        alert("Tak nak beli barang ke??? Main-main pulak awak ni");
        document.getElementById("quantity").value = 1;
    }
}