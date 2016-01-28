export function SearchDirective(search) {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {},
    templateUrl: 'app/components/navbar/search.html',
    controller: SearchController,
    controllerAs: 'sm',
    bindToController: true
  };

  return directive;
}

class SearchController {
  constructor() {
    'ngInject'
  }
}
