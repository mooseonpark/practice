# practice learning languages 👨‍💻

![img](https://cdn-images-1.medium.com/max/640/1*w5tbbtnh250NT92-bM1VsQ.jpeg)
<hr>

## what i learned from -
> ## momentum_clone
## < login feature >

### #Element: **classList** property
The Element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list.

### value : 
- add() <br>
The add() method of the DOMTokenList interface adds the given tokens to the list, omitting any that are already present.

- remove() <br>
The remove() method of the DOMTokenList interface removes the specified tokens from the list.

- contain() <br>
The replace() method of the DOMTokenList interface replaces an existing token with a new token. If the first token doesn't exist, replace() returns false immediately, without adding the new token to the token list.
<br>

```javascript
replace(oldToken, newToken)
```

- toggle() <br>
The toggle() method of the DOMTokenList interface removes an existing token from the list and returns false. If the token doesn't exist it's added and the function returns true.
toggle(token)
<br>

```javascript
toggle(token, force) force for only be removed or added
```

<hr>

### #Storage

### Instance methods :
- getItem() <br>
The getItem() method of the Storage interface, when passed a key name, will return that key's value, or null if the key does not exist, in the given Storage object.

```javascript
getItem(keyName)
```

- setItem() <br>
The setItem() method of the Storage interface, when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists.

```javascript
setItem(keyName, keyValue)
```

- removeItem() <br>
The removeItem() method of the Storage interface, when passed a key name, will remove that key from the given Storage object if it exists. The Storage interface of the Web Storage API provides access to a particular domain's session or local storage.

```javascript
removeItem(keyName)
```

- clear() <br>
The clear() method of the Storage interface clears all keys stored in a given Storage object.

- key() <br>
The key() method of the Storage interface, when passed a number n, returns the name of the nth key in a given Storage object. The order of keys is user-agent defined, so you should not rely on it.

```javascript
key(index)
```
 
<hr>

## < clock feature >

### #date

- new Date() <br>

![image](https://github.com/mooseonpark/practice/assets/66548209/7ca78c16-3514-447c-9453-15c84246281a) <br>
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date

- setInterval() <br>
The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. <br>
This method returns an **interval ID** which uniquely identifies the interval, so you can remove it later by calling clearInterval(). <br>

```javascript
setInterval(code)
setInterval(code, delay)
```
<br>

- padStart() <br>
The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.

```javascript
padStart(targetLength)
padStart(targetLength, padString)

``` 
- padEnd() <br>
The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.

```javascript
padEnd(targetLength)
padEnd(targetLength, padString)
```
<hr>

## < quotes & background feature >

### #Math

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math <br>

- Math.random() <br>
The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user. <br>

- Math.round() <br>
The Math.round() static method returns the value of a number rounded to the nearest integer. <br>

- Math.ceil() <br>
The Math.ceil() static method always rounds up and returns the smaller integer greater than or equal to a given number. <br>   

- Math.floor() <br>
The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number. <br>

### #Document: createElement() method

- In an HTML document, the document.createElement() method creates the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn't recognized. <br>

```javascript
createElement(tagName)
createElement(tagName, options)
```

### #Document: prepend() method

- The Document.prepend() method fs a set of Node objects or string objects before the first child of the document. String objects are inserted as equivalent Text nodes. <br>


```javascript
prepend(param1)
prepend(param1, param2)
prepend(param1, param2, /* … ,*/ paramN)
```
<hr>

## < todo list feature >

- appendchild() <br>
The appendChild() method of the Node interface adds a node to the end of the list of children of a specified parent node. <br>

- removeChild() <br>
The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node. <br>

- insertBefore() <br>
The insertBefore() method of the Node interface inserts a node before a reference node as a child of a specified parent node. <br>

```javascript
insertBefore(newNode, referenceNode)
```
- console.dir() <br>
The method console.dir() displays an interactive list of the properties of the specified JavaScript object. The output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects. <br>

### #storage

The Storage interface of the Web Storage API provides access to a particular domain's session or local storage. It allows, for example, the addition, modification, or deletion of stored data items. <br>

- Storage.key() <br>
When passed a number n, this method will return the name of the nth key in the storage. <br>

- Storage.getItem() <br>
When passed a key name, will return that key's value. <br>

- Storage.setItem() <br>
When passed a key name and value, will add that key to the storage, or update that key's value if it already exists. <br>

- Storage.removeItem() <br>
When passed a key name, will remove that key from the storage. <br>

- Storage.clear() <br>
When invoked, will empty all keys out of the storage. <br>

### #event
https://developer.mozilla.org/en-US/docs/Web/API/Event

- The Event interface represents an event which takes place in the DOM. <br>
- An event can be triggered by the user action e.g. clicking the mouse button or tapping keyboard, or generated by APIs to represent the progress of an asynchronous task. It can also be triggered programmatically, such as by calling the HTMLElement.click() method of an element, or by defining the event, then sending it to a specified target using EventTarget.dispatchEvent(). <br>
- There are many types of events, some of which use other interfaces based on the main Event interface. Event itself contains the properties and methods which are common to all events. <br>
- Many DOM elements can be set up to accept (or "listen" for) these events, and execute code in response to process (or "handle") them. Event-handlers are usually connected (or "attached") to various HTML elements (such as <button>, <div>, <span>, etc.) using EventTarget.addEventListener(), and this generally replaces using the old HTML event handler attributes. Further, when properly added, such handlers can also be disconnected if needed using removeEventListener(). <br>

### Instance properties

- event.target  <br>
The read-only target property of the Event interface is a reference to the object onto which the event was dispatched.  <br>
It is different from *Event.currentTarget* when the event handler is called during the bubbling or capturing phase of the event. <br>

- event.currentTarget <br>
The currentTarget read-only property of the Event interface identifies the current target for the event, as the event traverses the DOM.  <br>
It always refers to the element to which the event handler has been attached, as opposed to Event.target, which identifies the element on which the event occurred and which may be its descendant. <br>

### Instance methods

- event.preventDefault()  <br>
The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be. <br>
The event continues to propagate as usual, unless one of its event listeners calls stopPropagation() or stopImmediatePropagation(), either of which terminates propagation at once. <br>

### #JSON
  
- The JSON namespace object contains static methods for parsing values from and converting values to JavaScript Object Notation (JSON). <br>

### methods

  - JSON.stringify() <br>
The JSON.stringify() static method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified. <br>
  
  - JSON.parse() <br>
  The JSON.parse() static method parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned. <br>

```javascript
JSON.stringify(value) // The value to convert to a JSON string.
JSON.stringify(value, replacer)
JSON.stringify(value, replacer, space)
  
JSON.parse(text) // The string to parse as JSON. See the JSON object for a description of JSON syntax.
JSON.parse(text, reviver)
  ```
<hr>
 
## Geolocation API
 
The Geolocation API allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information. <br>
WebExtensions that wish to use the Geolocation object must add the "geolocation" permission to their manifest. The user's operating system will prompt the user to allow location access the first time it is requested. <br>

- Geolocation.getCurrentPosition(): Retrieves the device's current location.
- Geolocation.watchPosition(): Registers a handler function that will be called automatically each time the position of the device changes, returning the updated location.
 
___
the source from MDN(https://developer.mozilla.org/en-US/)
