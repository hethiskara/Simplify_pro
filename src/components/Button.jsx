const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
  onClick, // Add onClick prop
}) => {
  return (
    <button
      onClick={onClick} // Attach the onClick event
      className={`flex justify-center items-center
    gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${borderColor} ${textColor}`
        : "bg-coral-red border-coral-red text-white"
    } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}
      {iconURL && (
        <img
          className="ml-2 rounded-full w-5 h-5"
          src={iconURL}
          alt="arrow right icon"
        />
      )}
    </button>
  );
};

export default Button;
