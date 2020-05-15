var mongoose = require('mongoose');
mongoose.connect('mongodb://172.17.0.3/popularfood', { useNewUrlParser: true });

var db = mongoose.connection;

var seeding = (restaurantData) => {
    Restaurants.insertMany(restaurantData, function (error, docs) {
        if (error) {
            // console.log(error);
        } else {
            // console.log(docs);
        }
    })
}

var RestaurantSchema = new mongoose.Schema({
    restaurantname: String,
    popularDishes: Array
});

var Restaurants = mongoose.model('Restaurants', RestaurantSchema);

var query = (callback) => {
    Restaurants.find(function (err, docs) {
        if (err) {
            callback(err);
        } else {
            callback(null, docs);
        }
    })
};

module.exports.query = query;
module.exports.seeding = seeding;