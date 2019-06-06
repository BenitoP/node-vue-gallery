# A simple NodeJS backend with a VueJS frontend
This is a simple fullstack consisting of a backend built with NodeJS and a frontend built with VueJS.
Other requirements:
- MongoDb
- AWS account with a public accessible S3 Bucket

### Installation for frontend
```bash
$ cd ./frontend
$ npm install
$ npm run serve
```

### Installation for backend
```bash
$ cd ./backend
$ npm install
$ npm start
```
```bash
export myapp_db_connection=xxxx
export myapp_db_port=xxxx
export myapp_db_name=xxxx
export myapp_jwtPrivateKey=xxxx
export myapp_secretAccessKey=xxxx
export myapp_accessKeyId=xxxx
export myapp_region=xxxx
export myapp_bucketname=xxxx
```