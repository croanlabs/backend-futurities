module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Notifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      notificationTemplateId: {
        allowNull: true,
        references: {
          model: 'NotificationTemplates',
          referencesKey: 'id',
        },
        type: Sequelize.INTEGER,
      },
      text: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: queryInterface => queryInterface.dropTable('Notifications'),
};
