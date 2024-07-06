const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

//this are my middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_Pass}@cluster0.jeg7pmd.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const allAppointment = client
      .db("clinic_management")
      .collection("appointmenets");

    //   const allBookings = client.db("Hotel_Management").collection("bookings");
    //   const allUsers = client.db("Hotel_Management").collection("users");

    app.get("/Appointments", async (req, res) => {
      const result = await allAppointment.find().toArray();
      res.send(result);
    });

    //   app.get("/bookings", async (req, res) => {
    //     const result = await allBookings.find().toArray();
    //     res.send(result);
    //   });

    //   app.post("/booking", async (req, res) => {
    //     const booking = req.body;

    //     const result = await allBookings.insertOne(booking);
    //     res.send(result);
    //   });

    //   app.post("/users", async (req, res) => {
    //     const user = req.body;
    //     console.log(user);

    //     const result = await allUsers.insertOne(user);
    //     res.send(result);
    //   });

    //   app.put("/bookings/:id", async (req, res) => {
    //     const id = req.params.id;
    //     const Status = req.body;
    //     console.log(updateStatus, id);

    //     const filter = { _id: new ObjectId(id) };

    //     const option = { upsert: true };
    //     const updateStatus = {
    //       $set: {
    //         status: Status.status,
    //       },
    //     };

    //     const result = await orderCollection.updateOne(
    //       filter,
    //       updateStatus,
    //       option
    //     );
    //     res.send(result);
    //   });

    //   app.delete("/alltoys/:id", async (req, res) => {
    //     const id = req.params.id;
    //     // console.log(id);
    //     const query = { _id: new ObjectId(id) };
    //     const result = await alltoysCollection.deleteOne(query);
    //     res.send(result);
    //   });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Clinic Management is running");
});

app.listen(port, () => {
  console.log(`Clinic Management  Server is running on port ${port}`);
});
