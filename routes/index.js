const express = require('express'),
      router  = express.Router(),
      moment  = require('moment');
      
router.get('/', (req, res) => {
    res.sendFile('index.html');
});
      
router.get('/:query', (req, res) => {
      var query = req.params.query;
      if (moment(query, 'X', true).isValid()) {
            var date = moment.unix(query).utc().format('MMMM D, YYYY');
            var response = {
                  unix: Number(query),
                  natural: date
            };
            res.json(response);
      } else if (moment(query, 'MMMM D, YYYY', 'en', true).isValid()) {
            var date = moment(query, 'MMMM D, YYYY', 'en', true);
            var response = {
                  unix: date.unix(),
                  natural: query
            };
            res.json(response);
      } else {
            var response = {
                  unix: null,
                  natural: null
            }
            res.json(response);
      }
});

router.get('*', (req, res) => {
      var response = {
            unix: null,
            natural: null
      }
      res.json(response);
});

module.exports = router;