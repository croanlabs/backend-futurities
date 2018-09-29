module.exports = (sequelize, DataTypes) => {
  let GeneralNotification = sequelize.define(
    'GeneralNotification',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      notificationId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Notifications',
          referencesKey: 'id',
        },
      },
    },
    {},
  );

  GeneralNotification.associate = models => {
    GeneralNotification.belongsTo(models.Notification, {
      foreignKey: 'notificationId',
    });
    models.Notification.hasOne(GeneralNotification, {
      foreignKey: 'notificationId',
    });
  };

  return GeneralNotification;
};