---
title: Inject ssh agent in Dockerfile
thumbnail: https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
author: Claudiu Popa
publishedAt: 2024-02-18
tags:
  - "docker"
  - "linux"
  - "jenkins"
---

Let's imagine you have to build a docker image for a project and the project it is using a private package from your company
that is protected by ssh access. How would approach this challenge? 

Well, there are two ways of doing this and we will explore them in this article. 

## First approach

We can for example to build the image having all the project files in it. This way you'll not have to worry about installing
all the packages before running the docker container. In order to do this, you need a way to inject your current ssh agent that has access to your company's repositories into your Dockerfile where you'll, for example have something like this: 

```php
RUN composer install --no-scripts --no-interaction
```

Luckily for us in the new versions of docker starting with Docker 18.09 and higher, we are able to use the <mark>--ssh</mark>  flag 
