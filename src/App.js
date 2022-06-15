import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Themes from "./components/Themes";
import Installer from "./assets/peekabook-installer.apk";

function App() {
  return (
    <div className="bg-blue-light md:bg-[url('./assets/blob-bg.png')] md:bg-cover md:bg-no-repeat ">
      <Navbar />
      <div className="container mx-auto flex flex-col">
        <h1 className="py-6 text-center font-erica text-5xl md:text-6xl md:mb-32">Peek A' Book</h1>
        <Content />
        <div className="flex flex-col justify-center items-center space-y-4 p-12 md:p-0 mb-16">
          <h2 className='font-kanit text-2xl text-center'>Download de app en probeer het zelf!</h2>
          <a className='bg-purple px-10 py-2 rounded-2xl text-white font-kanit text-xl tracking-wider' href={require("./assets/peekabook-installer.apk")} download>Download app</a>
        </div>
        <Themes />
        <div className="flex justify-center p-12 md:p-0 mb-32">
          <h2 className="text-center font-kanit text-2xl underline cursor-pointer">Bekijk hier meer thema's</h2>
        </div>
      </div>
    </div>
  );
}

export default App;