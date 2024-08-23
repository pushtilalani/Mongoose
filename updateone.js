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

//4. Update
const updateDoc = async (i) => {
    const result = await person.updateOne({ _id: i }, { $set: { age: 31 } })
    console.log(result)
}
updateDoc("66c484535dbe6a7a2f6fda4a")