export default function NavBar() {
  return (
    <nav className="flex justify-between p-4 md:p-5">
      <img className="h-8 md:h-10 lg:h-12" src="/icons/menu.svg" />
      <img className="h-8 md:h-10 " src="/icons/search.svg" />
    </nav>
  );
}
