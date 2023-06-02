# practice learning languages 👨‍💻

![img](https://cdn-images-1.medium.com/max/640/1*w5tbbtnh250NT92-bM1VsQ.jpeg)
<hr>

## what i learned from -
> ## <momentum_clone>
### login feature

### Element: **classList** property
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

## Storage

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

#### Event.preventDefault()
- The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

<hr>

## clock feature

### date

- new Date()
<br>

![image](https://github.com/mooseonpark/practice/assets/66548209/7ca78c16-3514-447c-9453-15c84246281a)
<br>
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

## quotes & background feature

### Math

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
<br>
- Math.random() <br>
The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user. <br>

- Math.round() <br>
The Math.round() static method returns the value of a number rounded to the nearest integer. <br>

- Math.ceil() <br>
The Math.ceil() static method always rounds up and returns the smaller integer greater than or equal to a given number. <br>   

- Math.floor() <br>
The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number. <br>

### Document: createElement() method

In an HTML document, the document.createElement() method creates the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn't recognized. <br>

```javascript
createElement(tagName)
createElement(tagName, options)
```

### Document: prepend() method

The Document.prepend() method inserts a set of Node objects or string objects before the first child of the document. String objects are inserted as equivalent Text nodes. <br>


```javascript
prepend(param1)
prepend(param1, param2)
prepend(param1, param2, /* … ,*/ paramN)
```
<hr>

___
the source from MDN(https://developer.mozilla.org/en-US/)
