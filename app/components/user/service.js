/**
 * Created by kamlesh and sunny on 23/04/17.
 */

var Q = require('q');
var User = require('./model');

var userService = {


      /* User SignUp Service method */
    userSignUPService: function (userData) {
        var deferred = Q.defer();
        var user = new User();
        user.name = userData.name;
        user.email= userData.email;
        user.password = userData.password,
        user.createdAt = userData.createdAt

         user.save(function(error) {
            if (error) {
                console.log('Error while creating user : - ' + error );
                deferred.reject(422);
            } else {
                deferred.resolve();
            }
        });
        return deferred.promise;
    },

     /* User SignUp Service method */
    userSignInService: function (userData) {
        var deferred = Q.defer();

         User.findOne({email:userData.email,password:userData.password}, function(error, user) {
            if (error || !user) {
                console.log('Error while login user : - ' + error );
                deferred.reject(401);
            } else {
                deferred.resolve(user);
            }
        });
        return deferred.promise;
    },


    
};

module.exports = userService;
