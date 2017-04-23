/**
 * Created by kamlesh and sunny on 23/04/17.
 */

var Q = require('q');
var productService = require('./service');
var DTO = require('../../../utility/dto');

var productController = {

    /* Add product controller method */
    addProductController: function (requestData) {
        var deferred = Q.defer();
        var productData = {
            adminEmail: requestData.adminEmail,
            adminPassword: requestData.adminPassword,
            name: requestData.body.name,
            desc: requestData.body.desc,
            imageUrl: requestData.body.imageUrl,
            stock: requestData.body.stock,
            price: requestData.body.price,
            category: requestData.body.category
        };
        productService.addProductService(productData)
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
    //get product
     getAllProductController: function (requestData) {
        var deferred = Q.defer();
        productService.getAllProductService(requestData)
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
    //get product by
     getProductByIdController: function (requestData) {
        var deferred = Q.defer();
        productService.getProductByIdService(requestData.params.productId)
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

    //Delete product by
     deleteProductBy: function (requestData) {
        var deferred = Q.defer();
        productService.deleteProductBy(requestData.params.id)
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
    }


};

module.exports = productController;