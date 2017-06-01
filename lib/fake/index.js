const db = require('./db');
const _ = require('lodash');

module.exports = (opts = {}) => {
    const result = [];
    const count = opts.count || 10;
    const type = opts.type || 'user';

    if (type !== 'user') return;

    for (let i = 0; i < count; i++) {
        const user = {};
        user.name = db.users.names[_.random(0, db.users.names.length - 1)];
        user.surname = db.users.surnames[_.random(0, db.users.surnames.length - 1)];
        user.age = _.random(0, 100);
        user.avatar = db.images({height: 100, width: 100, text: user.name[0] + user.surname[0]});
        user.password = db.password(_.random(5,10));
        result.push(user);
    }
    return result;
};
