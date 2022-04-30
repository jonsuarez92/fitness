const express = require('express')
const router = express.Router()
const {
    getNutruition, 
    setNutruition, 
    updateNutruition, 
    deleteNutruition,
    showNutruition } 
    = require('../../controllers/api/nutruition')

const Nutruition = require('../../models/nutruition')

router.route('/').get(getNutruition).post(setNutruition)
// router.get("/", getNutruition) 
// router.post('/', setNutruition )

router.route('/:id').delete(deleteNutruition).put(updateNutruition)
//  Update
// router.put('/:id', updateNutruition)
// delete
// router.delete('/:id', deleteNutruition)

//show
router.get('/:id', showNutruition )



module.exports = router;