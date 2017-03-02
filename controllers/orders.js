var Order = require('../models/order');

module.exports = {
  submitOrder,
  getAllOrders,
};

function submitOrder(req, res, next) {
  Order.create(req.body).then(order => {
    res.json(order);
  }).catch( err => res.status(400).json(err) );
}

function getAllOrders(req, res, next) {
  Order.find().then(orders => {
    res.json(orders);
  }).catch(err => res.status(400).json(err));
}
