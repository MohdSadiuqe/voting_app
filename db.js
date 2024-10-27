require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

const app = express();

// const mongoURL = process.env.MONGO_URL_LOCAL;
const mongoURL =process.env.mongoURL

mongoose.connect(mongoURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('MongoDB server connected successfully');
});

db.on('disconnected', () => {
    console.log('MongoDB server disconnected');
});

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});