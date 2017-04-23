/**
 * Created by kamlesh and sunny on 23/04/17.
 */

var Q = require('q');
var categoryService = require('./service');
var DTO = require('../../../utility/dto');

var categoryController = {
     
      /*get category controller */
   getCategoryController: function (requestData) {
        var deferred = Q.defer();
        categoryService.getCategoryService()
            .then(function (success) {
                DTO.statusCode = 200;
                DTO.message = "SUCCESS"
                DTO.object = success;
                deferred.resolve(DTO);
            }, function (error) {
                DTO.statusCode = error;
                DTO.message = null;
                DTO.object = null;
                deferred.reject(DTO);
            });
        return deferred.promise;
    },
     /* add category Controller Method */
   addCategoryController: function (requestData) {
        var deferred = Q.defer();
        console.log("category data " ,requestData);
        var categoryData = {
            name: requestData.body.name
        };
        categoryService.addCategoryService(categoryData)
            .then(function (success) {
                DTO.statusCode = 200;
                DTO.message = "SUCCESS"
                DTO.object = success;
                deferred.resolve(DTO);
            }, function (error) {
                DTO.statusCode = error;
                DTO.message = null;
                DTO.object = null;
                deferred.reject(DTO);
            });
        return deferred.promise;
    },

     
};

module.exports = categoryController;