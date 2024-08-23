//1. Create Connection
const mg = require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/test").then(() => { console.log("success") }).catch((err) => { console.error(err) })

//2. Create Schema
const mySchema = new mg.Schema(
    {
        name: { type: String, required: true },
        Surname: String,
        age: Number,
        date: { type: Date, default: new Date() }
    }
)

//3. Create Model
const person = new mg.model("person", mySchema)
mg.pluralize(null)

//4. Insert Data
const createDoc = async () => {
    try {
        const personData = [{
            name: "test2",
            Surname: "test2",
            age: 31,
            active: true
        },
        {
            name: "h2",
            Surname: "hello",
            age: 23,
            active: true
        }]
        const result = await person.insertMany(personData)
        console.log(result)
    }
    catch (err) {
        console.log("problem")
    }
}
createDoc()
