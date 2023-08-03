import Nav from "./Nav";

import "../index.css";

function Header() {
  return (
    <header className="fixed top-0 w-full flex justify-between p-2 h-[10vh] bg-gray-500 items-center">
      <section className="flex gap-3">
        <h1 className="font-medium text-lg">MyTinerary</h1>
        <img src="" alt="logo" />
      </section>
      <Nav />
    </header>
  );
}

export default Header;
