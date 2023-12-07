const db = require("../config/dbconnect");

exports.getAll = async (req, res) => {
  const userid = req.params.user_id;
  console.log("User ID:", userid);
  try {
    const result = await db.queryAsync(
      "Select id, name, type,price,quantity,size,color FROM cart WHERE user_id = ?",
      [userid]
    );
    if (result.length === 0) {
      return res.status(404).json({
        message: "No item found in cart",
      });
    }
    const items = result.map((row) => ({
      id: row.id,
      name: row.name,
      type: row.type,
      price: row.price,
      quantity: row.quantity,
      size: row.size,
      color: row.color,
      user_id: row.user_id,
    }));
    return res.status(200).json({ items });
  } catch (error) {
    console.error("Error retrieving product: ", error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// Controller to add a product to the cart for user with user_id: 38
exports.addOne = async (req, res) => {
  try {
    const userId = req.params.user_id; // Assuming user_id: 38
    const { name, price, type, quantity, size, color } = req.body;

    if (!name || !price || !type || !quantity || !size || !color) {
      return res.status(400).json({ message: "Missing fields" });
    }

    // Check if the user exists (optional, depending on your application logic)
    const userExists = await db.queryAsync(
      "SELECT id FROM accounts WHERE id = ?",
      [userId]
    );

    if (!userExists || userExists.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    // Add the product to the cart for the specified user
    const result = await db.queryAsync(
      "INSERT INTO cart (user_id, name, price, type, quantity, size, color) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [userId, name, price, type, quantity, size, color]
    );

    if (result.affectedRows === 1) {
      return res.status(201).json({ message: "Product added to cart" });
    } else {
      return res.status(500).json({ message: "Failed to add product to cart" });
    }
  } catch (error) {
    console.error("Error adding product to cart", error);
    return res.status(500).json({
      message: "Internal server error.",
      error: error.message,
    });
  }
};

exports.deleteOne = async (req, res) => {
  try {
    const id = req.params.id;
    const userid = req.params.user_id;
    const result = await db.queryAsync(
      "DELETE FROM cart WHERE id = ? AND user_id = ?",
      [id, userid]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Product not found in the cart",
      });
    }
    res.status(200).json({
      message: "Product deleted from the cart succesfully",
    });
  } catch (error) {
    console.error("Error deleting product in the cart");
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.updateOne = async (req, res) => {
  try {
    const { quantity, size, color } = req.body;
    const id = req.params.id;
    const userid = req.params.user_id;

    if (!quantity || !size || !color) {
      return res.status(400).json({ message: "Bad request." });
    }

    const result = await db.queryAsync(
      "UPDATE cart SET quantity = ? , size = ? , color = ? WHERE id = ? AND user_id = ?",
      [quantity, size, color, id, userid]
    );

    if (result.affectedRows === 1) {
      const updatedItem = {
        quantity: quantity,
        size: size,
        color: color,
      };

      return res.status(200).json({
        item: updatedItem,
        message: "Product is updated in cart",
      });
    } else {
      return res.status(404).json({ message: "Product not found in the cart" });
    }
  } catch (error) {
    console.log("Error updating product", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
