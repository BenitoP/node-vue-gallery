import express from 'express'
import upload from '../service/amazon-helper'
import Image from '../models/image'

const router = express.Router()
const uploader = upload.single('image')

router.post('/gallery-image', async (req, res) => {
    let image = await Image.findById(req.body.photo)
    if (image) {
        return res.status(200).send(image)
    }

    return res.status(404).send({})
})

router.post('/upload', (req, res) => {
    uploader(req, res, async function (err) {
        if (err) {
            return res.status(400).send({errors: [{title: 'Image Upload Error', detail: err.message}] })
        }

        let image = new Image({
            image: req.file.location
        })
    
        image = await image.save()
        return res.json(image);
    })
})

router.get('/gallery', async (req, res) => {
    let images = await Image.find({})
    if (images) {
        return res.status(200).send(images)
    }
    
    return res.status(200).send({})
})

export default router