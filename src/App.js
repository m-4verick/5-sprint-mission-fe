import "./App.css";
import Header from "./widgets/Header/Header";
import Content from "./widgets/Content/Content";
import Footer from "./widgets/Footer/Footer";

function App() {
  return (
    <div role="application">
      <Header />
      <main>
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default App;
