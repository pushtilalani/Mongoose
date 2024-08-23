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

//4. delete
const deleteDoc = async (i) => {
    const result = await person.findByIdAndDelete({ _id: i })
    console.log(result)
}
deleteDoc("66c484535dbe6a7a2f6fda4a")
