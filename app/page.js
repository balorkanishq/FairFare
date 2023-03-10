import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />

    <div className="relative">
      {/* <GetStarted /> */}
      <div className="gradient-02 z-0" />
      {/* <Hero /> */}
      <div className="gradient-03 z-0" />
    </div>
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      {/* <Explore /> */}
    </div>
    <div className="relative">
      <div className="gradient-04 z-0" />
      {/* <WhatsNew /> */}
    </div>
    <div className="relative">
      {/* <Insights /> */}
      <div className="gradient-03 z-0" />
      <Feedback />
    </div>
    <Footer />
    <GetStarted />
  </div>
);

export default Page;
