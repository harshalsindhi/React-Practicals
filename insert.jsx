const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";
const database = "Marathe";
const table = "reg";

async function login(un, ps, em) {
    const client = new MongoClient(url); // Corrected MongoClient instantiation

    try {
        await client.connect(); // Connect to MongoDB
        const db = client.db(database);
        const cn = db.collection(table);

        // Insert user data into MongoDB
        await cn.insertOne({ uname: un, password: ps, email: em });

        console.log("User registered successfully!");
    } catch (error) {
        console.error("Error inserting data:", error);
    } finally {
        await client.close(); // Close the connection
    }
}

// Example function call
login("john_doe", "securepass123", "john@example.com");
