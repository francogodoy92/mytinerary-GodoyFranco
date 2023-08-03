import "../index.css";

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full flex justify-between p-2 bg-gray-500 items-center">
      <section>
        <h1 className="font-medium text-lg">MyTinerary</h1>
        <img src="#" alt="logo" />
      </section>
      <section className="flex flex-col">
        <a href="#">Contact Us</a>
        <p>Franco Godoy</p>
        <p>AP MERN 07 TN</p>
      </section>
    </footer>
  );
}

export default Footer;