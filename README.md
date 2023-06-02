# practice learning languages 👨‍💻

![img](https://cdn-images-1.medium.com/max/640/1*w5tbbtnh250NT92-bM1VsQ.jpeg)
<hr>

## what i learned from -
> ## <momentum_clone>
### login feature

#### Element: **classList** property
The Element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list.

#### value : 
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

#### Storage

#### Instance methods :
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


 

___
the source from MDN(https://developer.mozilla.org/en-US/)
