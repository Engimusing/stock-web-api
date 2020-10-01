const router = require("express").Router();
const status = require('../data/models/flaskModel')



router.post("/status", (req, res) => {
    const data = req.body;

    if(data.delta != null) {
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

module.exports = router;