'use strict';
(function(){

class MspopsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('mean2App')
  .component('mspops', {
    templateUrl: 'app/mspops/mspops.html',
    controller: MspopsComponent
  });

})();
