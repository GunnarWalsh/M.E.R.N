const Joke = require('../models/joke');

module.exports = {
    allJokes: (req, res) => {
        Joke.find({})
            .then((allJokes) => {
                res.json(allJokes)
            })
            .catch((err) => {
                res.status(500).json({message: 'Something went wrong', error: err})
            })
    },
    createJoke: (req,res) => {
        Joke.create(req.body)
            .then((newJoke) => {
                res.json(newJoke)
            })
            .catch((err) => {
                res.status(500).json({message: 'Something went wrong', error: err})
            })
    },
    showSingleJoke: (req, res) => {
        Joke.findOne({ _id: req.params.id })
        .then(oneJoke => {
            console.log(oneJoke)
            res.json(oneJoke)
        })
        .catch((err) => {
            res.status(500).json({message: 'Something went wrong', error: err})
        });
    },
    updateJoke: (req, res) => {
        Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedJoke => {
            res.json(updatedJoke)
        })
        .catch((err) => {
            res.status(500).json({message: 'Something went wrong', error: err})
        });
    },
    deleteJoke: (req, res) => {
        Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            res.status(500).json({message: 'Something went wrong', error: err})
        });
    }
}
