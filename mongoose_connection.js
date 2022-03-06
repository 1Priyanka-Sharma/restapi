const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://test:hellotaejim@cluster0.k4syx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

const productSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
const Product = mongoose.model("Product", productSchema);

module.exports=Product;
