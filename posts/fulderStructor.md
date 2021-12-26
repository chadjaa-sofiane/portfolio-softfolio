---
title : "react fulder structor"
excerpt : "how I structor my files in react app"
date : "24 dec 2021"
coverImage : "/images/posts/hooks.png"
---

## why you need a googd fulder structor
like any one who just start learning react for the first time, they don't care much about fulder structor or where they should put theier files, just put everthing inside the src root, or maybe just build a compoenents fulder to hold random components.

but when you want to build an entire app, you will realise that you won't abble to controlle your compoennts as the time run, and you will find it hard to maintance or add another with the time.

I think that the better way to reach better applicaion, is to find the better patterns and fulder-structor, understanding the code will not  be metter is some point.

for me, the key of finding the best fulder structor, is understanding what kind of files we have.
 

## components type 
let's imagine our application like a house, each layout of your house represent a page, each layout from our house will contain rooms, these will be our containers, the place that have something to do in, and finaly each room will containe some sort of thing that help us do whathever we do inside or maybe make it nice at looking, thta what bring us to our compoenets.

home > layouts > rooms > .....
app > pages > containers > compoenets

### the pages 
it is the file that will hold our containers, or context providers if we need to have connect between our containers, you don't realy need to put a lot of things inside this file.

### the containers
the contaienrs it is the main file we have, it's the right place to put your state in or bring the data to, uswallly
the containers don't have any ui inside of it, it's the place that describe how the ui should look like.

### the components 
the compoentns or the representale components, these files contain the UI and the style, it's represent of what the users will see when he enter the page. that kind of files doesn't has data state of uswall, exept of the state that helping the style, but one of the commun use of them rather than holding the UI, is to do some kind of actions. 


