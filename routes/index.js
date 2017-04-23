
var express = require('express');
var router = express.Router();

/* All controllers reference */
var productController = require('../app/components/product/controller');
var userController = require ('../app/components/user/controller');
var categoryController = require ('../app/components/category/controller');

/* ============APIS=========*/

router.use(function(request, response, next) {
    console.log('==================================');
    console.log('Yup , i am middleware ');
    console.log('===================================');
    next(); // make sure we go to the next routes and don't stop here
});

/* User API */

//SignIn User
router.route('/signIn')
    .post(function(request, response) {
         userController.userSignInController(request)
            .then(function (success) {
                response.status(success.statusCode).send(success);
            }, function (error) {
                response.status(error.statusCode).send(error);
            });
});


// SignUp User  
router.route('/signUp')
    .post(function(request, response) {
         userController.userSignUPController(request)
            .then(function (success) {
                response.status(success.statusCode).send(success);
            }, function (error) {
                response.status(error.statusCode).send(error);
            });
});

 //get category
router.route('/getCategory')
    .get(function(request, response) {
        categoryController.getCategoryController()
            .then(function (success) {
                response.status(success.statusCode).send(success);
            }, function (error) {
                response.status(error.statusCode).send(error);
            });
});

//add category
router.route('/addCategory')
    .post(function(request, response) {
        categoryController.addCategoryController(request)
            .then(function (success) {
                response.status(success.statusCode).send(success);
            }, function (error) {
                response.status(error.statusCode).send(error);
            });
});
 
//Product ADD
router.route('/addProduct')
    .post(function(request, response) {
         productController.addProductController(request)
            .then(function (success) {
                response.status(success.statusCode).send(success);
            }, function (error) {
                response.status(error.statusCode).send(error);
            });
});

//get all product with category or without category
router.route('/getProducts/:categoryId?')
    .get(function(request, response) {
         productController.getAllProductController(request)
            .then(function (success) {
                response.status(success.statusCode).send(success);
            }, function (error) {
                response.status(error.statusCode).send(error);
            });
});

//get all product with category or without category
router.route('/getProduct/:productId')
    .get(function(request, response) {
         productController.getProductByIdController(request)
            .then(function (success) {
                response.status(success.statusCode).send(success);
            }, function (error) {
                response.status(error.statusCode).send(error);
            });
});







module.exports = router;
