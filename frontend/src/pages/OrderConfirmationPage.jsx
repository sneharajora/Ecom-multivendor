const orders = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      quantity: 2,
      image: "https://picsum.photos/150?random=1",
      orderid:123
    },
    {
      name: "Casual Sneakers",
      size: "42",
      color: "White",
      price: 75,
      quantity: 1,
      image: "https://picsum.photos/150?random=2",
      orderid:1245
    },
  ],
  shippingAddress: {
    address: "123 Fashion street",
    city: "New York",
    country: "USA",
  },
};

const OrderConfirmationPage = () => {
  return (
    <div className="flex flex-col items-center  min-h-screen p-1 ">
      <h1 className=" flex text-4xl p-1.5 text-green-900 text-center   font-bold">
        Thank You for Your Order!{}
      </h1>
      {orders.products.map((product,index) => (
        <div className="flex-col  m-4 border rounded- shadow-md  border-gray-300 w-full max-w-3xl  ">
          <div className="flex justify-between p-4  ">
            <div>
              <h2 className="font-bold ">Order-id:1234</h2>
              Order date: date
            </div>
            <div>
              <p>Estimated Delivery:date</p>
            </div>
          </div>
          <div className="flex justify-between p-4">
            <div >
              <img className="w-24 h-28 object-cover rounded" src={product.image} alt={product.name}></img>
               <p>{product.color} | {product.size}</p>
            </div>
            <div>
              <p>Estimated Delivery:date</p>
            </div>
          </div>
          <div className="flex justify-between p-4  ">
            <div>
              <h2 className="font-bold ">Order-id:1234</h2>
              Order date: date
            </div>
            <div>
              <p>Estimated Delivery:date</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderConfirmationPage;
