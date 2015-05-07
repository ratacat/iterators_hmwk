var line_items = [
    {description: "aardvark", price: 425, qty: -1},
    {description: "PruNe", price: 1.99, qty: 1},
    {description: "potato", price: .79, qty: -10},
    {description: "zebra", price: 525.25, qty: 1},
    {description: "SpinAch", price: 2.99, qty: 1},
    {description: "zepplin", price: 20000, qty: 1},
    {description: "PetUnia", price: 1.25, qty: 12},
    {description: "squash", price: 2.35, qty: 3}
];

var coupons = [
    {description: "Zebra", discount: 100, limit: 1},
    {description: "squash", discount: 1.00, limit: 1},
    {description: "mouse", discount: 2.00, limit: 10}
];

var $entries, 
    $subTotal;
var subTotalPrice= 0; // !stuck here for a while, this wasn't set to 0, and I kept getting undefined as a result
var salesTax = 0;
var total = 0;
$(document).ready(function(){

   $entries = $("#entries");
   $subTotal = $('#subtotal');

  myUtils.myEach(line_items, function(v,i){
    addItem(v.price, v.description, v.qty);
  });

  updateSubTotal();
  updateSalesTax();
  updateTotal();

});

function addItem(price, title, quantity) {
  // YUCK! Let's refactor this!
  // var html_string = (
  //       "<tr>" +
  //         "<td>" +  title + "</td>" +
  //         "<td>" + quantity + "</td>" +
  //         "<td>" + price + "</td>" +
  //       "</tr>"
  // );

html = myUtils.buildElement("tr",
    myUtils.buildElement('td',title) + 
    myUtils.buildElement('td',quantity) + 
    myUtils.buildElement('td',price));

  $entries.append(html  );
}

function updateSubTotal() {
  myUtils.myEach(line_items, function(object){
      subTotalPrice += (object['price'])  * object['qty'];
      //console.log("stp: " + subTotalPrice + "objPrice: " + object['price'] + "objQty:" + object['qty'] );
    });
  $subTotal.text("$" + subTotalPrice); 
}

function updateSalesTax() {
  salesTax = subTotalPrice * .0725;
  $('#salestax').text('$' + myUtils.toDollars (salesTax));
}

function updateTotal() {
  total = salesTax + subTotalPrice;
  $('#total').text('$' + myUtils.toDollars(total));
}

function lineTotal(quantity,priceEach) {
  return quantity * priceEach;
}