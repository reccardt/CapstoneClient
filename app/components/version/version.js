'use strict';

angular.module('paulApp.version', [
  'paulApp.version.interpolate-filter',
  'paulApp.version.version-directive'
])

.value('version', '0.1');
