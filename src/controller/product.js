const db = require("../config/dbconnect");

exports.getAll = async (req, res) => {
  try {
    const result = await db.queryAsync(
      "SELECT product_name,price,id,picture_one,picture_two,picture_three FROM products"
    );

    if (result.length === 0) {
      return res.status(404).json({ message: "No item found in product list" });
    }

    const items = result.map((row) => ({
      id: row.id,
      product_name: row.product_name,
      price: row.price,
      picture_one: row.picture_one,
      picture_two: row.picture_two,
      picture_three: row.picture_three,
    }));

    return res.status(200).json({ items });
  } catch (error) {
    console.error("Error retrieving items from the product list: ", error);
    return res
      .status(500)
      .json({ message: "Internal server error.", error: error.message });
  }
};
