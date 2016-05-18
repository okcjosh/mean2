'use strict';
(function(){

class NewclientsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('mean2App')
  .component('newclients', {
    templateUrl: 'app/newclients/newclients.html',
    controller: NewclientsComponent
  });

})();
