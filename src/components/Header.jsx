const Header = () => {
  return (
    <header className="flex flex-row justify-between p-4 text-white h-[90px]">
      <img
        className="w-6 h-6 flex-start"
        src="../public/Icons/menu.svg"
        alt="Menu"
      />
      <img
        className="w-6 h-6 flex-end"
        src="../public/Icons/Search-icon.svg"
        alt="Search"
      />
    </header>
  );
};
export default Header;
