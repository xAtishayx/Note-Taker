const chalk = require('chalk')
const yargs = require('yargs')
const note = require('./note-taker.js')



// console.log("hello world")
// console.log(chalk.blue.inverse('Hello world!'));

//add remove list read functionality
yargs.command(
    {
        command: 'add',
        description: 'Add a note',
        builder: {
            title: {
                description: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body: {
                description: 'Note msg',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function (argv) {
            // console.log("Title: "+argv.title)
            // console.log("___ "+argv.body)

            note.addnotes(argv.title, argv.body)
        }
    }
)
yargs.command(
    {
        command: 'remove',
        description: 'remove a note',
        builder: {
            title: {
                description: 'Remove notes',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function (argv) {
            note.removenotes(argv.title)
        }
    }
)
yargs.command(
    {
        command: 'list',
        description: 'list a note',
        handler: function (argv) {
            console.log(chalk.blue("Notes:-"))
            note.list(argv.title)
        }
    }
)
yargs.command(
    {
        command: 'read',
        description: 'Read a note',
        builder: {
            title: {
                description: 'Read notes',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function (argv) {
            note.read(argv.title)
        }
    }
)
//console.log(yargs.argv)
yargs.parse()