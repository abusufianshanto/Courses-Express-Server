const express = require('express')
const database = require("./database.js")

const app = express()
const port = 3000

app.get('/get_all_cities', (req, res) => {

    var response_string = ""

    database.all('SELECT * FROM Cities', (err, rows) => {

        for(const row of rows){
            row_readable = `${row.ZIP}: ${row.CityName}`
            
            if(row.ZIP == 76313){
                response_string += "<b>" + row_readable + "</b><br/>"
            }else{
                response_string += row_readable + "<br/>"
            }
        }
        res.send(response_string)
    })
})

/*
 Task 1: Create a new route /get_all_courses that produces
 the following type of output: InfoSys with 90% attendence rate (Study Program: EC) in 83278, Traunstein

 Task 2: Highlight courses with an attendence rate < 50%
 with a red color (see CSS).
 */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})