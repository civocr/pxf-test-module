// models/Staff.js
const mongoose = require('mongoose');
var plugins = require('pxf-user-module').plugins
var { passwordHashingPlugin } = plugins

const staffSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    yearLevel: { type: Number, default: 1 }
    // Other staff-specific fields
}, { timestamps: true });

staffSchema.plugin(passwordHashingPlugin, { saltWorkFactor: 10 });
const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;