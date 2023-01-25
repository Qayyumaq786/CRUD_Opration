 console.log("hello")


var tableBox = document.querySelector('#storeList tbody');
// console.log(tableBox);
// function addingRow1(e){
//     console.log("hellow Word")
//     var productCode_value=document.getElementById('productCode').value;
//     var productNam_value=document.getElementById('product').value;
//     var qty_value=document.getElementById('qty').value;
//     var perPrice_value=document.getElementById('perPrice').value;
//     if(productCode_value!="" && productNam_value!="" && qty_value!="" && perPrice_value!=""){
//         addingRow(e);
//     }

// }


// Adding the data

function addingRow() {

    event.preventDefault();

    var productCode_value = document.getElementById('productCode').value;
    var productNam_value = document.getElementById('product').value;
    var qty_value = document.getElementById('qty').value;
    var perPrice_value = document.getElementById('perPrice').value;

    if (productCode_value == "" || productNam_value == "" || qty_value == "" || perPrice_value == "") {
        return;
    }

    var productCode = document.createElement('td');
    var productNam = document.createElement('td');
    var qty = document.createElement('td');
    var perPrice = document.createElement('td');
    var td_for_btn = document.createElement('td');
    var btn = document.createElement('button');
    td_for_btn.appendChild(btn);
    btn.textContent = "delete";
    btn.setAttribute('onclick', 'delet(this)')
    productCode.setAttribute('class', 'sh');

    productCode.innerHTML = productCode_value;
    productNam.innerHTML = productNam_value;
    qty.innerHTML = qty_value;
    perPrice.innerHTML = perPrice_value;

    var tr = document.createElement('tr');

    tr.appendChild(productCode);
    tr.appendChild(productNam);
    tr.appendChild(qty);
    tr.appendChild(perPrice);
    tr.appendChild(td_for_btn);

    tableBox.appendChild(tr);

    document.getElementById('productCode').value = "";
    document.getElementById('product').value = "";
    document.getElementById('qty').value = "";
    document.getElementById('perPrice').value = "";

}


// delete the data

function delet(ele) {

    const parent = ele.parentNode;
    const grandP = parent.parentNode;
    console.log(grandP)
    grandP.remove();

}

var search = document.getElementById('search');

search.addEventListener('keyup', function (e) {

    var td = document.getElementsByClassName('sh');

    for (var i = 0; i < td.length; i++) {
        console.log(td[i].textContent);
        if (
            td[i].textContent
                .toUpperCase()
                .indexOf(e.target.value.toUpperCase()) > -1
        ) {
            td[i].parentNode.style.display = "";
        } else {
            td[i].parentNode.style.display = "none";
        }
    }



});



