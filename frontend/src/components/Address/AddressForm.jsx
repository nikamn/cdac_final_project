/* eslint-disable react/prop-types */

import { useEffect } from "react";

const AddressForm = ({
  handleSubmit,
  formData,
  setFormData,
  formErrors,
  setFormErrors,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevData) => ({
      ...prevData,
      [name]: null,
    }));
  };
  useEffect(() => {}, [formErrors]);
  return (
    <div className="w-[300px] lg:w-[400px]">
      <div className="p-6 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 sm:rounded-md text-white text-xl">
        <form onSubmit={handleSubmit}>
          <label className="block mb-1">
            House No:
            <input
              type="text"
              name="houseNo"
              value={formData.houseNo}
              onChange={handleChange}
              className="
              block
            w-full
            mt-1
            border-gray-300
            text-black
            
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            "
            />
            {formErrors.houseNo && (
              <span style={{ color: "red" }}>{formErrors.houseNo}</span>
            )}
          </label>
          <br />
          <label className="block mb-1">
            Street:
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className="
              block
            w-full
            mt-1
            border-gray-300
            text-black
            
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50"
            />
            {formErrors.street && (
              <span style={{ color: "red" }}>{formErrors.street}</span>
            )}
          </label>
          <br />
          <label className="block mb-1">
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="
              block
            w-full
            mt-1
            border-gray-300
            text-black
            
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50"
            />
            {formErrors.city && (
              <span style={{ color: "red" }}>{formErrors.city}</span>
            )}
          </label>
          <br />
          <label className="block mb-1">
            State:
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="
              block
            w-full
            mt-1
            border-gray-300
            text-black
            
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50"
            />
            {formErrors.state && (
              <span style={{ color: "red" }}>{formErrors.state}</span>
            )}
          </label>
          <br />
          <label className="block mb-1">
            Pin Code:
            <input
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              className="
              block
            w-full
            mt-1
            border-gray-300
            text-black
            
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50"
            />
            {formErrors.pinCode && (
              <span style={{ color: "red" }}>{formErrors.pinCode}</span>
            )}
          </label>
          <br />
          <label className="block mb-1">
            Zip Code:
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="
              block
            w-full
            mt-1
            border-gray-300
            text-black
            
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50"
            />
            {formErrors.zipCode && (
              <span style={{ color: "red" }}>{formErrors.zipCode}</span>
            )}
          </label>
          <br />
          <div className="mb-3 pb-1 pt-1 text-center">
            <button
              type="submit"
              className="h-10
              w-auto
              px-5
              text-indigo-100
              bg-indigo-700
              rounded-lg
              transition-colors
              duration-150
              focus:shadow-outline
              hover:bg-indigo-800"
              style={{
                background:
                  "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
