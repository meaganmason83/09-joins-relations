'use strict';

(function(module) {

  var searchView = {};

  // TODO: Write the code to populate your filters, and enable the search queries here in search.js
  // TODO: You will also interact with the map.js file here
  searchView.populateFilters = function() {
    webDB.execute('SELECT state FROM zips GROUP BY state;',
    function(rows) {
      if (rows.length) {
        console.log(rows);
      $('state-select').
      } else {
        $.getJSON('../../data/zips.json', function() {

        });
      }
    });
  };

  searchView.populateFilters();
})(window);
