//1. Create Connection
const mg = require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/test").then(() => { console.log("success") }).catch((err) => { console.error(err) })

//2. Create Schema
const mySchema = new mg.Schema(
    {
        _id:Number,
        name:String,
        age:Number,
        position:String,
        Salary:Number
    }
)

mg.pluralize(null)

//3. Create Model
const person = new mg.model("employee", mySchema)

//4. Insert Data
const createDoc = async () => {
    try {
        const personData = [{
            _id:1,
            name:"Eric",
            age:30,
            position:"FSD developer",
            Salary:60000
        },
        {
            _id:2,
            name:"Erica",
            age:35,
            position:"Intern",
            Salary:8000
        },
       {
            _id:3,
            name:"Ericul",
            age:40,
            position:"UI/UX dev",
            Salary:56000
       },
       {
            _id:4,
            name:"trecic",
            age:37,
            position:"Teamleader",
            Salary:85000
       },
       {
        _id: 5,
        name: "Eliza",
        age: 25,
        position: "Software Developer",
        Salary: 45000
       },
       {
        _id: 6,
        name: "Trian",
        age: 29,
        position: "Data Scientist",
        Salary: 75000
       },
       {
        _id: 7,
        name: "Elizan",
        age: 25,
        position: "Full Stack Developer",
        Salary:49000
    }]
        // const result = await person.insertMany(personData)
        // console.log(result)

       const result=[]
       //result.push(await person.insertMany(personData))
       result.push(await person.find())                      // all documents
       result.push(await person.find({position:"FSD developer"}))
       result.push(await person.find({ age: { $gte: 25, $lte: 40 } },{name:1}))
       result.push(await person.find().sort({ Salary: -1 }).limit(1))
       result.push(await person.find({ Salary: { $gt: 50000 } }))
       result.push(await person.find({salary:{$gt:50000}}).count())
       result.push(await person.find({ $and: [{ $or: [{ position: "Software Developer"}, { position: "Full Stack Developer" }] }, { age: { $lt: 30 } }] }))
       result.push(await person.updateOne({salary:{$lt:50000}},{ $mul: { salary: 1.1 }}))
       result.push(await person.deleteMany({ age: { $gt: 50 } }))
       result.push(await person.updateMany({ position: "Data Scientist" }, { $mul: {salary: 1.05 } }))
       result.push(await person.find({name:{$regex:/an$/}}))
       result.push(await person.find({name:{$regex:/^eri[A-z]{2}$/i}}))
       result.push(await person.find({name:{$regex:/ric/i}}))
       result.push(await person.find({name:{$regex:/^[A-Za-z]{4,5}$/i}}))
       result.push(await person.find({name:{$regex:/[0-9]$/}}))
       console.log(result)

    }
    catch (err) {
        console.log("error")
    }
}
createDoc()


