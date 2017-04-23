/**
 * Created by kamlesh and sunny on 23/04/17.
 */

var Q = require('q');
var Category = require('./model');
var CONSTANTS = require('../../../utility/constants');

var categoryService = {
      
      /* get category service method */
    getCategoryService: function () {
        var deferred = Q.defer();
         Category.find(function(error, category) {
            if (error) {
                console.log('Error while finding category: - ' + error );
                deferred.reject(422);
            } else {
                deferred.resolve(category);
            }
        });
        return deferred.promise;
    },

    /* Add product service method */
    addCategoryService: function (categoryData) {
        var deferred = Q.defer();
        var category = new Category();

        category.name = categoryData.name;
         category.save(function(error) {
            if (error) {
                console.log('Error while adding creating data : - ' + error );
                deferred.reject(422);
            } else {
                deferred.resolve();
            }
        });
        return deferred.promise;
    }

    
};

module.exports = categoryService;
