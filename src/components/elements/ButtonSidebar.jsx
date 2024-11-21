import PropTypes from "prop-types";

const ButtonSidebar = ({ children, icon }) => {
  return (
    <button className="w-full p-2 md:p-4 flex gap-6 items-center text-xl text-[#646567] rounded-lg hover:bg-[#17A9E2] hover:text-white">
      {icon}
      <span className="hidden md:block">{children}</span>
    </button>
  );
};

export default ButtonSidebar;

ButtonSidebar.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
};
