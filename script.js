(function(){
  'use strict';
  
  angular.module("inheritanceDemo", [])
    .controller("parentCtrller", [function(){
      this.title = "parent title";
      this.click = function(){
        alert("Parent click function!");
      };
    }])
    .controller("childCtrller", ['$controller', function($controller){
      this.child = $controller("parentCtrller", {});
      this.child.title = "child title";
      this.child.click = function(){
        alert("Child click function");
      };
    }]);
    
})();