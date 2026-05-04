import { useState } from "react";
import { CheckCircle } from "lucide-react";

const AddProduct = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col h-full">

      {/* TITLE */}
      <h1 className="text-2xl font-semibold mb-6 dark:text-white">
        Add Product
      </h1>

      {/* MAIN FORM CONTAINER */}
      <div className="
        bg-white dark:bg-[#1e293b]
        border border-gray-200 dark:border-gray-700
        rounded-2xl p-6
      ">

        <div className="grid grid-cols-2 gap-6">

          {/* LEFT SIDE */}
          <div>
            <h2 className="font-semibold mb-4 dark:text-white">
              General Information
            </h2>

            <input
              placeholder="Product Name"
              className="
                w-full p-3 mb-3 rounded-lg border
                bg-gray-100 dark:bg-gray-800
                border-gray-300 dark:border-gray-600
                text-gray-900 dark:text-white
              "
            />

            <textarea
              placeholder="Add Description..."
              className="
                w-full p-3 mb-3 rounded-lg border
                bg-gray-100 dark:bg-gray-800
                border-gray-300 dark:border-gray-600
                text-gray-900 dark:text-white
              "
            />

            <select
              className="
                w-full p-3 mb-3 rounded-lg border
                bg-gray-100 dark:bg-gray-800
                border-gray-300 dark:border-gray-600
                text-gray-900 dark:text-white
              "
            >
              <option>Select Category</option>
            </select>

            <div className="flex gap-3">
              <input
                placeholder="Processing Time"
                className="
                  w-full p-3 rounded-lg border
                  bg-gray-100 dark:bg-gray-800
                  border-gray-300 dark:border-gray-600
                  text-gray-900 dark:text-white
                "
              />

              <input
                placeholder="Price"
                className="
                  w-full p-3 rounded-lg border
                  bg-gray-100 dark:bg-gray-800
                  border-gray-300 dark:border-gray-600
                  text-gray-900 dark:text-white
                "
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <h2 className="font-semibold mb-4 dark:text-white">
              Product Media
            </h2>

            <div className="
              border-2 border-dashed rounded-xl p-10 text-center
              text-gray-500 dark:text-gray-400
            ">
              <p>Drop your images</p>
              <p className="text-purple-500 cursor-pointer">
                Click to Browse
              </p>
              <p className="text-xs mt-2">
                1600 x 1200 recommended (max 10MB)
              </p>
            </div>
          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-3 mt-6">
          <button className="px-4 py-2 border rounded-lg">
            Cancel
          </button>

          <button
            onClick={() => setShowModal(true)}
            className="px-5 py-2 bg-purple-600 text-white rounded-lg"
          >
            Add Product
          </button>
        </div>

      </div>

      {/* ✅ MODAL */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50">
          
          <div className="
            bg-white dark:bg-[#1e293b]
            rounded-xl shadow-xl
            px-8 py-6 text-center w-[320px]
          ">

            {/* ICON */}
            <div className="flex justify-center mb-3">
              <CheckCircle className="text-green-500" size={40} />
            </div>

            {/* TEXT */}
            <h2 className="font-semibold text-lg dark:text-white">
              Product added Successfully
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Your request has been completed
            </p>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowModal(false)}
              className="px-5 py-2 bg-purple-600 text-white rounded-lg"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default AddProduct;