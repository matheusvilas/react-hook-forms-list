import { Controller, useFieldArray, useForm } from "react-hook-form";
import { ProductItem } from "./ProductItem";

export type Product = {
  ean: string;
  name: string;
  quantity: number;
  value: string;
};

export type Inputs = {
  products: Product[];
};

const allProducts: Inputs["products"] = [
  {
    ean: "01",
    name: "Produto 01",
    quantity: 0,
    value: "0",
  },
  {
    ean: "02",
    name: "Produto 02",
    quantity: 0,
    value: "0",
  },
  {
    ean: "03",
    name: "Produto 03",
    quantity: 0,
    value: "0",
  },
];

function App() {
  const { control, handleSubmit, register } = useForm<Inputs>({
    defaultValues: {
      products: allProducts,
    },
  });

  const { fields } = useFieldArray({
    control,
    name: "products",
  });

  return (
    <div className="App">
      <form onSubmit={handleSubmit((data) => console.log("data", data))}>
        {fields.map((field, index) => (
          <Controller
            key={field.id}
            control={control}
            render={({ field }) => {
              return <ProductItem {...field} />;
            }}
            name={`products.${index}`}
          />
        ))}

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
