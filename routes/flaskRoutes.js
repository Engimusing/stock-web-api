const router = require("express").Router();
const status = require('../data/models/flaskModel')



router.post("/status", (req, res) => {
    const data = req.body;
    if(data.symbol_dict != null) {
        status.add(data).then(saved => {
            res.status(201).json(`Successfully created a new dataset at id ${saved}!`)
        }).catch(err => {
            console.log(err)
            res.status(401).json(err)
        })
    } else {
        console.log(data)
    }
})

router.get('/status', (req, res) => {
    status.getAll().then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(404).json("No Statuses found.")
    })
})

router.get('/status/:time', (req, res) => {    
    const { time } = req.params
    
    status.getByTimestamp(time).then(data => {
        if(!data) {
            res.status(404).json("Status with that timestamp not found.")
        }
        
        res.status(200).json(data)
    }).catch(err => {
        res.status(404).json("Status with that timestamp not found.")
    })
})

module.exports = router;