var express = require('express');
var router = express.Router();

router.get('/xml2js/', function(req, res, next) {
  res.render('xml2js', {});
});

// xml2js and express-xml-bodyparser example: retrieve customer using XML
router.post('/sap/bc/srt/scs_ext/sap/fixedassetcreatemain', (req, res, next) => {
  console.log('Raw XML: ' + req.rawBody);
  //console.log('Parsed XML: ' + JSON.stringify(req.body));
  if (req.body.retrieveCustomer) {
    var id = req.body.retrieveCustomer.id;
    res.send(`<customer><id>${id}</id><fullName>Bob Smith</fullName></customer>`);
  } else {
    res.status(400).send('Unexpected XML received, missing <retrieveCustomer> tag');
  }
});

module.exports = router;
