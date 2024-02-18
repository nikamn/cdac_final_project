/* eslint-disable react/prop-types */
const AddressCard = ({ formData }) => {
  return (
    <>
      <div className="w-[300px] p-6 bg-white border border-gray-200 rounded-lg shadow ">
        <h5 className="mb-2 text-3xl font-bold tracking-tight text-[#023F3A] ">
          Address Details:
        </h5>

        {Object.entries(formData).map(([key, value]) => (
          <p
            className="mb-1 capitalize font-normal text-gray-700 dark:text-gray-600"
            key={key}
          >
            <span className="text-xl text-neutral-800">{key}:</span>
            <span className="text-lg text-neutral-600 ml-2">{value}</span>
            <br />
          </p>
        ))}
      </div>
    </>
  );
};

export default AddressCard;
