const path = require('path');
const express = require('express');
const postController = require('../controllers/post');
const router = express.Router();


router.post('/create', postController.postCreate);
router.post('/edit', postController.postEditPost);
router.post('/all', postController.getAllPost);

router.post('/delete/:id', postController.getDelete);



module.exports = router;