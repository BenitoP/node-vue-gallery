import mongoose from 'mongoose'

const Image = mongoose.model('Image', new mongoose.Schema({
    image: {
        type: String,
        required: true,
    }
}))

export default Image