const express = require('express');
const router = express.Router();
const dbAuth = require('../models/dbScript');


//GET Requests
router.get('/', async (req, res) => {
    try {
        let dbInfo = await dbAuth.find();

        const authKey = req.param('key');
        const discordId = req.param('discordid');
        const arrayOfIds = [];
        dbInfo.forEach(element => {
            if(element._id == authKey){
                arrayOfIds.push(element._id);
            }
        });
         if(arrayOfIds.length != 0){
            res.send(`User with Auth key of ${arrayOfIds[0]} exists!`);
         }
         else res.send(`NO USER with auth key of ${authKey} exists in database!`);
         
         //const updatePost = await dbAuth.updateOne({discordId: "", auth: "aa829053-92ec-4a72-9826-dfaa36e3bc76"}, { $set:{discordId: authKey, auth: discordId}});
    } catch (err) {
        res.json({message:err});
    }
})

//Post Something
// router.post('/', async (req, res) => {
//     const authKey = req.param('key');
//     const discordId = req.param('discordid');
//     const post = new dbAuth({
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password,
//         roles: req.body.roles,
//         discordId: req.body.discordId
//     })
//     try {
//         const savedPost = await post.save();
//         res.json(savedPost);
//     } catch (err) {
//         res.json({message:err})
//     }

// })

// router.patch('/:apiId', async (req, res) =>{
//     try {
//         const updatePost = await Post.updateOne({_id: req.params.apiId}, { $set:{username:req.body.username}});
//          res.json(updatePost);
//     } catch (err) {
//         res.json({message:err})
//     }
// })

//Post Something
// router.post('/', async (req, res) => {
//     const post = new Post({
//         id: req.body.id,
//         username: req.body.username,
//         password: req.body.password,
//         roles: req.body.roles,
//         auth: req.body.auth

//     })
//     try {
//         const savedPost = await post.save();
//         res.json(savedPost);
//     } catch (err) {
//         res.json({message:err})
//     }

// })


// //GET Requests by specific properties
// router.get('/:apiId', async (req, res) =>{
//     try {
//         const post = await Post.findById(req.params.apiId);
//          res.json(post);
//     } catch (err) {
//         res.json({message:err})
//     }
// })

// //GET Requests
// router.delete('/:apiId', async (req, res) =>{
//     try {
//         const removedPost = await Post.remove({_id: req.params.apiId});
//          res.json(removedPost);
//     } catch (err) {
//         res.json({message:err})
//     }
// })



module.exports = router;