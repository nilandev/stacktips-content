---
id: 359
title: How to Set up MongoDB within a Docker Container
slug: how-to-set-up-mongodb-within-a-docker-container
excerpt: A step-by-step tutorial that covers how to set up MongoDB within a Docker container effortlessly and expose the container port on your host machine.
difficulty: beginner
publishedDate: "2023-07-20T22:03:14.000Z"
updatedDate: "2025-09-16T23:05:37.904Z"
videoLink: VXurxAIh6BM
githubLink: null
featured: false
thumbnail: null
topics: 
  - docker
tags:
  - mongodb-docker-container
  - docker-run-mongo-image
  - mongodb-docker-compose
  - docker-pull-mongo
course: null
displayOrder: 0
seo: 
  metaTitle: "How to Set Up MongoDB in a Docker Container"
  metaDescription: "A step-by-step guide to pulling the MongoDB image, running it in a Docker container, exposing the port, and starting or stopping it for local development."
  metaKeywords: null
---

In this tutorial, we'll show you how to set up MongoDB in a Docker container. By containerizing MongoDB, you can quickly deploy and use MongoDB effortlessly for your local development.

Here is the step-by-step guide to setting up MongoDB within a Docker container:

### Install Docker

First, make sure you have the Docker installed on your machine. If it is not installed, you can download the Docker Desktop from the official Docker website. Visit the website [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/) and download the package appropriate for your operating system.

### Pull MongoDB Image

Now, let us pull the official MongoDB docker image from the Docker Hub. For that, open your terminal and run the following command:

```bash
$ docker pull mongo
```

### Run MongoDB Container

Now, run the following command to start a MongoDB in a container,

```bash
docker run
    -d
    --name mongodb
    -p 27017:27017
    -e MONGO_INITDB_ROOT_USERNAME=YOUR_USERNAME
    -e MONGO_INITDB_ROOT_PASSWORD=YOUR_PASSWORD
    mongo
```

Options:

-   The `-d` option is used to run the container in the detached mode, meaning the container will run in the background and won't block your terminal.

-   The `--name` options allow you to provide a name for your MongoDB container. I have use `mongodb` here but you can use anything you really want.

-   The `-p` option is used to map the container’s port into the host machine port. The port 27017 on the left-hand side of the colon (`:`) represents the port of the host machine. And the right-hand side port is the port of MongoDB. The default MongoDB port is 27017 .

-   The default MongoDB user name and password can be set using the environment variable `MONGO_INITDB_ROOT_USERNAME` and `MONGO_INITDB_ROOT_PASSWORD`. The environment variables are provided with `-e` option.

This command will start a Docker container named "MongoDB" and map the MongoDB default port 27017 from the container to the same port on your host machine.

### Verify Running Mongo Container

You can check if the container is running by executing the command:

```bash
docker ps
```

It should display a list of running containers, and you should see the "mongodb" container in the list.

### Stop Mongo Container

To stop a MongoDB Docker container, you can use the following command:

```bash
docker stop mongodb
```

To Start MongoDB again

```bash
docker start moongodb
```
