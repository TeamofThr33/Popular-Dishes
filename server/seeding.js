/*
Format:
{
    RestaurantName: “Yasmin” (String),
    PopularDishes: [ {
        DishName: “Wood Oven Roasted Pork” (String),
        DishCoverPicture: url (String),
        DishIngredients: “lentil” (string),
        DishPhotos: [ { Photo: url (String),
            PhotoDescription: “unforgettably delicious” (string),
            },
            {...} ],
        DishReviews: [ {
            UserName: “Sara L.” (String),
            AvatarPhoto: url (String),
            UserReviewdetail: “I loved this dish” (string),
            UserReviewDate: 3/6/2018 (Date),
            UserReviewRating: 4 (Number),
            UserFriendsCount: 286 (Number),
            UserReviewsCount: 302 (Number),
            },
            {...} ],
        DishPrice: 65.00 (integer)},
    {...}]
}
*/


var restaurantName = ['Integrity Fish House',
    'The Fish House Organic',
    'Running Water',
    'The Morning Catch',
    'Open Water Seafood',
    'The Cajun Catfish',
    'Bluefin Organica',
    'Sustainable Seafood',
    'The Catfish Collaborative',
    'Deep Sea Eatery'];

var dishName = ['Oysters', 'Jumbo Scallop & Crab', 'Seafood Penne', 'Ahi Tuna', 'Shellfish Platter', 'Mixed Grill', 'Ciopinno', 'Dungeness Crab Cakes', 'Clam Chowder'];
var userName = ['Shelia D.', 'Katie S.', 'Tina D.', 'Joanne C.', 'Laurie V.', 'William Y.', 'Ivy W.', 'Nilla R.', 'Brianna M.', 'Clarice G.'];
var reviewDetail = ['I had this restaurant bookmarked since the last time I was at San Francisco which was about four years ago. So this time I made it my mission to go here for dinner. We use the Yelp app to put our name on the waitlist which said about 10 to 20 minutes. As soon as we got there we were called to be seated. I loved the waiting area which looked like a living room. They had a giant fireplace and very cozy couches. Our host took us to our booth which was right in front of the big windows overlooking the bay. He was extremely friendly and very funny as well. We actually asked him for some recommendations which he recommended the clam chowder (of course) and the shellfish platter. Not long after our waitress came by and took our drink orders. We ordered a couple of waters and two oyster shots. We got the fried calamari as starters, we got two bottles of clam chowder, and the shellfish platter. Before we knew it everything started coming out. The oyster shots were delicious. The clam chowders were amazing. Best I\'ve had in a while. It wasn\'t too fishy and the clams and the potatoes inside were very tender and tasty. Loved it. The shellfish platter was insanely delicious. The buttery sauce was so amazing. We couldn\'t get enough. We dipped the extra bread in the butter sauce and it was delicious. The fried calamari who is very crispy which is how it should be and very well seasoned. And when our waitress brought out the check she brought two pieces of Biscoff cookies with it. On the bottom of our receipts it said that if we take our receipts to the Biscoff café which was right across from this restaurant then we would get 20% discount. Which is exactly what we did. Overall our experience here was a fantastic one. I highly recommend it',
    'We plan to have a nice a meal on every trip we take and we chose Fog Harbor for our San Francisco trip based on their stellar reviews. We had a 5 o clock reservation for a table near the window and were seated right away. The view was stunning. We started with the crab tator tots that our server recommended and they were delicious. For dinner I had the ahí tuna and my husband had the mixed grill blackened with crab, we both loved our food. Our sons both had the kids salmon and they left their plates spotless. Our server was very attentive and helpful with our boys (10 and 13). If you plan on having a nice meal, it pays to make a reservation, we made one for a window table at sunset and we were not disappointed.',
    'Wow! Amazing. I got the mixed grilled fish plate and it was perfect. My boyfriend got the garlic butter crab and was impressed. A bit messy, yes, but worth it. He had never had crab before and enjoyed cracking it. I loved the mashed potatoes and the green beans were so good. We will definitely come back when we are out here next!',
    'Best clam chowder with crab! I had the mixed grill with salmon, shrimp, & fish! The calamari was excellent as well.',
    'They helped make our Anniversary amazing. The mixed grill was fabulos and Mel, our waiter, couldnt have been nicer or more attentive. We will definately be back!',
    'Great food and an excellent view. Really enjoyed the lunch. Had the mixed grill and fish and chips. Bread bowl of chowder was excellent Sea lions were on the dock just below and working views. Located on Pier 39.',
    'We had an enjoyable experience and tasty meals tonight. Jane was so considerate and kind to serve us. We high recommend the bread bowl with crab soup, shell platte with lobster tail, and risotto',
    'Took my parents there while they were visiting San Francisco, they love it. The service was great! I really recommend the clam chowder with crab meat, I personally didn\'t really like the bread, I think it would taste as good/even better in bowls. The lobster tails and crab were delicious!',
    'Disappointed is the kindest word I can describe my experience at the Fog Harbour. View was ok. Food was somewhat average for typical tourist restaurant. My experience was totally ruined when the bill came out. We set down and ordered platter for two for $ 79.00. We were thinking that the portion was on the heavy side. Service was below average considering waiter wasn\'t paying much attention. After the meal our waiter, Michael Kelly, gave us a bill worth $ 145.00. When I asked our waiter about the price, he told me that we ordered with lobster tail. And he said that it was a mistake. Presenting $ 79 menu and giving $ 145 bill sounds like a typical scam. Hope others will share the same experience soon.',
    'Incredible meals, service, and what a view at sunset! I had the scallops and crab risotto special and my wife had the seafood combo - both cooked and seasoned perfectly. I would make this restaurant a regular stop if I lived here.',
    'By far, the BEST meal we had on our trip. Too bad that we didn\'t discover this place until our last night. The staff were kind and attentive. Our water glasses never went below half full. The food was AMAZING. DO NOT skip the calamari app--yum! It was so fresh and the fried jalapeños and the lemon aioli made it second only to the clam chowder. The table enjoyed the mixed grill meal and the scallop and crab risotto. Both highly recommended! You can see the water--and Alcatraz--from almost every seat. Jeremy made my night with a Happy Birthday treat! He was also very knowledgeable about the menu and provided us with a memorable experience. Will definitely return on our next trip! THANKS!!',
    'Loved this place. Delicious food!!! I had a the cod and it was so good. My husband had the scallops and crab risotto that was delicious!! The service was outstanding- we had Jeremy as our waiter. It is in such a great setting and we were served super efficiently for such a gourmet meal. We will definitely be going back.',
    'One of the best seafood restaurants we\'ve been to. The wait will be more than an hr but the nice thing about it is you can simply join the waiting list through yelp and see where your position is while having some fun at the pier 39. The scallops and crab risotto was our favorite and like my 15 yr old son put it, we can eat this thing over and over again! The clam chowder is very tasty but not salty- probably the best we\'ve ever had. The garlic roasted Dungeness crab was a great choice as well. Highly recommend for anyone who happens to be visiting the piers and the fisherman\'s dwarf!'
];
var ingredients = ['Seafood with salt and pepper', 'Cooked seafood', 'Seasoned seafood with persil', 'Cooked and warm seafood', 'Slowly cooked in butter', 'Roasted and baked seafood'];
var photoDescription = ['Unforgettably delicious', 'best choice', 'Really enjoyed this dish', 'Best eaten warm', 'Great for sharing', 'One of the best I\'ve had', 'Highly recommend!','This is the best dish we ordered','This food is instragramable'];

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var formatDishPhotoURL = (name) => {
    var nameArray = name.split(' ');
    return `https://foodimages123456.s3-us-west-1.amazonaws.com/${nameArray.join('+')}/${nameArray.join('')}${randomIntFromInterval(1, 25)}.jpg`;
}

