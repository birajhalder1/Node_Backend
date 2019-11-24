const express = require('express');
const route = express.Router();
const {
    getBootcamps,
    postBootcamps,
    getBootcampById,
    putBootcampById,
    deleteBootcampById
} = require('../controller/bootcamps');

route
    .route('/')
    .get(getBootcamps)
    .post(postBootcamps)

route
    .route('/:id')
    .get(getBootcampById)
    .put(putBootcampById)
    .delete(deleteBootcampById)

module.exports = route;
