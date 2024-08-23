

//1. Create Connection
const mg = require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/test").then(() => { console.log("success") }).catch((err) => { console.error(err) })

//2. Create Schema
const mySchema = new mg.Schema(
    {
        name: { type: String, required: true },
        Surname: String,
        age: Number,
        active: Boolean,
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
            name: "tests",
            Surname: "XYZw",
            age: 25,
            active: true
        })
        const result = await personData.save()      // for inserting single data
        console.log(result);
    }
    catch (error) {
        console.log("Error" + error);
    }
}
createDoc()

