/**
 * Created by kamlesh and sunny on 23/04/17
 */

var db_machine = 'localhost';
var db_port = 27017;
var db_name = 'shoppers-clue1';

module.exports = {
    db: {
        development: 'mongodb://'+ db_machine +':'+ db_port +'/' + db_name,
    }
};