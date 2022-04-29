const express = require('express')
const router = express.Router()

const Nutruition = require('../../models/nutruition')


router.get("/", (req, res) => {
    Nutruition.find({}, (err, foundNutruition) => {
      if (!err) {
        res.status(200).json(foundNutruition)
      } else {
        res.status(400).json(err)
      }
    })
  })

router.post('/', async (req, res) => {
    try {
        const { body } = req
        const createdNutrution = await Nutruition.create(body)
        res.status(200).json({ message: "Item Created!", createdNutrution })
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
})

// Update
router.put('/:id', (req, res) => {
    const { body } = req
  
    Nutruition.findByIdAndUpdate(req.params.id, body,{new: true}, (err, updatedNutrution) => {
      if (!err) {
        res.status(200).json(updatedNutrution)
      } else {
        res.status(400).json(err)
      }
    })
})

//delete

router.delete('/:id', (req, res) => {
    Nutruition.findByIdAndDelete(req.params.id, (err)=>{
        if (!err) {
            res.status(200).json({message: "Deleted that task"})
          } else {
            res.status(400).json(err)
          }
    })
})


//show
router.get('/:id', (req, res) => {
    Nutruition.findById(req.params.id, (err, foundNutruition)=>{
        if (!err) {
            res.status(200).json(foundNutruition)
          } else {
            res.status(400).json(err)
          }
    })
})



module.exports = router;