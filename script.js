
var products = [{
    "id": "100",
    "name": "iPhone 4S",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "101",
    "name": "Moto X",
    "brand": "Motorola",
    "os": "Android"	
},
{
    "id": "102",
    "name": "iPhone 6",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "103",
    "name": "Samsung Galaxy S",
    "brand": "Samsung",
    "os": "Android"
},
{
    "id": "104",
    "name": "Google Nexus",
    "brand": "ASUS",
    "os": "Android"
},
{
    "id": "105",
    "name": "Surface",
    "brand": "Microsoft",
    "os": "Windows"
}];
$(document).ready(function () { 
 display(products);
 $(document).on("change", "#brand", function () {
    var temp=" ";
    var value=$("#brand").val();
    $("#b1").html(" ");
 dispbrand(value,temp,products);

 $(document).on("change","#os",function(){
     var tepm=" ";
     var value=$("#os").val();
     $("#b1").html(" ");
    dispbrand(value,temp,products);

 })
    
    
});
$(document).on("click", "#delete", function () {
    var del = $(this).parent("td").siblings("#id").html();
    remove(del);
  });



});
function display(products){
    var html1=" ";
    for(var i=0;i<products.length;i++){
        html1+='<tr id="id"><td>'+products[i].id+'</td>'+'<td id="name">'+products[i].name+'</td><td id="brand">'+products[i].brand+'</td><td id="os">'+products[i].os +'</td><td><input type="button" name="delete" id="#delete" value="Delete"></td></tr>';
    }
    $("#b1").html(html1);
}

function dispbrand(value,temp,products){

for(var i=0;i<products.length; i++){
   temp+='<tr><td>'+products[i].id+'</td>'+'<td>'+products[i].name+'</td><td>'+products[i].brand+'</td><td>'+products[i].os +'</td><td><input type="button" name="delete" id="delete" value="Delete"></td></tr>';
}
    $("#b1").html(temp);
}

function remove(data) {
    newArray = [];
    for (var i = 0; i < products.length; i++) {
      if (products[i].id != data) {
        newArray.push(products[i]);
      }
    }
    products = newArray;
    display(products);
  }
  