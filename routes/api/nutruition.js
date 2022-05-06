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


router.route('/:id').delete(deleteNutruition)
//  Update
router.put('/:id', updateNutruition)


//show
router.get('/:id', showNutruition )



module.exports = router;