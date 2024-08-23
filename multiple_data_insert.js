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
        const personData = new person({
            name: "test1",
            Surname: "test",
            age: 30,
            active: true
        })
        const personData1 = new person({
            name: "h1",
            Surname: "hi",
            age: 21,
            active: true
        })
        const result = await person.insertMany([personData, personData1])      // for inserting multiple data
        console.log(result)
    }
    catch (err) {
        console.log("problem")
    }
}
createDoc()
