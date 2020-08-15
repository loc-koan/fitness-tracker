/* routing path to html pages */
var router = require('express').Router();
const path = require('path');

module.exports = function (app) {
    
    // routes to index page
    router.app.get('/', (request, response) => {
        response.sendFile(path.join(__dirname, '../public/index.html'));
    });

    // routes to exercise page
    router.app.get('exercise', (request, response) => {
        response.sendFile(path.join(__dirname, '../public/exercise.html'));
    });

    // routes to specific type of exercise
    router.app.get('exercise/id', (request, response) => {
        response.sendFile(path.join(__dirname, '../public/exercise.html'));
    });

    // routes to stats page
    router.app.get('stats', (request, response) => {
        response.sendFile(path.join(__dirname, '../public/stats.html'));
    });
};

module.exports = router;