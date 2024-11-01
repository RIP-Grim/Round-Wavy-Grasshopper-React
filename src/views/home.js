import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Hero17 from '../components/hero17'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Round Wavy Grasshopper</title>
        <meta property="og:title" content="Round Wavy Grasshopper" />
      </Helmet>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text10">Explore Now</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text11">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text12">
              Discover proxies and games and use them to your hearts content
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text13">
              <span>Welcome to My Website</span>
              <br></br>
            </span>
          </Fragment>
        }
        image1Src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxnYW1pbmd8ZW58MHx8fHwxNzMwNDcxNjc5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image2Src="https://images.unsplash.com/photo-1721332155637-8b339526cf4c?ixid=M3w5MTMyMXwxfDF8c2VhcmNofDE1fHxnYW1pbmd8ZW58MHx8fHwxNzMwNDcxNjc5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image4Src="https://images.unsplash.com/photo-1721332154161-847851ea188b?ixid=M3w5MTMyMXwxfDF8c2VhcmNofDIyfHxnYW1pbmd8ZW58MHx8fHwxNzMwNDcxNjc5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image5Src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxnYW1pbmd8ZW58MHx8fHwxNzMwNDcxNjc5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image6Src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI1fHxnYW1pbmd8ZW58MHx8fHwxNzMwNDcxODc3fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image7Src="https://images.unsplash.com/photo-1573053986275-840ffc7cc685?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxnYW1pbmd8ZW58MHx8fHwxNzMwNDcxNjc5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image8Src="https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGdhbWluZ3xlbnwwfHx8fDE3MzA0NzE2Nzl8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image9Src="https://images.unsplash.com/photo-1668554245893-2430d0077217?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGdhbWluZ3xlbnwwfHx8fDE3MzA0NzE2Nzl8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image10Alt="Main Image"
        image10Src="https://images.unsplash.com/photo-1721332155567-55d1b12aa271?ixid=M3w5MTMyMXwxfDF8c2VhcmNofDh8fGdhbWluZ3xlbnwwfHx8fDE3MzA0NzE2Nzl8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image11Alt='&lt;img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9gGz8hiWFM39PHIC1aljSewNKCmPe1KYcw&amp;amp;s" alt="Minimalist Ryomen Sukuna Stickers - Get ..."/&gt;'
        image11Src="https://images.unsplash.com/photo-1721332153282-3be1f363074d?ixid=M3w5MTMyMXwxfDF8YWxsfDIxfHx8fHx8fHwxNzMwNDcwMzY2fA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image12Src="https://images.unsplash.com/photo-1504370164829-8c6ef0c41d06?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM3fHxnYW1pbmd8ZW58MHx8fHwxNzMwNDcxODc3fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        rootClassName="hero17root-class-name"
      ></Hero17>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text16">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text17">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text18">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text19">Contact Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text20">FAQ</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text21">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text22">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text23">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
