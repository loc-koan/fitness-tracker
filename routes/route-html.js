/* routing path to html pages */

const path = require('path');

module.exports = function (app) {
    
    // routes to index page
    app.get('/', (request, response) => {
        response.sendFile(path.join(__dirname, '../public/index.html'));
    });

    // routes to exercise page
    app.get('exercise', (request, response) => {
        response.sendFile(path.join(__dirname, '../public/exercise.html'));
    });

    // routes to specific type of exercise
    app.get('exercise/id', (request, response) => {
        response.sendFile(path.join(__dirname, '../public/exercise.html'));
    });

    // routes to stats page
    app.get('stats', (request, response) => {
        response.sendFile(path.join(__dirname, '../public/stats.html'));
    });
};