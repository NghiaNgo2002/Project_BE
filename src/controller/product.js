const db = require("../config/dbconnect");

exports.getAll = async (req, res) => {
  try {
    const result = await db.queryAsync("SELECT * FROM product");

    if (result.length === 0) {
      return res.status(404).json({ message: "No item found in product list" });
    }

    const items = result.map((row) => ({
      id: row.id,
      name: row.name,
      type: row.type,
      price: row.price,
    }));

    return res.status(200).json({ items });
  } catch (error) {
    console.error("Error retrieving items from the product list: ", error);
    return res
      .status(500)
      .json({ message: "Internal server error.", error: error.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await db.queryAsync("SELECT * FROM product WHERE id = ?", [
      id,
    ]);

    if (result.length === 0) {
      return res.status(404).json({ message: "Item not found in the product" });
    }

    const item = {
      id: result[0].id,
      name: result[0].name,
      type: result[0].type,
      price: result[0].price,
    };
    return res.status(200).json({ item });
  } catch (error) {
    console.log("Error retrieving item from the product", error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
