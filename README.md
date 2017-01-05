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
import GreekMyth, { allCollection } from 'greek-mythology-data';
const all = new GreekMyth(allCollection);
const sortedFigures = all.sortBy('name');
console.log(all.list);
console.log(sortedFigures);
```

### API sample
```
  {
    "name":"Aphrodite",
    "greekName":"Ἀφροδίτη, Aphroditē",
    "romanName":"Venus",
    "category":"major olympians",
    "description":"Goddess of beauty, love, desire, and pleasure. Although married to Hephaestus she had many lovers, most notably Ares, Adonis, and Anchises. She was depicted as an extraordinarily beautiful woman, with poets praising the radiance of her smile in particular. Her symbols include roses and other flowers, the scallop shell, and the myrtle wreath. Her sacred animals include doves and sparrows. Her Roman counterpart is Venus.",
    "immortal":"immortal",
    "gender":"female",
    "images": {
      "thumbnail":"",
      "regular":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project.jpg/640px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project.jpg"
    },
    "relatives": {
      "father":"",
      "mother":"",
      "spouses": [],
      "lovers": [],
      "children": []
    },
    "books":[],
    "events":[]
  }
```

### Available Collections
```
  allCollection // all of them
```
nb: separated collections are available in ./incomplete_data (but you might find some typos and books and events have not been added yet);


### Available methods
```
.list // return the collection.
.sortBy([String]); // Return the collection reordered by the chosen attribute;
```

##mongodb example import
```
mongoimport --db mythology --collection allfigures --jsonArray data/all.json
 
mongoimport --db mythology --collection books --jsonArray data/books.json

mongoimport --db mythology --collection quotes --jsonArray data/quotes.json 
```
 
   
<br>
<br>
<br>


  
  
> "What we do in life echoes in eternity."

> Maximus Decimus Meridius, Commander of the Armies of the North, General of the Felix Legions, loyal servant to the true emperor, Marcus Aurelius.

