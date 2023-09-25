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
  //console.log('Parsed XML: ' + JSON.stringify(req.body));

  console.log('Raw BP XML: ' + req.rawBody);
  res.status(200).send(req.rawBody);
});

//External Tax - Determine Tax Jurisdiction Codes
router.post('/CO_TAX_JURI_DETER_SPRX', (req, res, next) => {
  //console.log('External Tax - Determine Tax Jurisdiction Codes: ' + req.rawBody);
  //console.log('Parsed XML: ' + JSON.stringify(req.body));
  //res.status(200).send(req.rawBody);
  //res.set('content-type', 'application/soap+xml; charset=utf-8');
  //res.status(200).send('<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/"><soap-env:Header/><soap-env:Body><n0:TAX_JURISDICTION_RECEIVE xmlns:n0="http://sap.com/xi/FotETaxUS" xmlns:prx="urn:sap.com:proxy:X0E:/1SAI/TAS504F73D3B7261E3994BE:793"><LOCATION_HEADER><RETCODE>0</RETCODE><ERRCODE/><ERRMSG/></LOCATION_HEADER><LOCATION_RESULTS><COUNTRY>US</COUNTRY><STATE>GA</STATE><COUNTY/><CITY>Atlanta</CITY><ZIPCODE>30315-1402</ZIPCODE><TXJCD_L1>00</TXJCD_L1><TXJCD_L2>00</TXJCD_L2><TXJCD_L3>00</TXJCD_L3><TXJCD_L4>00</TXJCD_L4><TXJCD>012345678901234</TXJCD><OUTOF_CITY/><REF_INFO/></LOCATION_RESULTS></n0:TAX_JURISDICTION_RECEIVE></soap-env:Body></soap-env:Envelope>');

  res.set('content-type', 'text/xml; charset=utf-8');
  res.send('<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/"><soap-env:Header/><soap-env:Body><n0:TAX_JURISDICTION_RECEIVE xmlns:n0="http://sap.com/xi/FotETaxUS" xmlns:prx="urn:sap.com:proxy:X0E:/1SAI/TAS504F73D3B7261E3994BE:793"><LOCATION_HEADER><RETCODE>0</RETCODE><ERRCODE/><ERRMSG/></LOCATION_HEADER><LOCATION_RESULTS><COUNTRY>US</COUNTRY><STATE>GA</STATE><COUNTY/><CITY>XPTO</CITY><ZIPCODE>30315-1402</ZIPCODE><TXJCD_L1>00</TXJCD_L1><TXJCD_L2>00</TXJCD_L2><TXJCD_L3>00</TXJCD_L3><TXJCD_L4>00</TXJCD_L4><TXJCD>XPTOSUHAS1</TXJCD><OUTOF_CITY/><REF_INFO/></LOCATION_RESULTS></n0:TAX_JURISDICTION_RECEIVE></soap-env:Body></soap-env:Envelope>');
});

//External Tax - Calculate Taxes
router.post('/CO_TAX_CALCULATION_SPRX', (req, res, next) => {
  //console.log('Parsed XML: ' + JSON.stringify(req.body));
  //res.status(200).send(req.rawBody);
 
  console.log('External Tax - Calculate Taxes: ' + req.rawBody);
  res.set('content-type', 'text/xml; charset=utf-8');
  res.send('<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/"><soap-env:Header/><soap-env:Body><n0:TAX_CALCULATION_RECEIVE xmlns:n0="http://sap.com/xi/FotETaxUS" xmlns:prx="urn:sap.com:proxy:X0E:/1SAI/TASDF77D1920401C19CDDE8:793"><CALCULATION_RESULT_HEADER><API_VERSION>1</API_VERSION><SYST_VERSION/><DB_VERSION/><RETCODE>0</RETCODE><ERROR_LINE/><ERRORCODE/><ERRMSG/></CALCULATION_RESULT_HEADER><CALCULATION_RESULT_ITEM><ITEM_NO>000001</ITEM_NO><TXJCD_IND>A</TXJCD_IND><TXJCD_DES>Jurisdiction Code Description</TXJCD_DES><TAX_DATE>20230920</TAX_DATE><TAXPCOV/><TAXAMOV>100</TAXAMOV><EXMATFLAG/><EXCUSFLG/><EXT_EXCERTIF/><EXT_EXREASON/><NR_JUR_LEVELS/></CALCULATION_RESULT_ITEM><RESULT_ITEM_JUR><ITEM_NO>000001</ITEM_NO><TXJLV>1</TXJLV><TXJLVDESC>Jurisdiction Area Description</TXJLVDESC><TXJCD>XPTOSUHAS1</TXJCD><TAX_STATE>GA</TAX_STATE><SOURCING>1</SOURCING><TAXPCT/><TAXAMT>100</TAXAMT><TAXBAS>100000</TAXBAS><EXAMT/><EXCODE/></RESULT_ITEM_JUR></n0:TAX_CALCULATION_RECEIVE></soap-env:Body></soap-env:Envelope>');
});

//External Tax - Update Tax Documents
router.post('/CO_TAX_UPDATE_SPRX', (req, res, next) => {
  //console.log('Parsed XML: ' + JSON.stringify(req.body));
  
  console.log('External Tax - Update Tax Documents: ' + req.rawBody);
  res.status(200).send(req.rawBody);
});

//External Tax - Force Update Tax Documents
router.post('/CO_TAX_FORCE_UPDATE_SPRX', (req, res, next) => {
  //console.log('Parsed XML: ' + JSON.stringify(req.body));
  
  console.log('External Tax - Force Update Tax Documents: ' + req.rawBody);
  res.status(200).send(req.rawBody);
});

//External Tax - Get Changed Jurisdiction Code List
router.post('/CO_TAX_JURI_GET_CHANGE_LIST_SPRX', (req, res, next) => {
  //console.log('Parsed XML: ' + JSON.stringify(req.body));
  
  console.log('External Tax - Get Changed Jurisdiction Code List: ' + req.rawBody);
  res.status(200).send(req.rawBody);
});

//External Tax - Mass Redefine Tax Jurisdiction Code
router.post('/CO_TAX_JURI_REDEFINE_SPRX', (req, res, next) => {
  //console.log('Parsed XML: ' + JSON.stringify(req.body));
  
  console.log('External Tax - Mass Redefine Tax Jurisdiction Code: ' + req.rawBody);
  res.status(200).send(req.rawBody);
});

module.exports = router;
