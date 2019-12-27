const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

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
       notes.addNote(argv.title, argv.body)
    }
});

yargs.command({
    command: 'remove',
    describe:'Remove a note',
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
});

yargs.command({
    command: 'list',
    describe:'List all note',
    handler: function () {
        notes.listNotes()
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


