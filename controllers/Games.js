// const { Schema } = require('mongoose')
const Games = require('../models/Games')
const cloudinary  = require('../multer/cloudinary')
const router = require('../routes/api/games')
const upload = require("../multer/multer");
const User = require("../models/Games");
//Find Games API
const findAllGames = (req, res) =>{
    Games.find({}, (err, foundGames) => {
        if(!err){
            res.status(200).json(foundGames)
        }else{
            res.status(400).json(err)
        }
    })
}
//CREATE GAME TO SHOW Only Clearance
const findClearanceGames = (req, res) =>{
    Games.find({clearance:"true"}, (err, foundGames) => {
        if(!err){
            res.status(200).json(foundGames)
        }else{
            res.status(400).json(err)
        }
    })
}





//Create games›
const createGames = async (req, res) =>{
    try{
        const {body} = req
        const createdGames = await Games.create(body)
        res.status(200).json({message: 'Created Game', createdGames})
    }catch(error){
        res.status(400).json({ err: error.message})
    }
}




///delete Game 

const deleteGames = (req, res) =>{
    
   Games.findByIdAndDelete(req.params.id, (err) => {
    if(!err){
        res.status(200).json({message: "Deleted Games"})
        res.redirect('/')
    }else{
        res.status(400).json(err)
    }
   })
}




///Find By ID

const findgameById = (req, res)=> {
    Games.findById(req.params.id, (err, games) =>{
        if(!err){
            res.status(200).json({message: "showing the Game", games})
            res.render('/:id',{games })
        }else{
            res.status(400).json(err)
        }
    })
}


const updateGames = (req,res) =>{
    const {body} = req
    Games.findByIdAndUpdate(req.params.id, body,{new:true}, (err, updatedGame) =>{
        if(!err) {
            res.status(200).json(updatedGame)
        }else{
            res.status(400).json(err)
        }
    })
}

const createImage= async()=>{
    try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
    
        // Create new user
        let user = new User({
          name: req.body.name,
          avatar: result.secure_url,
          cloudinary_id: result.public_id,
        });
        // Save user
        await user.save();
        res.json({user:"image created succesfully"});
      } catch (err) {
        console.log(err);
      }

}




module.exports = {
    findgameById,
    deleteGames,
    createGames,
    findAllGames,
    updateGames,
    findClearanceGames,
    createImage
}