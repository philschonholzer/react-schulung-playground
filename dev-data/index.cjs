const makeArticle = (override) => {
  return {
    id: 1,
    name: "T-Shirt",
    description: "Blau",
    price: 20,
    ...override,
  };
};
module.exports = () => {
  const articles = [
    makeArticle(),
    makeArticle({ id: 2, description: "Rot" }),
    makeArticle({ id: 3, description: "Grün" }),
  ];
  return { articles, cart: { articles: [articles[0]] } };
};
