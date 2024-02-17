import { useEffect, useState } from "react";

import addressService from "../../services/AddressService";
import AddressForm from "./AddressForm";
import AddressCard from "./AddressCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

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
        <div className="w-full md:h-1/2 flex flex-col justify-evenly items-center md:p-12 gap-4">
          <AddressCard formData={formData} />
          <div className="gap-2">
            <button
              type="button"
              className="w-auto text-white text-xl bg-gradient-to-br from-blue-800 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2"
              onClick={handleEditClick}
            >
              <FontAwesomeIcon icon={faEdit} /> Edit
            </button>
            <button
              type="button"
              className="w-auto text-white bg-gradient-to-br from-red-600 to-red-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
              onClick={handleDelete}
            >
              <FontAwesomeIcon icon={faTrash} /> Delete
            </button>
          </div>
        </div>
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
