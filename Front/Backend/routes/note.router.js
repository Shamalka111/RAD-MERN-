const express = require('express');
const Note = require('../model/note.model')//node model path here

const router = express.Router()

router.get('/',async( req,res)=>{
     const notes = await Note.find({}).sort({createdAt : -1});
     res.status(200).json(notes);
});

router.get('/:id',async (req,res)=>{
     const  {id} = req.params
     if (!mongoose.Types.ObjectId.isValid(id)){
          return res.status(404).json({error:'No such workout'});
     }

     const note = await Note.findById(id);
     if (!note){
          return res.status(404).json({error : "No such workout"});
     }
     res.status(200).json(note);
});

router.post('/',async (req,res)=>{
     const {title, description ,category} = req.body;
     //add doc to db


     if(emptyFields.length> 0){
          return res.status(400).json({error:'please fill in all the fields'})
     }
     try{
          const note = await Note.create({title,description,category})
          res.status(200).json(note)

     }catch(error){
          res.status(400).json({error : error.message})
     }
});

router.patch('/:id',async (req,res)=>{
     const {id} = req.params;
     if (!mongoose.Types.ObjectId.isValid(id)){
          return res.status(404).json({error:'No such Note'});
     }
     const note = await Note.findOneAndUpdate({_id:id},{
          ...req.body
     })

     if(!note){
          return res.status(400).json({error : "No such Note"});
     }

     res.status(200).json(note);
})

router.delete('/:id',async(req,res)=>{
     const {id} = req.params;
     if (!mongoose.Types.ObjectId.isValid(id)){
          return res.status(404).json({error:'No such workout'});
     }

     const note = await Note.findOneAndDelete({_id:id})
     if(!note){
          return res.status(404).json({error : "No such Note"});
     }

     res.status(200).json(note);

})


module.exports  = router