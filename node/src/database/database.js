import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    "projectsdb", // db name,
    "postgres", // username
    "v4juuK4fUPYoguaK", // password
    {
        host: "localhost",
        dialect: "postgres",
    }
);