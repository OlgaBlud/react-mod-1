// src/components/App.jsx

import { Alert } from "./Alert/Alert";
import Product from "./Product";

// import { Product } from "./Product";

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Alert variant="info" outlined={true} elevated={false}>
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" outlined={false} elevated={true}>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success" outlined={false} elevated={false}>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined={true} elevated={true}>
        Please update your profile contact information
      </Alert>
    </div>
  );
}
