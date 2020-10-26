// BUDGET CONTROLLER
var budgetController = (function() {
 
})();

// UI CONTROLLER
var UIController = (function() {

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

  var ctrlAddItem = function() {

  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      console.log("13")
    }
  });
})(budgetController, UIController);