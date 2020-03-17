//TO CREATE INSTANCE OF MONGOOSE
let mongoose = require("mongoose"); 

//TO CONNECT TO MONGODB
mongoose
    .connect("mongodb://localhost/pra",{ useNewUrlParser: true,useUnifiedTopology: true  })
    .then(() => console.log("db got connected"))
    .catch(error => console.log("something went wrong", error.message));

//CREATE SCHEMA
    let customersSchema = new mongoose.Schema({
    _id: { type: String },
    tags: [String],
    date: {type: Date, default:Date.now(),
    name: {type: String},
    author: {type: String},
    isPublished: { type: Boolean },
    price: { type: Number },
    }
});

//CREATE MODEL
let customersModel = mongoose.model("customers", customersSchema);

//FUNCTION TO FETCH DATA
async function FetchCustomers1() {
    let customers1 = await customersModel
    .find({isPublished: true}) //TO FIND RECORD FROM DATA
    .find({
        tags: 
        {
            $nin: ["frontend"] //DOESNT INCLUDE THE SPECIFIED DATA
        }
    })
    .sort("name") //SORT BY ALPHABETICAL ORDER 
    .find({}).select("-tags -_id -price -date -isPublished"); //HERE "-" IS USED TO EXCLUDE PARTICULAR RECORD 
    console.log(customers1);
}
FetchCustomers1(); //CALLING FUNCTION 

async function FetchCustomers2(){
    let customers2 = await customer2Model
    .find({isPublished: true}) 
    .find({
        tags: 
        {
            $in: ["frontend","backend"]  //INCLUDE THE SPECIFIED DATA
        }
    })
    .sort("-price") //SORT IN DESCENDING ORDER
    .find({}).select("-tags -_id -price -date -isPublished");
    console.log(customers2); 
}
    
FetchCustomers2();
