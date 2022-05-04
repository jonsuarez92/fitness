const express = require('express')
const router = express.Router()
const {
     getWorkOut,
    setWorkOut,
    deleteWorkOut,
    updateWorkOut,
    showWorkOut} 
    = require('../../controllers/api/workouts')

const Workouts = require('../../models/workouts')

router.route('/').get(getWorkOut).post(setWorkOut)
// router.get("/", getNutruition) 
// router.post('/', setNutruition )

router.route('/:id').delete(deleteWorkOut)
//  Update
router.put('/:id', updateWorkOut)
// delete
// router.delete('/:id', deleteNutruition)

//show
router.get('/:id', showWorkOut )



module.exports = router;