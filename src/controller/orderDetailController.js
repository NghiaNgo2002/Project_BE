const db = require('../db');

exports.getAllOrderDetail = (req, res) => {
  db.query('SELECT * FROM `orderdetail`', (err, results) => {
    if (err) {
      console.error('Error retrieving orders:', err);
      return res.status(500).json({ message: 'Error retrieving orders.' });
    }
    if (results.length > 0) {
      return res.status(200).json(results);
    } else {
      return res.status(404).json({ message: 'No orders found.' });
    }
  });
};

exports.getOrderDetailByID = (req, res) => {
    const orderID = req.params.orderID; // Get the orderID from request parameters
  
    db.query('SELECT * FROM `orderdetail` WHERE orderID = ?', [orderID], (err, result) => {
      if (err) {
        console.error('Error retrieving order information:', err);
        return res.status(500).json({ message: 'Error retrieving order information.' });
      }
      if (result.length > 0) {
        const order = result[0];
        return res.status(200).json(order);
      } else {
        return res.status(404).json({ message: 'Order not found.' });
      }
    });
  };
  



