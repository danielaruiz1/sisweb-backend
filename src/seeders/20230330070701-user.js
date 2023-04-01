"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Olivia Carpio",
          phone: "651113128922",
        },
        {
          name: "Norma Segovia",
          phone: "549581235775",
        },
        {
          name: "Naia Antolin",
          phone: "826737412345",
        },
        {
          name: "Yanira Carrion",
          phone: "113948574357",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
