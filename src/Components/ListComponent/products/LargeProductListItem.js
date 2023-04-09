export const LargerProductListItem = ({ product }) => {
  const { name, price, description, rating } = product;
  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{description}</p>
      <p>Users Rating: {rating}</p>
    </>
  );
};
