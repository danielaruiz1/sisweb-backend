import Model from "../models";

const { Order } = Model;
// Create and Save a new Order
export const createOrder = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).json({
      status: "error",
      message: "Content can not be empty.",
      payload: null,
    });
    return;
  }
  // Create a Order
  const Order = {
    date: req.body.date,
    status: req.body.status,
  };
  // Save Order in the database
  Order.create(order)
    .then((data) => {
      //editar con include luego
      res.status(200).json({
        status: "success",
        message: "Order successfully created",
        payload: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        message: "Something happened creating a order. " + err.message,
        payload: null,
      });
    });
};
// Retrieve all Orders from the database.
export const getAllOrders = (req, res) => {
  Order.findAll()
    .then((data) => {
      return res.status(200).json({
        status: "success",
        message: "Orders successfully retrieved",
        payload: data,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        status: "error",
        message: "Something happened retrieving all orders. " + err.message,
        payload: null,
      });
    });
};
// Find a single Order with an id
export const getOrderById = (req, res) => {
  Order.findByPk(req.params.id)
    .then((data) => {
      return res.status(200).json({
        status: "success",
        message: "Orders successfully retrieved",
        payload: data,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        status: "error",
        message: "Something happened retrieving all orders. " + err.message,
        payload: null,
      });
    });
};
// Update a Order by the id in the request
export const updateOrder = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).json({
      status: "error",
      message: "Content can not be empty.",
      payload: null,
    });
  }
  // Save Order in the database
  Order.update(req.body, {
    where: { id: req.params.id },
  })
    .then((isUpdated) => {
      if (isUpdated) {
        res.status(200).json({
          status: "success",
          message: "Order successfully updated",
          payload: req.body,
        });
      } else {
        res.status(500).json({
          status: "error",
          message:
            "Something happened updating the order. " +
            req.body.id +
            " See:" +
            err.message,
          payload: null,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        message: "Something happened updating a order. " + err.message,
        payload: null,
      });
    });
};
// Delete a Order with the specified id in the request
export const deleteOrder = (req, res) => {
  // Validate request
  if (!req.body.id) {
    res.status(400).json({
      status: "error",
      message: "Content can not be empty.",
      payload: null,
    });
    return;
  }
  // Delete Order in the database
  Order.destroy({
    where: {
      id: req.body.id,
    },
  })
    .then((isDeleted) => {
      if (isDeleted) {
        res.status(200).json({
          status: "success",
          message: "Order successfully deleted",
          payload: null,
        });
      } else {
        res.status(500).json({
          status: "error",
          message:
            "Something happened deleting the order. " +
            req.body.id +
            " See:" +
            err.message,
          payload: null,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        message: "Something happened deleting a order. " + err.message,
        payload: null,
      });
    });
};
