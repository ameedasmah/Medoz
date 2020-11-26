const Good = require('../model/Good')

module.exports = {
    addGood: (req, res) => {
        console.log(req.body)
        const good = new Good({
            good: req.body.good,
            price: req.body.price
        })
        good.save()
            .then(data => {
                res.status(201).json(data)
            }).catch(err => {
                res.status(404).json({ status: false })
            })
    },
    getGoods: (req, res) => {
        Good.find()
            .then(data => {
                console.log("getdataa", data);
                res.status(200).json(data);
            }).catch(err => {
                console.log(err);
                res.status(404).json({ status: false })
            })
    },
    deleteGood: (req, res) => {
        console.log('ktodelete',req.body);
        Good.findOneAndRemove({ "_id": req.body._id })
            .then(data => {
                console.log(data)
                console.log('deleted')
                res.status(201).json({ success: true })
            })
            .catch(err => {
                console.log(err)
                res.status(404).json({ success: false })
            })
    }
}

