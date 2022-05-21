module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    // essa chave poderia ser vazia pois sao chaves primarias compostas e sao identificadas pelo sequelize
    postId: {
      type: DataTypes.INTEGER
    },
    categoryId: {
      type: DataTypes.INTEGER
    }
  }, {
    timestamps: false,
    tableName: 'PostCategories'
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory, //nome da tabela no banco
      foreignKey: 'postId',
      otherKey: 'categoryId'
    });

    models.Category.hasMany(models.BlogPost, {
      as: 'blogposts',
      through: PostCategory, //nome da tabela no banco
      foreignKey: 'categoryId', // se refere a model da esquerda
      otherKey: 'postId' // se refere a model da direita
    })
  }

  return PostCategory;
};
