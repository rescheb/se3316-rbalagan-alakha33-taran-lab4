module.exports = (sequelize, DataTypes) =>{

    const playlist = sequelize.define("publicplaylists",{
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        }
    } );

    return playlist;

}