var formatUsernamePhotoURL = () => {
    return `https://foodimages123456.s3-us-west-1.amazonaws.com/UserProfiles/UserProfile${randomIntFromInterval(1, 25)}.jpg`;
}

var generateData = () => {
    var listOfRestaurants = [];

    for (var i = 0; i < 100; i++) {
        var obj = {};
        obj.restaurantName = restaurantName[randomIntFromInterval(0, restaurantName.length - 1)];
        obj.popularDishes = [];
        for (var j = 0; j < randomIntFromInterval(4, 9); j++) {
            var dish = {};
            dish.dishName = dishName[randomIntFromInterval(0, dishName.length - 1)];
            dish.dishPrice = '$' + randomIntFromInterval(25, 45) + '.00';
            dish.ingredients = ingredients[randomIntFromInterval(0, ingredients.length - 1)];
            dish.coverPictureURL = formatDishPhotoURL(dish.dishName);
            dish.photos = [];
            for (var k = 0; k < randomIntFromInterval(5, 25); k++) {
                var photo = {};
                photo.URL = formatDishPhotoURL(dish.dishName);
                photo.description = photoDescription[randomIntFromInterval(0, photoDescription.length - 1)];
                dish.photos.push(photo);
            }
            dish.reviews = [];
            for (var l = 0; l < randomIntFromInterval(4, 15); l++) {
                var review = {};
                review.username = userName[randomIntFromInterval(0, userName.length)];
                review.usernamePhotoURL = formatUsernamePhotoURL();
                review.userReview = reviewDetail[randomIntFromInterval(0, reviewDetail.length -1)];
                review.userReviewDate = `${randomIntFromInterval(1,12)}/${randomIntFromInterval(1,28)}/${randomIntFromInterval(2012,2019)}}`;
                review.userReviewRating = randomIntFromInterval(0,5);
                review.userFriendsCount = randomIntFromInterval(0,500);
                review.userReviewsCount = randomIntFromInterval(0,200);
                dish.reviews.push(review);
            }
            obj.popularDishes.push(dish);
        }
        listOfRestaurants.push(obj);
    }

    return listOfRestaurants;
}


const db = require('./db.js');
var restaurantData = generateData();
db.seeding(restaurantData); 
