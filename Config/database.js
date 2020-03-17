const mongoose = require('mongoose');
let db;
function configureDatabase() {
    mongoose.connect('mongodb+srv://test:1Admin@cluster0-gu9de.azure.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
    db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('connection opened');
    });
}

module.exports = {
    configureDatabase: configureDatabase,
};