  //condicionales multiples
const renderItems = new Map();
renderItems.set(1, <p>one</p>);
renderItems.set(2, <p>two</p>);
renderItems.set(3, <p>three</p>);
renderItems.set(4, <p>four</p>);
export function Test() {
  // const numbers = [
  //     {id: 1, name: 'one', value:1},
  //     {id: 2, name: 'two', value:2},
  //     {id: 3, name: 'three', value:3},
  //     {id: 4, name: 'four', value:4},
  // ];

  const multipleConditionInit = (itemToGet: number) => {
    return renderItems.has(itemToGet) ? (
      renderItems.get(itemToGet)
    ) : (
      <p>not found</p>
    );
  };



  return (
    <>
      {/* {numbers.map((number) => (
        <p key={number.id}>{number.value}</p>
      ))}
      {renderItems.has(itemToGet) ? (
        renderItems.get(itemToGet)
      ) : (
        <p>not found</p>
      )} */}
      {multipleConditionInit(1)}
    </>
  );
}
