const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

yargs.command({
    command: 'add',
    describe:'Add a note',
    builder:{
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        },
        title:{
            describe: 'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler: function (argv) {
        console.log('Title:' + argv.title,'\n'+'Body:' + argv.body)
    }
});

yargs.command({
    command: 'remove',
    describe:'Remove a note',
    handler: function () {
        console.log('Removing  a new note')
    }
});

yargs.command({
    command: 'list',
    describe:'List all note',
    handler: function () {
        console.log('Listing all notes')
    }
});

yargs.command({
    command: 'read',
    describe:'Read note',
    handler: function () {
        console.log('Reading notes')
    }
});

yargs.parse();


