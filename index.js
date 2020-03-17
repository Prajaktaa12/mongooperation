let mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/pra",{ useNewUrlParser: true,useUnifiedTopology: true  })
    .then(() => console.log("db got connected"))
    .catch(error => console.log("something went wrong", error.message));

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

let customersModel = mongoose.model("customers", customersSchema);

async function FetchCustomers1() {
    let customers1 = await customersModel
    .find({isPublished: true})
    .find({
        tags: 
        {
            $nin: ["frontend"]
        }
    })
    .sort("name")
    .find({}).select("-tags -_id -price -date -isPublished");
    console.log(customers1);
}
FetchCustomers1();

async function FetchCustomers2(){
    let customers2 = await customer2Model
    .find({isPublished: true})
    .find({
        tags: 
        {
            $in: ["frontend","backend"]
        }
    })
    .sort("-price")
    .find({}).select("-tags -_id -price -date -isPublished");
    console.log(customers2); 
}
    
FetchCustomers2();
