---
title : "react hooks useObserver"
excerpt : "I have build a react hooks to observe divs inside the screeen."
date : "5 nov 2021"
coverImage : "/images/posts/hooks.png"
---


### what is react hooks

classes in react used to be the only choice when it became to handle state, everything change when react 16.8 came and introduce hooks, hooks allow you to use state and other react features like manage component live cycle inside functional components.

react also give the ability to have your customized hooks.
that by mixing the main hooks you have or by including browser API to the recipe.

### useOserver
the purpose of this hook is to observe divs inside the screen of the user whether they appear or not, in order to build this hook I have to use a javascript browser 
API calls intersection Observer, this API used to observe the appearance of the elements and their position inside the dom relative to the containing root you specify to it, by default it will take the window, read more about this API [here](https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API).

### what is the leverage of this hook?
for example, in the right-bottom corner you can see this arrow, the only thing it does do is take you back to the top of the page, without this hook and intersection observer API in general I probably would make it with scroll-dom event and go crazy firing hundreds of events, that obviously not efficient and not professional.


```js
document.addEventListener("scrollnt) =>{
    // will make the back-top arrow apear when the horizontal-scroll reach 600 or bigger
    if(event.scrollY > 600){
        makeTheArrowEmerge();
    }
})

```

without talking a lot let's look at how I have built it.

first I have decalred the function and put a refrence to it and a active state to tell as whether the div has observed or not.

```js
import { useRef, useState } from "react"

const useObserver = (cb , options) => {
    const ref = useRef(null);
    const [active,setActive] = useState(false);

    // here we will put our logic for observing divs

    return [ref,active]
}

```

the ref propriety it similair to catch your divs in pure js with methods like getElementById or querySelector.
here in react we are prefer using useRef for this because it make the code mroe cleaner.

then we return an array of two element, the ref and the active state. the reason for that is to give the user the fredom to naming these two when using this hook, we saw the samething when using useState.

next we will start using intersection observer api.


```js

   const observer  = new IntersectionObserver((entries, observe) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setActive(true);
        callBack();
        return;
      }
      setActive(false);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }
}

```

first, we start by declaring a new intersection observer, as you can see, it takes two parameters, the first param is a callback and the second is the options.

the callback has two parameters, the first one is an array of the observer divs, in our case we will take just the first element for this array, for some reason, this API returns an array rather than just one element even if you pass one element to your observer.

the second one is a set of methods that can affect your observer, like making a disconnect to stop the observer's action.

The options object that is passed into the IntersectionObserver () constructor controls the circumstances under which the observer callback function is invoked. It has the following fields:

```js
// example 
options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}

```
1. the root:
  to tell the observer which element should depend on it when trying to observe the divs

2. the root margin:
 like the margin in CSS can take one or two or three variables, This set of values ​​is used to enlarge or reduce each side of the frame delimiting the root element before evaluating the intersections. By default, all values ​​are set to zero, just make sure to put "px", 0 rather than "0px" will not work here.

3. threshold: it is a percentage to specific how much from the screen should appear to consider our observer div has observed.


finally we will call our observer that by passing the ref we have decalre in the top of the hook

```js

if (ref.current) {
      observer.observe(ref.current);
}

```

just we make sure that we have an observer elemnt and that by checking if the ref has a element inside it. passing undefind will cause our app to stop and give as errors.

the final result : 


```js
import { useRef, useState } from "react"

const useObserver = (cb , options) => {
    const ref = useRef(null);
    const [active,setActive] = useState(false);
    useEffect(() => {
      const observer  = new IntersectionObserver((entries, observe) => {
        const [entry] = entries;
      if (entry.isIntersecting) {
        setActive(true);
        callBack();
        return;
      }
      setActive(false);
    }, options);

       if (ref.current) {
        observer.observe(ref.current);
      }
    }, [])
    return [ref,active]
}

```

you could notice that we wrapped our logic inside a useEffectHook. that to make sure that we decalred one observer function, our observer will fire when the component will did mount.

### how to consume our hook
let's take a look at the usage of this hook inside our components .

```js

import useObserver from "@lib/hooks/useObserver";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const BackToTop = () => {
  const [observerRef, isDisappear] = useObserver();
  const backTotop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="backToTop__observerDiv" ref={observerRef} />
      {isDisapear && (
        <div className="backToTop__iconField" onClick={backTotop}>
          <KeyboardArrowUpIcon fontSize="large" />
        </div>
      )}
    </>
  );
};

export default BackToTop;

```

here we use our previous example of going back to the top.

as you can see we declare our hook on the top of the component and give it no parameters, so everything will be in default, we take a ref and the boolean attribute that will tell us whether the element appears or not, finally we pass the ref to the element. what we are doing here is observing a fixed div inside the user screen, this div has the opacity of zero and it will be in the same place whatEver happened inside our app. depend on it we will make our arrow appear and make us back to the top when we click on it.

that's it, now we can use this hook where ever we want. for example, this hook helps to make transitions and animation. or maybe you could get which part of your app the users enter less.

that is all that I have, I hope you have enjoyed reading.

##### thank you for reading.

<!-- ![this is your sester image here](/images/posts/hooks.png) -->