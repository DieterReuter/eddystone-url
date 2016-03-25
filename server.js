// Advertise an Eddystone-URL Beacon
'use strict';

var eddystoneBeacon = require('eddystone-beacon');

eddystoneBeacon.advertiseUrl('https://www.google.com', { name: 'Eddystone Beacon' }, { txPowerLevel: -25 });
