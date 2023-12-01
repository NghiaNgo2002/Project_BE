const db = require("../config/dbconnect");

exports.getOne = async (req, res) => {
  try {
    // Ensure the database connection is established before using it
    if (!db) {
      console.error("Database connection not established");
      return res.status(500).json({ message: "Internal server error" });
    }

    const id = req.params.id;

    console.log("Fetching data for id:", id);

    // Use explicit join syntax in the SQL query
    const result = await db
      .queryAsync(
        "SELECT * FROM customerproductdetail AS c JOIN products AS p ON c.product_id = p.id WHERE p.id = ?",
        [id]
      )
      .catch((error) => {
        console.error("Database query error:", error);
        throw error;
      });

    console.log("Result from the database:", result);

    if (result.length === 0) {
      return res.status(404).json({ message: "Item not found in the product" });
    }

    // Verify that the column names in the result object match the actual column names
    const item = {
      id: result[0].id,
      name: result[0].name, // Assuming 'name' is the correct column name
      type: result[0].type,
      price: result[0].price,
      color: result[0].color,
      size: result[0].size,
    };

    return res.status(200).json({ item });
  } catch (error) {
    console.log("Error retrieving item from the product", error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
