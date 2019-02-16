# next-is-empty-object
> Check if is emptyObject for next

## install:
```bash
npm install -S afeiship/next-is-empty-object --registry=https://registry.npm.taobao.org
```

## usage:
```js
import 'next-is-empty-object';
const obj = {};

nx.isEmptyObject(obj);
// true;
```

## other solution:
```js
function isEmptyObject(obj){
  return Object.keys(obj).length === 0
}
```

## resouces:
- https://github.com/gummesson/is-empty-object
