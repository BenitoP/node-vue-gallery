import multer from 'multer'
import multerS3 from 'multer-s3'
import aws from 'aws-sdk'

aws.config.update({
    secretAccessKey: process.env.myapp_secretAccessKey,
    accessKeyId: process.env.myapp_accessKeyId,
    region: process.env.myapp_region
})

const s3 = new aws.S3()

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.myapp_bucketname,
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname})
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        }
    })
})

export default upload
