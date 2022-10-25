<<<<<<< HEAD
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

module.exports  = courseExpressRoute
=======
const express = require('express');
const Course = require('../model/course.model')  //node model path here
const mongoose = require('mongoose');

const router = express.Router()

router.get('/',async( req,res)=>{
     const course = await Course.find({}).sort({createdAt : -1});
     res.status(200).json(course);
});

router.get('/:id',async (req,res)=>{
     const  {id} = req.params
     if (!mongoose.Types.ObjectId.isValid(id)){
          return res.status(404).json({error:'No such course'});
     }

     const course = await Course.findById(id);
     if (!note){
          return res.status(404).json({error : "No such course"});
     }
     res.status(200).json(course);
});

router.post('/',async (req,res)=>{
     const {courseName,noOfCredits,duration,conductedBy} = req.body;


     if(emptyFields.length> 0){
          return res.status(400).json({error:'please fill in all the fields'})
     }
     try{
          const course = await Course.create({courseName,noOfCredits,duration,conductedBy})
          res.status(200).json(course)

     }catch(error){
          res.status(400).json({error : error.message})
     }
});

router.patch('/:id',async (req,res)=>{
     const {id} = req.params;
     if (!mongoose.Types.ObjectId.isValid(id)){
          return res.status(404).json({error:'No such course'});
     }
     const course = await Course.findOneAndUpdate({_id:id},{
          ...req.body
     })

     if(!course){
          return res.status(400).json({error : "No such course"});
     }

     res.status(200).json(course);
})

router.delete('/:id',async(req,res)=>{
     const {id} = req.params;
     if (!mongoose.Types.ObjectId.isValid(id)){
          return res.status(404).json({error:'No such course'});
     }

     const course = await Course.findOneAndDelete({_id:id})
     if(!course){
          return res.status(404).json({error : "No such course"});
     }

     res.status(200).json(course);

})


module.exports  = router
>>>>>>> d11562d82dae9ff14a3cd6fa7e839e639020c4ff
