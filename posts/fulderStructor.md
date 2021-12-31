---
title : "react fulder structor"
excerpt : "how I structor my files in react app"
date : "24 dec 2021"
coverImage : "/images/posts/react-folder.png"
---

## why you need a googd fulder structor
like any one who just start learning react for the first time, they don't care much about fulder structor or where they should put theier files, just put everthing inside the src root, or maybe just build a compoenents fulder to hold random components.

but when you want to build an entire app, you will realise that you won't abble to controlle your compoennts as the time run, and you will find it hard to maintance or add another with the time.

I think that the better way to reach better applicaion, is to find the better patterns and fulder-structor, understanding the code will not  be metter is some point.

for me, the key of finding the best fulder structor, is understanding what kind of files we have.
 

## UI structure
I like to think of my website like a house with multiple floors, each floor represent a page, each floor has rooms, wish will be our containers, and each room will contain furnitures or something else whish will be our components.


### the pages 
it is the file that will hold our containers, it represent of  the order of  our containers. instead of puting everthing inside the root app we have.

it will be something like this.
```js
const Home = () => {
  return (
    <>
      <Introduction />
      <Services />
      <MyTools />
      <AboutMe />
    </>
  );
};

export default Home;
```

it will make it easier to create a cominication between our containers using something like react-context.

### the containers
the containers is represent about rendering and controlle our components, this is the right place to fetch the data and put the state in, something like redux dispatches should handle inside this file. in order to make everthing clean and readable, and easy to test.

let's say we have a container to show our images.

```js

const imagesField = () => {
    const [images,setImages] = useState([]);
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        // consider this is an function to get images
        const images = getImages();
        setImages(images);
    }, [])

    // function to add an image to the favorite  
    const addToFavorite = (imageId) => {
        dispatch({ type : "ADD_TO_FAVORITE", payload : { imageId } });
    }

    return (
        // render our images here
    )
}

export default services;
```



### the components 
finally we have the components, or the presentational components, as you can imagine from the name, it's the compoentns represent on show data as ui to the user, they should be reasable and costumizing.

let's render our images from the previous example.

without the concept of componenents, our render process will be somthing like this.

```js

return (
    {images.map(({ id, src, title, desc, likes }) => (
        <div key={id} onClick={() => addToFavorite(id)} className="image__field" >
            <img  src={src} alt={title}  />
            <div className="image__about"> 
                <h1>{title}</h1>
                <span>{desc}</sapn> 
            </div>
            <div className="image__iconField">
                <span>{likes}</span>
                <HeartIcon />
            </div>
        </div>
    )) }
)

```

as you can see as much as this image field will take, as hard will be to maintance or to additional stuffs to it.


that is why sou should keep your compoentns in a sepreat files.

```js

 const ImageField = ({ id, src, title, desc, likes, addToFavorite }) => {
     return (
          <div onClick={() => addToFavorite(id)} className="image__field" >
            <img  src={src} alt={title}  />
            <div className="image__about"> 
                <h1>{title}</h1>
                <span>{desc}</sapn> 
            </div>
            <div className="image__iconField">
                <span>{likes}</span>
                <HeartIcon />
            </div>
        </div>
     )
 }

export default ImageField;

```

back to our ImagesField, now will be like this.

```js
return (
    {images.map(({ id, ...data }) => (
        <ImageField ...data key={id} addToFavorite={addToFavorite} />
    ))}
)
```

this is much better, we don't need to deal with a tour right now. the imageField will stay indepence from the ImagesField container.


### fulder structor 
I have two defrent way t structor the files.

the first is to make a fulder to hold each type of file we have.

![sepreat fulders](/images/posts/separateFulders.PNG)

the second is merge the pages and the containers, sense the page doesn't do to much.

![sepreat fulders](/images/posts/fulders.PNG)

for the regular react app I prefere to use the second one, but in next and gatsby frameworks I have to adapt the first approach sense the pages fulder in these frameworks is sensitive.


