const mongoose = require('mongoose');
const { stringify } = require('querystring');

main().catch(err => console.log(err));

async function main() {
        await mongoose.connect('mongodb://localhost:27017/CollegeWebsite', () => { console.log('Mongoose Connected') });
}
const Schema = new mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        pass: { type: String, required: true },
        repass: { type: String, required: true },
});
const Register = mongoose.model('Collection', Schema);
module.exports = Register;