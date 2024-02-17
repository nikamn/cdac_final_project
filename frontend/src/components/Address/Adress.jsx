import { useEffect, useState } from "react";

import addressService from "../../services/AddressService";
import AddressForm from "./AddressForm";

const initialState = {
  houseNo: "",
  street: "",
  city: "",
  state: "",
  pinCode: "",
  zipCode: "",
};
const Address = () => {
  const [formData, setFormData] = useState(initialState);
  const [isAddressPresent, setIsAddressPresent] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formErrors, setFormErrors] = useState(initialState);

  const init = () => {
    addressService
      .getAddress()
      .then((response) => {
        console.log("Printing address data", response.data);
        // setAddress(response.data);
        setIsAddressPresent(true);
        setFormData(response.data || {}); // Set formData when address is fetched or an empty object if not present
      })
      .catch((error) => {
        setFormData(initialState);
        setIsAddressPresent(false);

        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Validate each form field
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === "") {
        errors[key] = "This field is required";
        isValid = false;
      } else {
        errors[key] = null;
      }
    });
    console.log(errors);
    setFormErrors(errors);
    return isValid;
  };

  const handleDelete = () => {
    addressService
      .remove()
      .then((res) => {
        console.log("Address deleted", res.data);

        setIsAddressPresent(false);
        init(); // Fetch updated address data
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addressService
        .updateAddress(formData)
        .then((response) => {
          // console.log("Printing address data", response.data);
          // setAddress(response.data);
          console.log("API response:", response.data);
          setEditMode(false); // After submitting, exit edit mode
          init();

          setIsAddressPresent(true);
          setFormData(response.data || {}); // Set formData when address is fetched or an empty object if not present
        })
        .catch((error) => {
          setFormData(initialState);

          console.log("Something went wrong", error);
        });
    }
  };

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addressService
        .addAddress(formData)
        .then((response) => {
          console.log("API response:", response.data);
          setEditMode(false); // After submitting, exit edit mode
          init();

          setIsAddressPresent(true);
          setFormData(response.data || {}); // Set formData when address is fetched or an empty object if not present
        })
        .catch((error) => {
          setFormData(initialState);

          console.log("Something went wrong", error);
        });
    }
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  return (
    <div>
      {isAddressPresent && !editMode ? (
        <>
          <p>
            {Object.entries(formData).map(([key, value]) => (
              <span key={key}>
                {key}: {value} <br />
              </span>
            ))}
          </p>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      ) : editMode ? (
        <AddressForm
          handleSubmit={handleSubmitUpdate}
          formData={formData}
          setFormData={setFormData}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
        />
      ) : (
        <AddressForm
          handleSubmit={handleSubmitAdd}
          formData={formData}
          setFormData={setFormData}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
        />
      )}
    </div>
  );
};

export default Address;
