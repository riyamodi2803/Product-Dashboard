import { useState } from "react";
import { productsData } from "../data/products";
import ProductItem from "../components/ProductItem";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const ITEMS_PER_PAGE = 8;

const ProductList = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState(productsData);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<number[]>([]);
  const [category, setCategory] = useState("all");
  const [sortType, setSortType] = useState<"none" | "price" | "name">("none");

  // ✅ SEARCH
  let filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ FILTER (category)
  if (category !== "all") {
    filtered = filtered.filter((p) => p.category === category);
  }

  // ✅ SORT
  if (sortType === "price") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortType === "name") {
    filtered = [...filtered].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  // ✅ SELECT
  const handleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    );
  };

  // ✅ BULK DELETE
  const handleBulkDelete = () => {
    const updated = products.filter((p) => !selected.includes(p.id));
    setProducts(updated);
    setSelected([]);
  };

  // ✅ SORT BUTTON CLICK
  const toggleSort = () => {
    if (sortType === "none") setSortType("price");
    else if (sortType === "price") setSortType("name");
    else setSortType("none");
  };

  // ✅ SUPPORT BUTTON
  const handleSupport = () => {
    alert("Support contacted! 🚀");
  };

  return (
    <div className="p-6 flex flex-col h-full">

      {/* HEADER */}
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-semibold dark:text-white">Product List</h1>

        {/* CATEGORY FILTER */}
        <select
          className="border px-3 py-2 rounded-md dark:bg-gray-800 dark:text-white"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
        </select>
      </div>

      {/* SEARCH + FILTER */}
      <div className="flex justify-between items-center mb-4 gap-3">
        <div className="flex items-center border rounded-lg px-3 flex-1 dark:bg-gray-800">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search Product"
            className="ml-2 w-full outline-none bg-transparent py-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button
          onClick={() => setCategory("electronics")}
          className="border px-3 py-2 rounded-lg"
        >
          Filter
        </button>

        <button
          onClick={handleBulkDelete}
          className="border px-3 py-2 rounded-lg"
        >
          Bulk Action
        </button>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex justify-end gap-3 mb-4">
        <button
          onClick={toggleSort}
          className="border px-3 py-2 rounded-lg"
        >
          Sort ⇅
        </button>

        <button
          onClick={handleSupport}
          className="border px-3 py-2 rounded-lg"
        >
          Support
        </button>

        <button
          onClick={() => navigate("/add-product")}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg"
        >
          + Add Product
        </button>
      </div>

      {/* PRODUCT LIST */}
      <div className="flex-1 overflow-y-auto space-y-3">
        {paginated.map((p) => (
          <ProductItem
            key={p.id}
            product={p}
            selected={selected.includes(p.id)}
            onSelect={handleSelect}
          />
        ))}
      </div>

      {/* PAGINATION */}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};

export default ProductList;