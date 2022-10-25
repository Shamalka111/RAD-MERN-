const express= require('express');
const app = express();
const NoteExpressRoute = express.Router();
let NoteSchema = require('../model/note.model');

NoteExpressRoute.route('/').get((req,res)=>{
     NoteSchema.find((error,data)=>{
        if (error) {
            return next(error)
        }else{
            res.json(data)
        }
    })
})


NoteExpressRoute.route('/:id').get((req,res)=>{
     NoteSchema.findById(req.params.id,(error,data)=>{
     if (error) {
         return next(error)
     } else {
         res.json(data)
     }
    }) 
 })


 NoteExpressRoute.route('/add-note').post((req,res,next)=>{
     
    NoteSchema.create(req.body,(error, data) =>{
    if (error) {
        return next(error)
    } else {
        res.json(data)
        console.log(req.body.title)
    }
})
})


NoteExpressRoute.route('/del-note/:id').delete((req,res)=>{
     NoteSchema.findByIdAndRemove(req.params.id,(error,data)=>{
     if (error) {
         return next(error)
     } else {
        res.status(200).json({
            msg: data
        })
     }
    }) 
 })


 
 NoteExpressRoute.route('/update-note/:id').put((req,res)=>{
     NoteSchema.findByIdAndUpdate(req.params.id,{
        $set: req.body
    },(error,data)=>{
     if (error) {
         return next(error)
     } else {
         res.json(data);
         console.log('Updated Successfully!')
     }
    }) 
 })
 

module.exports = NoteExpressRoute;