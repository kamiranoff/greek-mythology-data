# greek-mythology-data

Collections of greek mythological figures.

## Intallation

```
npm i greek-mythology-data --save
```

## Usage

```
var GreekMyth = require('greek-mythology-data');
var all = new GreekMyth.Greeks(GreekMyth.all);
var demigods = new GreekMyth.Greeks(GreekMyth.demigods);
var generalDeities = new GreekMyth.Greeks(GreekMyth.generalDeities);
var giants = new GreekMyth.Greeks(GreekMyth.giants);
var kings = new GreekMyth.Greeks(GreekMyth.kings);
var primordialDeities = new GreekMyth.Greeks(GreekMyth.primordialDeities);
var seaDeities = new GreekMyth.Greeks(GreekMyth.seaDeities);
var titans = new GreekMyth.Greeks(GreekMyth.titans);
  
console.log(gods.sortByName();
```

### Available methods
```
.sortByName(); // Return the list reordered by name;
```

## Note
This is an attempt at making an easy to use api about greek mythology. It is very far from being complete yet. Please contribute :)
