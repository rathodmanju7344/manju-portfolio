import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss';

const Portfolio = () => {
   return (
      <section id="portfolio" className="portfolio">
         <PageHeaderContent
            headerText="My Portfolio"
            icon={<BsInfoCircleFill size={40} />}
         />
         <div className="portfolio__content-wrapper">
            <div className="portfolio__content-wrapper__inner-content">
               <Animate
                  play
                  duration={1}
                  delay={0.3}
                  start={{
                     transform: "translateX(-200px)",
                  }}
                  end={{
                     transform: "translateX(0px)",
                  }}
               >
               <h3 className="portfolio__content-wrapper__inner-content__category-text">
                  I am waiting for an opportunity to build a strong portfolio.
               </h3>
               </Animate>
            </div>
         </div>
      </section>
   )
}
export default Portfolio;