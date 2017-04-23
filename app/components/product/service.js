/**
 * Created by kamlesh and sunny on 23/04/17.
 */

var Q = require('q');
var Product = require('./model');
var CONSTANTS = require('../../../utility/constants');

var productService = {

    /* Add product service method */
    addProductService: function (productData) {
        var deferred = Q.defer();
        if(productData.adminEmail === CONSTANTS.ADMIN_EMAIL && productData.adminPassword === CONSTANTS.ADMIN_PASSWORD) {
            var product = new Product();
            product.name = productData.name;
            product.desc = productData.desc;
            product.imageUrl = productData.imageUrl;
            product.stock = productData.stock;
            product.price = productData.price;
            product.category = productData.category;
            
            product.save(function(error) {
                if (error) {
                    console.log('Error while adding product : - ' + error );
                    deferred.reject(422);
                } else {
                    deferred.resolve();
                }
            });
        } else {
            deferred.reject(401);
        }
        return deferred.promise;
    },

    /* get product service method */
    getAllProductService: function (requestData) {
        var deferred = Q.defer();
        if(requestData.params.categoryId !== undefined) {
            Product.find({category: requestData.params.categoryId},function(error, productObj) {
                if (productObj) {
                    deferred.resolve(productObj);
                } else {
                    deferred.reject(422);
                }
            });
        } else {
            Product.find(function(error, productObj) {
                if (productObj) {
                    deferred.resolve(productObj);
                } else {
                    deferred.reject(422);
                }
            });
        }
        return deferred.promise;
    },
    // get product by id
    getProductByIdService : function (productId){
        var deferred = Q.defer();
        console.log("this is the product id ", productId);
        Product.findOne({_id: productId},function(error, productObj) {
                if (productObj) {
                    deferred.resolve(productObj);
                } else {
                    deferred.reject(422);
                }
            });
        return deferred.promise;
    }

};


module.exports = productService;
