const fs = require('fs') 
const add = require('./utils.js')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.0.1')

// ADD command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },    
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    description: 'List your notes',
    handler(){
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Notes title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()

/*
    Below this line is pre practice
*/

// console.log(yargs.argv)

// const greenMsg = chalk.blue.inverse.bold('Succues !')
// console.log(greenMsg)

// console.log(process.argv[2])

// fs.writeFileSync('notes.txt','KJ, focus you dummy! ')

// var i=0
// for(i=0;i<10;i++){
//     fs.appendFileSync('notes.txt','KJ, focus you dummy! ')
// }

// var sum=add(4,5)
// console.log(sum)

// console.log(chalk.bgGreen(validator.isEmail('kartikmnc@gmail.com')))
// console.log(chalk.blue(validator.isURL('google...com')))



// const error = chalk.red.inverse.bold('Error')
// console.log(error)


// fs.appendFileSync('notes.txt','KJ, focus you dummy! ')

// it's perfectly fine if you do like below
// you just have to require the string fs that's important !

// const lul = require('fs') 

// lul.writeFileSync('notes.txt','KJ, focus you dummy!')