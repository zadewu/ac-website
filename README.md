# ac-website

## Installation

### Nodejs
Version require: > 16.10
Please refer to [NodeJS](https://nodejs.org/en) for suitable version with your OS

Verify node installed
```bash
node -v
```

### Angular CLI
This need NodeJS installed, because we use NPM to install Angular CLI
```bash
npm install -g @angular/cli
```

### Run application
Install need modules
```bash
npm ci
```

## Data generate
```
[
  '{{repeat(30, 30)}}',
  {
    id: '{{index(1)}}',
    brand: function(tags) {
      var brands = ['Gree', 'Hitachi', 'Panasonic', 'Toshiba', 'Samsung', 'LG'];
      return brands[tags.integer(0,brands.length-1)];
    },
    name: '{{lorem(4, "words")}}',
    rating: function(tags) {
      var tmpRating = tags.integer(3,5);
      var randomRating = tags.integer(1,9);
      if (tmpRating !== 5 && randomRating % 3 === 0) {
        return tmpRating + 0.5;
      }
      return tmpRating;
    },
    type: function(tags) {
      var types = ['split', 'window', 'cassette'];
      return types[tags.integer(0, types.length-1)];
    },
    price: '{{floating(500, 1500, 2, "$0,0.00")}}',
    picture: function(tags){
      return 'assets/images/' + this.brand +'/ac' + tags.integer(1,3) + '.jpg';
    }
  }
]
```