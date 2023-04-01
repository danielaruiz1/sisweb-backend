"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Orders",
      [
        {
          date: new Date(),
          status: "delivered",
        },
        {
          date: new Date(),
          status: "canceled",
        },
        {
          date: new Date(),
          status: "in progress",
        },
        {
          date: new Date(),
          status: "delayed",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Orders", null, {});
  },
};
