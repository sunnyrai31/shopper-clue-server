/**
 * Created by kamlesh and sunny on 23/04/17.
 */

var Q = require('q');
var userService = require('./service');
var DTO = require('../../../utility/dto');

var userController = {

     /* User SingUp Controller Method */
    userSignUPController: function (requestData) {
        var deferred = Q.defer();
        console.log("User signUpData " ,requestData);
        var userData = {
            name: requestData.body.name,
            email: requestData.body.email,
            password:requestData.body.password,
            createdAt:requestData.body.createdAt
        };
        userService.userSignUPService(userData)
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

     /* User SingIn Controller Method */
    userSignInController: function (requestData) {
        var deferred = Q.defer();
        console.log("User signInData " ,requestData);
        var userData = {
            email: requestData.body.email,
            password:requestData.body.password
        };
        userService.userSignInService(userData)
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

module.exports = userController;