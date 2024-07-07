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
    const allUsers = client.db("clinic_management").collection("users");

    //   const allBookings = client.db("Hotel_Management").collection("bookings");

    app.get("/users/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      console.log(email);

      const result = await allUsers.findOne(query);
      res.send(result);
    });

    app.get("/users", async (req, res) => {
      const result = await allUsers.find().toArray();
      res.send(result);
    });

    app.get("/Appointments", async (req, res) => {
      const result = await allAppointment.find().toArray();
      res.send(result);
    });

    app.get("/Appointments/:email", async (req, res) => {
      const email = req.params.email;
      const query = { userEmail: email };
      console.log(email);

      const result = await allAppointment.find(query).toArray();
      res.send(result);
    });

    app.post("/users", async (req, res) => {
      const user = req.body;
      console.log(user);

      const result = await allUsers.insertOne(user);
      res.send(result);
    });

    app.post("/appointment", async (req, res) => {
      const appointment = req.body;
      console.log(appointment);

      const result = await allAppointment.insertOne(appointment);
      res.send(result);
    });

    app.put("/Appointments/:id", async (req, res) => {
      const id = req.params.id;
      const Status = req.body;
      console.log(Status, id);

      const filter = { _id: new ObjectId(id) };

      const option = { upsert: true };
      const updateStatus = {
        $set: {
          status: Status.status,
        },
      };

      const result = await allAppointment.updateOne(
        filter,
        updateStatus,
        option
      );
      res.send(result);
    });

    //

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
