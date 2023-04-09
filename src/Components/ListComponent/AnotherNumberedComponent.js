export const AnotherNumberedComponent = ({
  items,
  resourceName,
  ItemComponent,
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
