
// Q: write a node js script to define a schema having fields like name,age,gender and email apply following validation:-
// 1.name field must remove leading and traling space,
// minimum and max length should be 3 and 10 respectively,
// name should be strored in lower case.
// 2.age must accept the value>0
// 3.perform email id validation on email field.
// 4.gender must accept values in uppercase only and allowed values are males and females only (in capital).



//1. Create Connection
const mg = require("mongoose")
const v = require("validator")
mg.connect("mongodb://127.0.0.1:27017/test").then(() => { console.log("success") }).catch((err) => { console.error(err) })

//2. Create Schema
const mySchema = new mg.Schema(
    {
        name: {
            type: String,
            required: true,
            lowercase:true,
            trim:true,
            minlength:[3,"Minlength must be 3"],
            maxlength:[10,"Maxlength must be 10"]
        },
        gender:{
            type:String,
            Uppercase:true,
            enum:['MALE','FEMALE']
        },
        age: {
            type:Number,
            validate(v1){
                if(v1<=0){
                    let k=new Error("age must be positive")
                    throw k;
                }
            }
        },
        email:{
            type:String,
            validate(val){
                if(!v.isEmail(val)){
                    throw new Error("Enter valid email")
                }
            }
        },
    }
)

//3. Create Model
const person = new mg.model("people", mySchema)
mg.pluralize(null)

//4. Insert Data
const createDoc = async () => {
    try {
        const personData = [{
            name: "def",
            age: 51,
            email:'def@gmail.com',
            gender:'FEMALE'
        },
        {
            name: "strp",
            age:41,
            email:'strp@gmail.com',
            gender:'MALE'
        }]
        const result = await person.insertMany(personData)
        console.log(result)
    }
    catch (err) {
        console.log("problem")
    }
}
createDoc()

