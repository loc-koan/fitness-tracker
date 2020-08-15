/* routing path to html pages */
var router = require('express').Router();
const path = require('path');
    
    // routes to index page
    router.get('/', (request, response) => {
        response.sendFile(path.join(__dirname, '../public/index.html'));
    });

    // routes to exercise page
    router.get('/exercise', (request, response) => {
        response.sendFile(path.join(__dirname, '../public/exercise.html'));
    });

    // routes to specific type of exercise
    // router.get('.sendFile(path.join(__dirname, '../public/exercise.html'));
    // });

    // routes to stats page
    router.get('/stats', (request, response) => {
        response.sendFile(path.join(__dirname, '../public/stats.html'));
    });

module.exports = router;