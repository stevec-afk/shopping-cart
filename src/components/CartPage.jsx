function CartPage(props) {
  const { cart } = props;

  return (
    <>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </>
  );
}

export default CartPage;
