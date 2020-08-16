var https = require('https');
var fs = require('fs');

var dataAll = [];
function requestUrlAndPersistToFile(url, filename) {
    console.log(filename + ' requesting ' + url);

    https.get(url, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            const recieved = JSON.parse(data);
            dataAll = dataAll.concat(recieved.results);
            console.log(filename + ' recieved ' + recieved.results.length + ' records');
            console.log(filename + ' dataAll.length ' + dataAll.length);
            if (recieved.next) {
                requestUrlAndPersistToFile(recieved.next, filename);
            } else {
                persistData(filename);
            }
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}
function persistData(filename) {
    const data = prepareData();
    console.log(filename + ' writing file');
    fs.writeFile('src/app/data/' + filename + '.json', JSON.stringify(data), function (err) {
        if (err) return console.log(err);
        console.log(filename + ' wrote file');
        dataAll = [];
    });
}

function prepareData() {
    return dataAll.map(launch => {
        return {
            name: launch.name,
            net: launch.net,
            launch_service_provider__name: launch.launch_service_provider ? launch.launch_service_provider.name : '',
            launch_service_provider__type: launch.launch_service_provider && launch.launch_service_provider.type ? launch.launch_service_provider.type : '',
            rocket__configuration__full_name: launch.rocket && launch.rocket.configuration ? launch.rocket.configuration.full_name : '',
            rocket__configuration__family: launch.rocket && launch.rocket.configuration ? launch.rocket.configuration.family : '',
        }
    });
}
var path = 'launch';
var fileName = 'launches';

requestUrlAndPersistToFile('https://lldev.thespacedevs.com/2.0.0/' + path + '/?format=json&limit=100', fileName);