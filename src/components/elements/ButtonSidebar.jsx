import PropTypes from "prop-types";

const ButtonSidebar = ({ children, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full p-2 md:p-4 flex gap-6 items-center text-md text-[#646567] rounded-lg hover:bg-[#17A9E2] hover:text-white"
      aria-label={children}
    >
      {icon}
      <span className="hidden md:block">{children}</span>
    </button>
  );
};

ButtonSidebar.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
  onClick: PropTypes.func,
};

ButtonSidebar.defaultProps = {
  onClick: () => {},
};

export default ButtonSidebar;
