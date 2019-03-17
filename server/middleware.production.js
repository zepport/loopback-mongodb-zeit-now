const whitelist = [
  'http://www.findaroome.co.za',
  'https://findaroome.herokuapp.com',
  'https://www.findaroome.com',
];
module.exports = {
  "initial": {
    "cors": {
      "params": {
        "origin": function (origin, callback) {
          console.log(origin);
           if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
          } else {
            callback(new Error('Not allowed by CORS production'));
          }
        }
      }
    }
  }
};
