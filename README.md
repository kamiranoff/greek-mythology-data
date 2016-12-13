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

```
var GreekMyth = require('greek-mythology-data');
var all = new GreekMyth.Greeks(GreekMyth.all);
var gods = new GreekMyth.Greeks(GreekMyth.gods);
var demigods = new GreekMyth.Greeks(GreekMyth.demigods);
var generalDeities = new GreekMyth.Greeks(GreekMyth.generalDeities);
var giants = new GreekMyth.Greeks(GreekMyth.giants);
var kings = new GreekMyth.Greeks(GreekMyth.kings);
var primordialDeities = new GreekMyth.Greeks(GreekMyth.primordialDeities);
var seaDeities = new GreekMyth.Greeks(GreekMyth.seaDeities);
var titans = new GreekMyth.Greeks(GreekMyth.titans);
  
console.log(gods.sortByName());
```

### Available methods
```
.sortByName(); // Return the list reordered by name;
```
<br>
<br>
<br>  
___  
  
  
> "What we do in life echoes in eternity."

> Maximus Decimus Meridius, Commander of the Armies of the North, General of the Felix Legions, loyal servant to the true emperor, Marcus Aurelius.

