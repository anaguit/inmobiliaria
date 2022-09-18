function usersData(sequelize,Datatypes){
    const alias = "Users";
    const cols = {
        id:{
            type:Datatypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        firstName:{
            type:Datatypes.STRING(45),
            allowNull:false
        },
        lastName:{
            type:Datatypes.STRING(45),
            allowNull:false
        },
        email:{
            type:Datatypes.STRING(45),
            allowNull:false
        },
        password:{type:Datatypes.STRING(255),
            allowNull:false
        }
    };
    const config = {
        tableName:"users",
        timestamps:false
    };

    const Users = sequelize.define(alias,cols,config);

    Users.associate = function(models){
        Users.belongsTo(models.Roles,{
            as:"Roles",
            foreingKey:"rolId"
        });
    };

    return Users;
}

module.exports = usersData;