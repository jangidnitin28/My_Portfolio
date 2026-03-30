import myLogo from "../my_logo.png";

const NitinLogo = () => {
  return (
    <img
      src={myLogo}              // imported image ka reference
      alt="My Logo"
      className="w-full h-full object-contain"
    />
  );
};

export default NitinLogo;