const _ = require('lodash');
const str = 'aertyuiop[]asdfghjkl;zxcvbnm,.1234567890/';
module.exports = len => {
    let pass = '';
    let tmp = '';
    for (let i=0; i<len; i++){
        tmp = str[_.random(0,str.length-1)];
        pass = pass + (Math.random()<0.5 ? tmp : tmp.toUpperCase());
    }
    return pass;
};
