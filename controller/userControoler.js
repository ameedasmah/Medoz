const User = require('../model/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');



module.exports = {
    signUp: async (req, res) => {

        try {
            console.log('req.body', req.body);
            const hashedPw = await bcrypt.hash(req.body.password, saltRounds);
            const user = new User({
                userName: req.body.userName,
                Email: req.body.Email,
                password: hashedPw
            })
            await user.save()
            console.log('aftersave', user)
            const token = await jwt.sign({ _id: user._id }, 'security',)
            res.status(201).json({ token, user })
        }
        catch {
            res.status(404).josn({ status: false })
        }
    },
    signin: async (req, res) => {
        console.log('req.body', req.body)
        try {
            const user = await User.findOne({Email: req.body.Email});
            console.log(user)
            const match = await bcrypt.compare(req.body.password, user.password);
            console.log('comparematchedpass', match);
            if (match) {
                const token = await jwt.sign({ _id: user._id }, 'security')
                console.log(token)
                res.status(201).json({ token, id: user._id })
            }
        }
catch {
                res.status(404).json({ status: false })
            }

        }
    }
