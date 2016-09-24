(function () {
'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyShoppingController(ShoppingListCheckOffService){
  
    var buyList = this;

    buyList.items= ShoppingListCheckOffService.getItemsToBuy();

    buyList.bought = function (itemIndex) {
      ShoppingListCheckOffService.bought(itemIndex);
   
    }
  
 		
	} 

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtList=this;
    boughtList.items=ShoppingListCheckOffService.getItemsBought();
  
  }




  function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items initial
    var shoppingList = [
        {name: "Milk",quantity: "2"},
        {name: "Donuts",quantity: "200"},
        {name: "Cookies",quantity: "300"},
        {name: "Chocolate",quantity: "5" },
        {name: "muffin", quantity:"3"},
        {name: "milk shake", quantity:"5"},
        {name: "tiramisu", quantity:"8"},
        {name: "wafer", quantity:"1"},
        {name: "cake", quantity:"2"},
    ];
  

    var itemsBuy = shoppingList; // for ToBuyShoppingController
    var itemsBought=[]; //for AlreadyBoughtController
    
    service.bought = function (itemIndex) {
     var item = {
       name: itemsBuy[itemIndex].name,
       quantity: itemsBuy[itemIndex].quantity
      };
      itemsBought.push(item); // add in the bought list
      itemsBuy.splice(itemIndex, 1); // remove from de buy list
    };

   

  service.getItemsToBuy = function () {
    return itemsBuy;
  };
  service.getItemsBought = function () {
    return itemsBought;
  };
}

})();


