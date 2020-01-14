import * as express from "express";

const router: express.Router = express.Router();
const Movie = require("../schema/movies");

router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        res.status(201).json(await new Movie({
            name: req.body.name,
            createdAt: req.body.createdAt,
            tags: req.body.tags,
        }).save());
    } catch (err) {
        res.status(400).json({message: err.message})
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (movie == null) {
            return res.status(404).json({message: 'Cant find movie'})
        }
        await movie.remove();
        res.json({message: 'Movie deleted'}).status(200);
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
});

export default router;