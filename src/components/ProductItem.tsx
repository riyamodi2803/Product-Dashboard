import type { Product } from "../types/product";

type Props = {
  product: Product;
  selected: boolean;
  onSelect: (id: number) => void;
};

const ProductItem = ({ product, selected, onSelect }: Props) => {
  return (
    <div
      className="
        flex items-center justify-between p-4 rounded-xl
        bg-white dark:bg-[#1e293b]
        border border-gray-200 dark:border-gray-700
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onSelect(product.id)}
        />

        <img
          src={product.image}
          className="w-12 h-12 rounded-lg object-cover"
        />

        <div>
          <div className="font-medium dark:text-white">
            {product.name}
          </div>
          <div className="text-green-500">${product.price}</div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-6">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Product ID <br />
          <span className="text-black dark:text-white font-medium">
            {product.id}
          </span>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm ${
            product.status === "active"
              ? "bg-green-100 text-green-600"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {product.status}
        </span>

        <button className="border px-2 py-1 rounded">...</button>
      </div>
    </div>
  );
};

export default ProductItem;