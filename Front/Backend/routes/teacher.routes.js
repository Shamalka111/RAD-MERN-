const express= require('express');
const app = express();
const teacherExpressRoute = express.Router();
let TeacherSchema = require('../model/teachermodel');

teacherExpressRoute.route('/teacher').get((req,res)=>{
    TeacherSchema.find((error,data)=>{
        if (error) {
            return next(error)
        }else{
            res.json(data)
        }
    })
})


teacherExpressRoute.route('/teacher/:id').get((req,res)=>{
    TeacherSchema.findById(req.params.id,(error,data)=>{
     if (error) {
         return next(error)
     } else {
         res.json(data)
     }
    }) 
 })


 teacherExpressRoute.route('/add-teacher').post((req,res,next)=>{
    TeacherSchema.create(req.body,(error, data) =>{
    if (error) {
        return next(error)
    } else {
        res.json(data)
    }
})
})


teacherExpressRoute.route('/del-teacher/:id').delete((req,res)=>{
    TeacherSchema.findByIdAndRemove(req.params.id,(error,data)=>{
     if (error) {
         return next(error)
     } else {
        res.status(200).json({
            msg: data
        })
     }
    }) 
 })


 
 teacherExpressRoute.route('/update-teacher/:id').put((req,res)=>{
    TeacherSchema.findByIdAndUpdate(req.params.id,{
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
 

module.exports = teacherExpressRoute;
