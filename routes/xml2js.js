var express = require('express');
var router = express.Router();

router.get('/xml2js/', function(req, res, next) {
  res.render('xml2js', {});
});

router.post('/sap/bc/srt/scs_ext/sap/fixedassetcreatemain', (req, res, next) => {
  //console.log('Raw Asset XML: ' + req.rawBody);
  //console.log('Parsed XML: ' + JSON.stringify(req.body));
  res.status(200).send(req.rawBody);
});

router.post('/sap/bc/srt/scs/sap/businesspartnersuitebulkreplic', (req, res, next) => {
  console.log('Raw BP XML: ' + req.rawBody);
  //console.log('Parsed XML: ' + JSON.stringify(req.body));
  res.status(200).send(req.rawBody);
});

//External Tax - Determine Tax Jurisdiction Codes
router.post('/CO_TAX_JURI_DETER_SPRX', (req, res, next) => {
  console.log('External Tax - Determine Tax Jurisdiction Codes: ' + req.rawBody);
  //console.log('Parsed XML: ' + JSON.stringify(req.body));
  res.status(200).send(req.rawBody);
});

//External Tax - Calculate Taxes
router.post('/CO_TAX_CALCULATION_SPRX', (req, res, next) => {
  console.log('External Tax - Calculate Taxes: ' + req.rawBody);
  //console.log('Parsed XML: ' + JSON.stringify(req.body));
  res.status(200).send(req.rawBody);
});

//External Tax - Update Tax Documents
router.post('/CO_TAX_UPDATE_SPRX', (req, res, next) => {
  console.log('External Tax - Update Tax Documents: ' + req.rawBody);
  //console.log('Parsed XML: ' + JSON.stringify(req.body));
  res.status(200).send(req.rawBody);
});

//External Tax - Force Update Tax Documents
router.post('/CO_TAX_FORCE_UPDATE_SPRX', (req, res, next) => {
  console.log('External Tax - Force Update Tax Documents: ' + req.rawBody);
  //console.log('Parsed XML: ' + JSON.stringify(req.body));
  res.status(200).send(req.rawBody);
});

//External Tax - Get Changed Jurisdiction Code List
router.post('/CO_TAX_JURI_GET_CHANGE_LIST_SPRX', (req, res, next) => {
  console.log('External Tax - Get Changed Jurisdiction Code List: ' + req.rawBody);
  //console.log('Parsed XML: ' + JSON.stringify(req.body));
  res.status(200).send(req.rawBody);
});

//External Tax - Mass Redefine Tax Jurisdiction Code
router.post('/CO_TAX_JURI_REDEFINE_SPRX', (req, res, next) => {
  console.log('External Tax - Mass Redefine Tax Jurisdiction Code: ' + req.rawBody);
  //console.log('Parsed XML: ' + JSON.stringify(req.body));
  res.status(200).send(req.rawBody);
});

module.exports = router;
