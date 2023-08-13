var CryptoJS = require("crypto-js");

exports.run = (client,res,req,data) => {
  let a = client.webdb.get('religia',[]);
  a = CryptoJS.AES.decrypt(a, process.env['ENCRYPTION']).toString(CryptoJS.enc.Utf8);
  a = JSON.parse(a);
  a.push(req.body.rel);
  a = JSON.stringify(a);
  a = CryptoJS.AES.encrypt(a, process.env['ENCRYPTION']).toString();
  client.webdb.set('religia',a);
  data['send'] = 'religia';
  data['popup'] = 'zapisano zgłoszenie.'
  data["popup type"] = "text";
}