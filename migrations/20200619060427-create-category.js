'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Categories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            slug: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            metaDescription: {
                type: Sequelize.STRING
            },
            metaKeywords: {
                type: Sequelize.STRING
            },
            categoryStatus: {
                type: Sequelize.ENUM,
                values: ['active', 'inactive'],
                defaultValue: 'active'
            },
            isDeleted: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Categories');
    }
};