# Hands-on #01 - Web Application
Run:
```shell
docker build -t flaskapp . 
docker run -p 5000:80 --volume=${pwd}:/app flaskapp
```
And access [localhost:5000](http://localhost:5000) and [localhost:5000/template](http://localhost:5000/template).

# References
* [Get Docker](https://docs.docker.com/get-docker/)
* [How to Build and Deploy a Flask Application Using Docker on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-build-and-deploy-a-flask-application-using-docker-on-ubuntu-20-04)
* [Your first form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)