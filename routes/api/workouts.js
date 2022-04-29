const express = require('express')
const router = express.Router()

const Workouts = require('../../models/workouts')


router.get("/", (req, res) => {
    Workouts.find({}, (err, foundWorkouts) => {
      if (!err) {
        res.status(200).json(foundWorkouts)
      } else {
        res.status(400).json(err)
      }
    })
  })

router.post('/', async (req, res) => {
    try {
        const { body } = req
        const createdWorkouts = await Workouts.create(body)
        res.status(200).json({ message: "Item Created!", createdWorkouts })
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
})

// Update
router.put('/:id', (req, res) => {
    const { body } = req
  
    Workouts.findByIdAndUpdate(req.params.id, body,{new: true}, (err, updatedWorkouts) => {
      if (!err) {
        res.status(200).json(updatedWorkouts)
      } else {
        res.status(400).json(err)
      }
    })
})

//delete

router.delete('/:id', (req, res) => {
    Workouts.findByIdAndDelete(req.params.id, (err)=>{
        if (!err) {
            res.status(200).json({message: "Deleted that task"})
          } else {
            res.status(400).json(err)
          }
    })
})



//show
router.get('/:id', (req, res) => {
    Workouts.findById(req.params.id, (err, foundWorkouts)=>{
        if (!err) {
            res.status(200).json(foundWorkouts)
          } else {
            res.status(400).json(err)
          }
    })
})



module.exports = router;
