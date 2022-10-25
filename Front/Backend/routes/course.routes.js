const express = require('express');
const app= express();
let CourseSchema = require('../model/course.model')  //node model path here

const courseExpressRoute = express.Router()

courseExpressRoute.route('/course').get((req,res)=>{
     CourseSchema.find((error,data)=>{
          if (error) {
              return next(error)
          }else{
              res.json(data)
          }
      })
});

courseExpressRoute.route('/course/:id').get ((req,res)=>{

     CourseSchema.findById(req.params.id,(error,data)=>{
          if (error) {
              return next(error)
          } else {
              res.json(data)
          }
         }) 
      })

courseExpressRoute.route('/add-course').post((req,res,next)=>{
     CourseSchema.create(req.body,(error, data) =>{
          if (error) {
              return next(error)
          } else {
              res.json(data)
          }
      })
      })

courseExpressRoute.route('/update-course/:id').put((req,res)=>{
          CourseSchema.findByIdAndUpdate(req.params.id,{
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
       

courseExpressRoute.route('/del-course/:id').delete((req,res)=>{
     CourseSchema.findByIdAndRemove(req.params.id,(error,data)=>{
     if (error) {
          return next(error)
     } else {
          res.status(200).json({
               msg: data
          })
     }
     }) 
})

module.exports  = courseExpressRoute;