
import Nav from './components/home/nav';
import Home from './components/home/home';
import BestSelling from './components/content/best/bestSelling.jsx';
import About from './components/content/about/about.jsx';
import Gallery from './components/content/gallery/gallery.jsx';
import Mailing from './components/content/mail/mailing.jsx';
import Footer from './components/content/footer/footer.jsx';
import Chatbot from './components/chatbot/chatbot.jsx';

function App() {
  return (
    <div className="App">
     <Nav />
     <Home/>
     <BestSelling/>
     <About/>
     <Gallery/>
     <Mailing/>
     <Footer/>
     <Chatbot/>
    </div>
  );
}

export default App;
