var dwolla = require ('dwolla-v2');

//require ('dotenv').config ();
require ('dotenv').config ({path: __dirname + '/.env'});

// Show contents of .env file
console.log ('RHG-ENV DWOLLA_APP_KEY --- ', process.env.DWOLLA_APP_KEY);
console.log ('RHG-ENV DWOLLA_APP_SECRET --- ', process.env.DWOLLA_APP_SECRET);

var merchant = new dwolla.Client ({
  key: process.env.DWOLLA_APP_KEY,
  secret: process.env.DWOLLA_APP_SECRET,
  environment: 'sandbox', // defaults to 'production'
});

console.log ('Merchant ', merchant);

var customer1 = new dwolla.Client ({
  key: process.env.DWOLLA_APP_KEY,
  secret: process.env.DWOLLA_APP_SECRET,
  environment: 'sandbox',
});

console.log ('customer1 ', customer1);
