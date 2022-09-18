function contactsData(sequelize,Datatypes){
    const alias = "Contacts";

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
        phone:{
            type:Datatypes.STRING(45),
            allowNull:false
        },
        email:{
            type:Datatypes.STRING(45),
            allowNull:false
        },
        message:{
            type:Datatypes.STRING(45),
            allowNull:false
        },
        createdAt:{
            type:Datatypes.DATE,
            allowNull:false
        }
    };

    const config = {
        tableName:"contacts",
        timestamps:false
    };

    const Contacts = sequelize.define(alias,cols,config);

    return Contacts;
};

module.exports = contactsData;