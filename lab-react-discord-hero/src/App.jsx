import "./App.css";
import Logo from "./assets/components/header/logo";
import Menu from "./assets/components/header/menu";
import Title from "./assets/components/titles/title";
import Paragraph from "./assets/components/paragraphs/paragraph";
import Button from "./assets/components/buttons/button";
import Image from "./assets/components/images/image";

function App() {
  return (
    <>
      <header className="header">
        <Logo />
        <Menu />
      </header>
      <div className="content">
        <Title />
        <Paragraph />
        <Button type="light" text="Download for Mac" />
        <Button type="dark" text="Open Discord in your browser" />
      </div>
      <div className="footer">
        <Image className="image-container" />
      </div>
    </>
  );
}

export default App;
