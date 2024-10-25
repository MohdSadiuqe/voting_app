const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();

// Mongodb Port

// const mongoURL = process.env.mongoURL_LOCAL;  

const mongoURL =process.env.mongoURL

mongoose.connect(mongoURL, {

});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('MongoDB server connected successfully');
});

db.on('disconnected', () => {
    console.log('MongoDB server disconnected successfully');
});

// Pass the actual error message
db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

module.exports = db;