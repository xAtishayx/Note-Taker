const fs = require('fs')
const chalk = require('chalk')

const addnotes = (title, body) => {
    const notes = loadnotes()

    const dublicate = notes.find((notes) => {
        return title === notes.title
    })
    if (!dublicate) {
        notes.push({
            title: title,
            body: body
        })
        savenotes(notes)
    }
    else {
        console.log(chalk.inverse.red("Title already Taken"))
    }
}
const savenotes = (notes) => {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", notesJSON)
    console.log(chalk.green.inverse("Saved"))
}


const loadnotes = () => {
    try {
        const buffer = fs.readFileSync("notes.json")
        return JSON.parse(buffer.toString())
    } catch (e) {
        return []
    }
}

const removenotes = (title) => {
    const notes = loadnotes()
    const found = notes.filter((notes) => {
        return title === notes.title
    })
    const keepnotes = notes.filter((notes) => {
        return title !== notes.title
    })
    if (found.length > 0) {
        savenotes(keepnotes)
    }
    else {
        console.log(chalk.inverse.red("title not found"))
    }
}
const list = (title) => {
    const notes = loadnotes()
    notes.forEach((title) => {
        console.log(title.title)
    });
}
debugger

const read = (title) => {
    const notes = loadnotes()
    const found = notes.find((notes) => title === notes.title)
    if (found) {
        console.log(chalk.blue.bold("Title -" + found.title))
        console.log(chalk.inverse(found.body))
    }
    else {
        console.log(chalk.inverse.red("title not found"))
    }
}

module.exports =
    {
        addnotes: addnotes,
        removenotes: removenotes,
        list: list,
        read: read
    }