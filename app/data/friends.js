// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "Bill",
        "photo": "https://vignette.wikia.nocookie.net/ghostbusters/images/1/11/Bill_Murray.jpeg/revision/latest?cb=20081013140955",
        "scores": [
            1,
            5,
            3,
            3,
            2,
            2,
            1,
            5,
            1,
            1
        ]
    }
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
