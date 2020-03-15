# MMM-googlemap
a module for the magic mirror to draw a google map between two locations

## install
clone the repository into modules of your magic mirror instance

## Configuration

### Example configuration

 ```
 {
    module: 'googlemap',
    position: 'position',
    config = {
        apikey: 'your_api_key',
        origin: 'Traugutta 13, Tarnów',
        destination: 'Krokus Parking, Aleja Generała Tadeusza Bora-Komorowskiego, Kraków',
        style: 'border:0;-webkit-filter: grayscale(100%);filter: grayscale(100%);',
        width: '1920',
        height: '900',
        interval: 5000,
        days: ['mon', 'tue', 'thu'],
        startHour: 6,
        startMinute: 30,
        endHour: 7,
        endMinute: 30,
        hideOffHours: true
    };
},
```

### Parameter description

| Parameter name    | Description                       | Type  | Required  | Example |
| -------------     |:---------------------------------:|:-------:|:--------: |:-------:|
| baseurl           | Url for querying google maps API  |`string` | `false`     |'https://www.google.com/maps/embed/v1/directions?key=' |
| apikey            | API Key for google maps API       |`string` | `true`      |          |
| origin            | Origin source for the map         |`string` | `true`      | `'Traugutta 13, Tarnów'` |
| destination       | Destination target for the map    |`string` | `true`      | `'Krokus Parking, Aleja Generała Tadeusza Bora-Komorowskiego, Kraków'` |
| width             | Width of the iFrame element       |`number` | `false`     | `1920`      |
| height            | Height of the iFrame element      |`number` | `false`     | `900`       |
| interval          | Interval time for refreshing [ms] |`number` |`false`       | `5000`      |
| days              | Array of days for when the interval should be applied | `string[]`    | `false`  | `['mon', 'tue', 'thu']` |
| startHour         | Start hour for the interval       |`number`   | `false`      | `6` |
| startMinute       | Start hour for the interval       |`number`   | `false`      | `30`|
| endHour           | Start hour for the interval       |`number`   | `false`      | `7` |
| endMinute         | Start hour for the interval       |`number`   | `false`      | `30`|
| hideOffHours      | Should the map be hidden when not in specified time interval  |`boolean`  | `false`    |   `true`  |
| style             | css Style applied to the iFrame   |`string`   | `false`   | `'border:0;-webkit-filter: grayscale(100%);filter: grayscale(100%);'` |

Interval works on applied days from `startHour:startMinute` to `endHour:endMinute`