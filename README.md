# greek-mythology-data

Collections of greek mythological figures.

# ⚠️ Work in Progress ⚠️

This is an attempt at making an easy to use api about greek mythology. It is very far from being complete yet.

So far you only have the names and the category ( as type ) of the mythological figures.

I have to find a way to add descriptions, relations to others, etc...

If you want to open issues about what should be added, (data, methods, etc...), please do so in github.

Please contribute :)  
Feedback is appreaciated. :)


## Intallation

```
npm i greek-mythology-data --save
```

## Usage

You can make a new instance of GreekMyth and pass it the collection you want  
or simply import one of the collection if you just need the data.


```
import GreekMyth, { godsCollection } from 'greek-mythology-data';
const gods = new GreekMyth(godsCollection);
const sortedGods = gods.sortBy('name');
console.log(gods.list);
console.log(sortedGods);
```

### Available Collections
```
  allCollection, // all of them
  demigodsCollection,
  godsCollection,
  generalDeitiesCollection,
  giantsCollection,
  kingsCollection,
  nymphsCollection,
  primordialDeitiesCollection,
  seaDeitiesCollection,
  titansCollection,
```

### Available methods
```
.list // return the collection.
.sortBy([String]); // Return the collection reordered by the chosen attribute;
```

##mongodb example import
```
 mongoimport --db mythology --collection majorolympians --jsonArray data/major-olympians.json
```
 
   
<br>
<br>
<br>


  
  
> "What we do in life echoes in eternity."

> Maximus Decimus Meridius, Commander of the Armies of the North, General of the Felix Legions, loyal servant to the true emperor, Marcus Aurelius.

