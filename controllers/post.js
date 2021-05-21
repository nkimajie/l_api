const postModel = require('../models/post');


exports.postCreate = async (req, res, next) => {
    await postModel.create({ 
        title: req.body.title,
        content: req.body.content
    })
        .then(result => {
            res.json({message: 'post created', status: 200})
        })
        .catch(err => {
            console.log(err);
            
        })
};

exports.getAllPost = async (req, res, next) => {
     postModel.findAll()
        .then(result => {
            res.json({status: 200})
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        })
};

exports.postEditPost = (req, res, next) => {
    const id = req.body.id;
    const title = req.body.title;
    const content = req.body.title;
    postModel.findByPk(id)
        .then(Post => {
            Post.title = title;
            Post.content = content;
            return Post.save();
        })
        .then(result => {
            res.json({ message: 'post edited successfully', status: 200 });
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getDelete = (req, res, next) => {
    const id = req.params.id;
    postModel.findByPk(id)
        .then(Post => {
            return Post.destroy();
        })
        .then(result => {
            res.json({ message: 'post deleted', status: 200 });
        })
        .catch(err => {
            console.log(err);
        })
}

