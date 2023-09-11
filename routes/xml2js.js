var express = require('express');
var router = express.Router();

router.get('/xml2js/', function(req, res, next) {
  res.render('xml2js', {});
});

router.post('/sap/bc/srt/scs_ext/sap/fixedassetcreatemain', (req, res, next) => {
  console.log('Raw Asset XML: ' + req.rawBody);
  //console.log('Parsed XML: ' + JSON.stringify(req.body));
  res.status(200).send(req.rawBody);
});

router.post('/sap/bc/srt/scs/sap/businesspartnersuitebulkreplic', (req, res, next) => {
  //console.log('Raw BP XML: ' + req.rawBody);
  //console.log('Parsed XML: ' + JSON.stringify(req.body));
  res.status(200).send(req.rawBody);
});

module.exports = router;
