/* eslint-disable react/prop-types */

const Error = ({ title, message }) => (
  <div className="max-w-[600px] rounded overflow-hidden">
    <h3 className="bg-red-500 text-white font-semibold p-3">Error: {title}</h3>
    {message && (
      <p className="p-3 bg-white text-gray-400 font-light">{message}</p>
    )}
  </div>
);

export default Error;
