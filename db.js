const mongoose = require('mongoose');
const express = require('express');

// Mongodb Port

const mongoURL = 'mongodb://localhost:27017/unknown';  // Replace 'unknown' with your actual database name

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