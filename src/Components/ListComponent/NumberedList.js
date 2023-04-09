export const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, i) => {
        return (
          <div key={i}>
            <h3>{i + 1}</h3>
            <ItemComponent key={i} {...{ [resourceName]: item }} />
          </div>
        );
      })}
    </>
  );
};
