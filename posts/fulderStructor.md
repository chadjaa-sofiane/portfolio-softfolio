---
title: "react folder structor"
excerpt: "how I structor my files in react app"
date: "2021-24-12"
coverImage: "/images/posts/react-folder.png"
---

<div style="background-color: black; font-size: 20px; color: white; padding: 1em; text-align: justify;"> 
<span style="font-weight: bold">Note: </span>Please note that this blog was written some time ago and may not necessarily represent my current perspectives and practices. As developers, we continuously evolve, learn, and adapt to new techniques and approaches. While the fundamental principles of good folder structure and organization remain valuable, I encourage you to explore the latest best practices and find what works best for your projects. Happy coding!. </div>

## The Importance of a Good Folder Structure

When you're new to React, it's easy to overlook folder structure and throw everything into the src root or a generic components folder. However, as your projects grow, organizing your code becomes crucial.

As your app expands, you'll soon realize that controlling your components becomes challenging, and maintenance becomes a headache. To build better applications, you need to discover efficient patterns and folder structures. At a certain point, code comprehension becomes more challenging without a clear structure.

In my experience, the key to finding the best folder structure is understanding the types of files you're dealing with.

This revised version maintains the essence of your message while presenting it in a more organized and concise manner.

## Organizing the UI Structure

Visualizing your website's structure is like envisioning a multi-story house. Each "floor" in this analogy represents a page within your website. On each floor, you have "rooms" which act as containers for specific content, and within these rooms, you have "furniture" that equates to individual components.

### Pages - The Blueprint

Think of pages as the blueprint for your house. Each page represents a distinct section of your application. For example, you might have a "Home" page, a "Services" page, an "About" page, and so on. These pages dictate the overall structure of your app and define the flow of user interaction.

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

### Containers - The Rooms

Containers are like rooms within your house. They are responsible for rendering and managing groups of related components. Within a container, you can fetch data, manage state, and control the interactions between components. For instance, you might have a container that handles the display and functionality of a gallery of images.

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

### Components - The Furnishings

Components are akin to the furnishings within a room. They are the building blocks of your application's user interface. Each component should serve a specific purpose and be reusable. For example, you could have individual components for buttons, input fields, headers, or even complex elements like image sliders. Keeping components modular and reusable enhances maintainability.

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

As your application grows, maintaining and expanding a monolithic image field like the one above becomes increasingly challenging. Adding new features or making modifications to it can be cumbersome.

This is precisely why it's essential to structure your components in separate files. By breaking down your user interface into distinct, reusable components, you make your codebase more manageable and adaptable. Each component serves a specific purpose, simplifying maintenance and promoting code reusability.

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

now our ImageField will look something like this.

```js
return (
    {images.map(({ id, ...data }) => (
        <ImageField ...data key={id} addToFavorite={addToFavorite} />
    ))}
)
```

This approach offers significant advantages. First and foremost, it simplifies our code. We no longer need to manage a complex, monolithic image field within the ImagesField container. Instead, we break it down into smaller, independent components like ImageField.

Each component now has a clear and well-defined responsibility, making our code more modular and easier to maintain. Additionally, this approach enhances code reusability, allowing us to use the ImageField component in various parts of our application without any hassle.

### fulder structor

When it comes to structuring our project folders, I have two different approaches:

Separate Folders by File Type: In this approach, we organize our files into separate folders based on their type, such as components, containers, and pages.

![sepreat fulders](/images/posts/separateFulders.PNG)

Merge Pages and Containers: Here, we merge the pages and containers, especially when the pages don't have a lot of complexity.

![sepreat fulders](/images/posts/fulders.PNG)

For a standard React application, I prefer the second approach, which keeps things simpler. However, in Next.js and Gatsby frameworks, due to the sensitive nature of the "pages" folder, I adapt the first approach.

### lib fulder

The "lib" folder often sparks different interpretations. For me, it serves a specific purpose. It acts as a repository for various functions, hooks, and higher-order components (HOCs) that I frequently use across projects. This way, I can easily reuse them without re-creating the wheel each time.

![sepreat fulders](/images/posts/lib.PNG)

### stores

Regardless of the state management solution you employ (say, Redux), it's a good practice to establish a "stores" folder. This folder is designed to centralize all your different stores and states.
For example, in a Redux-based application, your "store" folder might look like this:

actions: Contains Redux action creators.

reducers: Holds your Redux reducers.

sagas (optional): If you're using Redux Saga, this is where your sagas reside.

This structure streamlines state management and maintains a clear separation of concerns in your project.
