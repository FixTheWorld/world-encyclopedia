# world-encyclopedia
world encyclopedia mobile page

## logs
#### 2017-07-04  
> 1.use redux dispatch  
> 2.add login loader  
> 3.add activeIndex of bottom menu  
> 4.change icon of settings
#### 2017-07-06  
> 1.add characterList and characterDetail page  
> 2.change value of actionType to fix the bug that redux data can be repeated  
> 3.add history path to header  
#### 2017-07-11
> 1.add page change effect  
> 2.add loading effect  
> 3.add favicon  
#### 2017-07-13
> 1.add setting page  
> 2.fixed the bug of repeated css  
> 3.add cssnano to compress css  
> 4.write a function to check whether a property of object is exist  
> 5.use
```javascript 
browserHistory.push({pathname:"/test",state:{item:object}})
```
to pass params，and this.props.location.state.item to receive it  ·
> 6.optimize page loading;if we get some data before,we can use it directly from this.props,but data can be not updated sometimes 

