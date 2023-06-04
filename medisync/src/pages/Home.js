import { Benefits, Demo, Feedback, Footer, Header, Joinus, Whyus} from '../containers';
import { Navbar, Feature } from '../components';

const Home = () => {
  return (
    <div>
        <div className="Home">
          <Navbar />
          <Header />
          <Feature />
          <Benefits />
          <Demo />
          <Whyus />
          <Feedback />
          <Joinus />
          <Footer />
        </div>
    </div>
  )
}

export default Home