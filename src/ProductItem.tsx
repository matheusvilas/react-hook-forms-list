import { Product } from "./App";

type ProductItemProps = {
  onChange: (value: Product) => void;
  value: Product;
};

export function ProductItem({ onChange, value }: ProductItemProps) {
  return (
    <div style={{ marginTop: 20 }}>
      <input
        type="text"
        placeholder="VALOR"
        onChange={(e) => {
          onChange({
            ...value,
            value: e.currentTarget.value,
          });
        }}
        value={value.value}
      />

      <div
        style={{
          display: "flex",
        }}
      >
        <button
          type="button"
          onClick={() => {
            onChange({
              ...value,
              quantity: value.quantity - 1,
            });
          }}
        >
          MINUS
        </button>

        <p>
          Quantity
          {value.quantity}
        </p>

        <button
          type="button"
          onClick={() => {
            onChange({
              ...value,
              quantity: value.quantity + 1,
            });
          }}
        >
          PLUS
        </button>
      </div>
    </div>
  );
}
