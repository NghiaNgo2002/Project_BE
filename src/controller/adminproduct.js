const db = require("../config/dbconnect");

exports.getAll = async (req, res) => {
  try {
    const result = await db.queryAsync("SELECT * FROM admin_product");
    if (result.lenght === 0) {
      return res.status(404).json({ message: "No item found in product." });
    }
    const items = result.map((row) => ({
      id: row.id,
      product_customer_id: row.product_customer_id,
      name: row.name,
      type: row.type,
      price: row.price,
      quantity: row.quantity,
      size: row.size,
      color: row.color,
    }));
    return res.status(200).json({ items });
  } catch (error) {
    console.error("Error retrieving product: ", error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const itemId = req.params.id;

    const result = await db.queryAsync(
      "Select * from admin_product where id = ?",
      [itemId]
    );
    if (result.lenght === 0) {
      return res.status(404).json({ message: "No item found in product list" });
    }
    const item = {
      id: result[0].id,
      product_customer_id: result[0].product_customer_id,
      name: result[0].name,
      type: result[0].type,
      price: result[0].price,
      quantity: result[0].quantity,
      size: result[0].size,
      color: result[0].color,
    };
    return res.status(200).json({ item });
  } catch (error) {
    console.log("Error retrieving item from the product list", error);
    return res.status(500).json({
      message: "Internal server error.",
      error: error.message,
    });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const { name, type, price, quantity, size, color } = req.body;
    if (!name || !type || !price || !quantity || !size || !color) {
      return res
        .status(400)
        .json({ message: "There are some missing fields here." });
    }

    const result = await db.queryAsync(
      "INSERT INTO admin_product (name, type, price, quantity, size, color) VALUES (?, ?, ?, ?, ?, ?)",
      [name, type, price, quantity, size, color]
    );

    if (result.affectedRows === 1) {
      return res.status(201).json({ message: "Product added to product list" });
    } else {
      return res
        .status(500)
        .json({ message: "Failed to add product to product list" });
    }
  } catch (error) {
    console.error("Error adding product to the product list", error);
    return res.status(500).json({
      message: "Internal server error.",
      error: error.message,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await db.queryAsync(
      "DELETE FROM admin_product WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Product not found in the product list",
      });
    }
    res.status(200).json({
      message: "Product deleted from the product list successfully",
    });
  } catch (error) {
    console.error("Error deleting product in the product list", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { name, type, price, quantity, size, color } = req.body;
    const id = req.params.id;

    if (!name || !type || !price || !quantity || !size || !color) {
      return res.status(204).json({ message: "Reset content of cart" });
    }

    const result = await db.queryAsync(
      "UPDATE admin_product SET name = ? , type = ? ,price = ?, quantity = ?, size = ? , color = ? WHERE id = ?",
      [name, type, price, quantity, size, color, id]
    );

    if (result.affectedRows === 1) {
      const item = {
        name: name,
        type: type,
        price: price,
        quantity: quantity,
        size: size,
        color: color,
      };

      return res
        .status(200)
        .json({ item, message: "Product is update in product lists  " });
    } else {
      return res.status(404).json({
        message: "Item not found in the cart.",
      });
    }
  } catch (error) {
    console.log("Error updating item in the product", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
