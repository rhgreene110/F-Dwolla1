var dwolla = require ('dwolla-v2');

//require ('dotenv').config ();
require ('dotenv').config ({path: __dirname + '/.env'});

// RHG - Show contents of .env file to confirm success
console.log ('RHG-ENV DWOLLA_APP_KEY --- ', process.env.DWOLLA_APP_KEY);
console.log ('RHG-ENV DWOLLA_APP_SECRET --- ', process.env.DWOLLA_APP_SECRET);

var merchant1 = new dwolla.Client ({
  key: process.env.DWOLLA_APP_KEY,
  secret: process.env.DWOLLA_APP_SECRET,
  environment: 'sandbox', // defaults to 'production'
});

console.log ('RHG -> Merchant1 ', merchant1);

var customer1 = new dwolla.Client ({
  key: process.env.DWOLLA_APP_KEY,
  secret: process.env.DWOLLA_APP_SECRET,
  environment: 'sandbox',
});

console.log ('RHG -> customer1 ', customer1);
