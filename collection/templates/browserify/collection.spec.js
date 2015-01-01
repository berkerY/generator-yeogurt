/**
*   <%= _.classify(name) %> Spec Description
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

var <%= _.classify(name) %> = require('<%= rootDir %><%= collectionFile %>');

describe('<%= _.classify(name) %> Collection', function () {

    beforeEach(function () {
        this.<%= _.camelize(name) %>Collection = new <%= _.classify(name) %>();
    });

    it('Should run a few assertions', function(){

    });

});
