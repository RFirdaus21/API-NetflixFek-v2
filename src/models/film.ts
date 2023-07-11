import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';

class Film extends Model {
    public id!: number;
    public title!: string;
    public director!: string;
    public year!: number;
    public genre!: string;
    public cast!: string;
    public synopsis!: string;
    public image!: string;
}

Film.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    director: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cast: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    synopsis: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
  },
  {
    tableName: 'netflix_film',
    timestamps: false,
    sequelize,
    modelName: 'film',
  }
);

export default Film;
