angular
  .module('angularAddresses')
  .controller('Main', function ($rootScope, $location, Person) {
    var vm = this;

    Person.getAll(function (people) {
      vm.people = people;
    });

    vm.onModalLoad = function () {};
  });
