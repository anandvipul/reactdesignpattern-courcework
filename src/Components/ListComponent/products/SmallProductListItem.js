export const SmallProductListItem = ({ product }) => {
  const { name, description } = product;
  return (
    <p>
      Name: {name}, Description: {description}
    </p>
  );
};
