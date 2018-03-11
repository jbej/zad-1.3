var OSinfo = require('../modules/OSInfo');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    //the .read () method is to read what the user has given at the input
    var input = process.stdin.read();

    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/lang': 
                process.stdout.write('All languages:' + process.evn.lang + '\n');
                break;
            case '/node':
                process.stdout.write('Node version:' + process.versions.node + '\n');
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }   
    }
});
