const db = require('./db');
const _ = require('lodash');

module.exports = () => {
    const result = [];
    for(let i=0; i<6; i++){
        result.push({
            name: db.names[_.random(0,5)]
        });
    }
    console.log(result);
};
