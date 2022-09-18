function rolesData(sequelize,Datatypes){
    const alias = "Roles";

    const cols = {
        id:{
            type:Datatypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        name:{
            type:Datatypes.STRING(45),
            allowNull:false
        },
        description:{
            type:Datatypes.STRING(45),
            allowNull:false}
    };

    const config = {
        tableName:"roles",
        timestamps:false
    };

    const Roles = sequelize.define(alias,cols,config);

    Roles.associate = function(models){
        Roles.hasMany(models.Users,{
            as:"Users",
            foreingKey:"RolId"
        });
    };

    return Roles;
};

module.exports = rolesData;