/**
*   Router Spec Test
*/


'use strict';

var routes = require('../../client/scripts/routes');

describe('Routes for router', function() {

  it('provides the "Router" instance', function() {
    // Expect it to exist
    expect(routes)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
