import PropTypes from "prop-types";

const ButtonSidebar = ({ children, icon, onClick, className, collapsed }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full p-2 md:p-4 flex gap-6 items-center text-md text-[#646567] rounded-lg hover:bg-[#17A9E2] hover:text-white ${className}`}
      aria-label={children}
    >
      {icon}
      {/* Kondisi untuk menampilkan teks berdasarkan prop collapsed */}
      <span className={`${collapsed ? "hidden" : "block"} md:block text-black`}>
        {children}
      </span>
    </button>
  );
};

ButtonSidebar.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired, // Validasi untuk ikon
  onClick: PropTypes.func,
  className: PropTypes.string,
  collapsed: PropTypes.bool, // Prop baru untuk menentukan apakah collapsed
};

ButtonSidebar.defaultProps = {
  onClick: () => {},
  className: "",
  collapsed: false, // Default collapsed adalah false (teks terlihat)
};

export default ButtonSidebar;
