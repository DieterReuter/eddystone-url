
# eddystone-url

Details see: https://github.com/don/node-eddystone-beacon


## Run the code locally on your Mac
```
npm install
npm start
```


## Use a Docker images (not tested)
WIP: this doesn't work right now, we have to mount the right dev

### Build the Docker image
```
docker build -t eddystone .
```

### Run as Docker container
```
docker run --rm -it eddystone
```
```
docker run -d eddystone
```