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
    <form onSubmit={handleSubmit}>
      <label>
        House No:
        <input
          type="text"
          name="houseNo"
          value={formData.houseNo}
          onChange={handleChange}
          className="w-[50px]"
        />
        {formErrors.houseNo && (
          <span style={{ color: "red" }}>{formErrors.houseNo}</span>
        )}
      </label>
      <br />
      <label>
        Street:
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
        />
        {formErrors.street && (
          <span style={{ color: "red" }}>{formErrors.street}</span>
        )}
      </label>
      <br />
      <label>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        {formErrors.city && (
          <span style={{ color: "red" }}>{formErrors.city}</span>
        )}
      </label>
      <br />
      <label>
        State:
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
        {formErrors.state && (
          <span style={{ color: "red" }}>{formErrors.state}</span>
        )}
      </label>
      <br />
      <label>
        Pin Code:
        <input
          type="text"
          name="pinCode"
          value={formData.pinCode}
          onChange={handleChange}
        />
        {formErrors.pinCode && (
          <span style={{ color: "red" }}>{formErrors.pinCode}</span>
        )}
      </label>
      <br />
      <label>
        Zip Code:
        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
        />
        {formErrors.zipCode && (
          <span style={{ color: "red" }}>{formErrors.zipCode}</span>
        )}
      </label>
      <br />
      <div className="mb-12 pb-1 pt-1 text-center">
        <button
          type="submit"
          className="mb-3 inline-block w-[50%] rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
          style={{
            background:
              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddressForm;
