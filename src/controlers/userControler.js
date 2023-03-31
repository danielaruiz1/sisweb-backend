import Model from "../models";
const { User } = Model;
// Create and Save a new User
export const createUser = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).json({
      status: "error",
      message: "Content can not be empty.",
      payload: null,
    });
    return;
  }
  // Create a User
  const user = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  };
  // Save User in the database
  User.create(user)
    .then((data) => {
      res.status(200).json({
        status: "success",
        message: "User successfully created",
        payload: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        message: "Something happened creating a user. " + err.message,
        payload: null,
      });
    });
};
// Retrieve all Users from the database.
export const getAllUsers = (req, res) => {
  User.findAll()
    .then((data) => {
      return res.status(200).json({
        status: "success",
        message: "Users successfully retrieved",
        payload: data,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        status: "error",
        message: "Something happened retrieving all users. " + err.message,
        payload: null,
      });
    });
};
// Find a single User with an id
export const getUserById = (req, res) => {
  User.findByPk(req.params.id)
    .then((data) => {
      return res.status(200).json({
        status: "success",
        message: "Users successfully retrieved",
        payload: data,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        status: "error",
        message: "Something happened retrieving all users. " + err.message,
        payload: null,
      });
    });
};
// Update a User by the id in the request
export const updateUser = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).json({
      status: "error",
      message: "Content can not be empty.",
      payload: null,
    });
  }
  // Save User in the database
  User.update(req.body, {
    where: { id: req.params.id },
  })
    .then((isUpdated) => {
      if (isUpdated) {
        res.status(200).json({
          status: "success",
          message: "User successfully updated",
          payload: req.body,
        });
      } else {
        res.status(500).json({
          status: "error",
          message:
            "Something happened updating the user. " +
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
        message: "Something happened updating a user. " + err.message,
        payload: null,
      });
    });
};
// Delete a User with the specified id in the request
export const deleteUser = (req, res) => {
  // Validate request
  if (!req.body.id) {
    res.status(400).json({
      status: "error",
      message: "Content can not be empty.",
      payload: null,
    });
    return;
  }
  // Delete User in the database
  User.destroy({
    where: {
      id: req.body.id,
    },
  })
    .then((isDeleted) => {
      if (isDeleted) {
        res.status(200).json({
          status: "success",
          message: "User successfully deleted",
          payload: null,
        });
      } else {
        res.status(500).json({
          status: "error",
          message:
            "Something happened deleting the user. " +
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
        message: "Something happened deleting a user. " + err.message,
        payload: null,
      });
    });
};
