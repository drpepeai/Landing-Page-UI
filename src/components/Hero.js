import React, { useRef, useEffect, useState } from "react";
import {  useNavigate } from 'react-router-dom';


import "./hero.css";
import capsulepepe_gif from "../assets/capsulepepe_gif.gif";
import squarearrow from "../assets/up-right-arrow-grey.svg";
import squarearrowgrey from "../assets/up-right-arrow-grey-opaque.svg";
import l_bottom_left from "../assets/l_bottom_left.svg";
import l_bottom_right from "../assets/l_bottom_right.svg";
import l_top_right from "../assets/l_top_right.svg";
import l_top_left from "../assets/l_top_left.svg";
import drpepeai_title from "../assets/drpepea_title_vipnagorgialla.svg";
import TypewriterEffect from "./TypewriterEffect";
import drpepelogowired from "../assets/drpepelogo-wired.svg";
import solanalogo_circle from "../assets/solana-logo-s.svg"

const Hero = () => {
  const gridRef = useRef(null);
  const navigate = useNavigate();


  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const openTelegramLink = () => {
    const mobileLink = 'tg://resolve?domain=drpepeaiOFFICIAL'; 
    const webLink = 'tg://resolve?domain=drpepeaiOFFICIAL'; 

    if (isMobile) {
      window.location.href = mobileLink;
    } else {
      window.open(webLink, '_blank', 'noopener noreferrer');
    }
  };

  const openXLink = () => {
    const webLink = 'https://x.com/drpepeai'; 
    window.open(webLink, '_blank', 'noopener noreferrer');
  };

  const openAmbassadorLink = () => {
    const webLink = 'https://drpepe.typeform.com/EternalsProgram'; 
    window.open(webLink, '_blank', 'noopener noreferrer');
  };

  const openDocsLink = () => {
    const webLink = 'https://docs.drpepe.ai/';
    window.open(webLink, '_blank', 'noopener noreferrer');

  }

  const openJupiter = () => {
    const webLink ='https://jup.ag/tokens/BrYANThKaAbjZZH5XWLrw26NzMbfUNmBwbZiMe4Fj5Mk'
    window.open(webLink, '_blank', 'noopener noreferrer');
  }

  const openHumanAgent = () => {
    const webLink ='https://agent.drpepe.ai/'
    window.open(webLink,'noopener noreferrer');
  }
  const openDogAgent = () => {
    const webLink ='https://www.doglife.ai/'
    window.open(webLink,'noopener noreferrer');
  }





  const fullCA = "BrYANThKaAbjZZH5XWLrw26NzMbfUNmBwbZiMe4Fj5Mk";
  const [contractAddress, setContractAddress] = useState(fullCA);

  const truncateAddress = () => {
    const width = window.innerWidth;
    
    if (width < 1200) {
      setContractAddress(fullCA.slice(0, 6) + "..." + fullCA.slice(-4)); // Shortest truncation
    } else if (width < 1300) {
      setContractAddress(fullCA.slice(0, 10) + "..." + fullCA.slice(-6)); // Medium truncation
    } else if (width < 1400) {
      setContractAddress(fullCA.slice(0, 14) + "..." + fullCA.slice(-8)); // Longer truncation
    } else {
      setContractAddress(fullCA); // Full address on larger screens
    }
  };

  useEffect(() => {


    const gridItems = gridRef.current.querySelectorAll(".grid-item");

    truncateAddress(); // Initial check
    window.addEventListener("resize", truncateAddress);
    

    // Elastic grid animation
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      gridItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const distanceX = clientX - (rect.left + rect.width / 2);
        const distanceY = clientY - (rect.top + rect.height / 2);
        const distance = Math.hypot(distanceX, distanceY);

        const maxDistance = 200;
        const intensity = 1 - Math.min(distance / maxDistance, 1);

        const translateX = -intensity * (distanceX / distance) * 20;
        const translateY = -intensity * (distanceY / distance) * 20;

        item.style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    };


    const handleMouseLeave = () => {
      gridItems.forEach((item) => {
        item.style.transform = "translate(0, 0)";
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", truncateAddress);

    
    };
  }, []);







  return (
    <div className="container">


      {/* Grid */}
      <div ref={gridRef} className="elastic-grid">
        {[...Array(64)].map((_, index) => (
          <div key={index} className="grid-item" />
        ))}
      </div>
      {/* 4 Corner Words */}
      <div className="corner-text bottom-left">
        <img src={l_bottom_left} alt="l" height={15} />
      </div>
      <div className="corner-text bottom-right">
        <img src={l_bottom_right} alt="l" height={15} />
      </div>
      <div className="corner-text top-left">
        <img src={l_top_left} alt="l" height={15} />
      </div>
      <div className="corner-text top-right">
        <img src={l_top_right} alt="l" height={15} />
      </div>
      {/* Top desktop */}
      <div className="container-top-desktop">

            <div className="capsule-image-container">
              <img src={capsulepepe_gif} alt="capsulepepe" className="capsulepepe" />
              <TypewriterEffect />
            </div>

            <div className="landing-text-container">

              <div className="logo-wired">
                <img src={drpepelogowired} alt="drpepe logo" width={70} />
              </div>

              <div className="overlay-text-title">
                <img src={drpepeai_title} alt="drpepe title" />
              </div>

              <div className="overlay-text-subtitle-one">
              An AI agent designed to help you live forever
              </div>


              <div className="agents-container">

                <div className="square-arrow-text-container">

                  <div onClick={openHumanAgent} className="overlay-text-subtitle-three human-agent-link">Human Agent v.0 1</div>
          
                  <img src={squarearrow} alt="squarearrow" className="squarearrow" />
                </div>

                <div className="square-arrow-text-container">
                  <div className="overlay-text-subtitle-three animal-text">Dog Agent v.0 1</div>
                  <img src={squarearrow} alt="squarearrow" className="squarearrow animal-arrow" />
                </div>

                <div className="square-arrow-text-container">
                  <div className="overlay-text-subtitle-three animal-text">Cat Agent v.0 1</div>
                  <img src={squarearrowgrey} alt="squarearrow" className="squarearrow animal-arrow" />
                </div>

              </div>

            </div>
      </div>
      {/* Bottom desktop */}
      <div className="landing-cta-container">

               
                  <div onClick={openJupiter} className="footer-link-text solana-ca-container">
                    <span>
                      <img src={solanalogo_circle} alt="solana logo" height={12} style={{ marginRight: "8px" }} /> 
                  
                      <span style={{ fontSize: "16px" }}>BUY ON SOLANA</span>
                    </span>
                      CA: {contractAddress}
                  </div>

                <div onClick={openTelegramLink}  className="footer-link-text ">﹝Join The Community﹞</div>
                <div onClick={openXLink} className="footer-link-text">﹝X @drpepeai﹞</div>
                <div onClick={openAmbassadorLink} className="footer-link-text">﹝Become an Ambassador﹞</div>
                <div onClick={openDocsLink} className="footer-link-text">﹝Docs﹞</div>

      </div>

      {/* Top mobile */}
      <div className="container-top-mobile">
          <div className="mobile-logo-wired-container">
            <img src={drpepelogowired} alt="drpepe logo" width={35} />
          </div>
          <TypewriterEffect />


        <div className="">

          <div className="mobile-title-subtitle-container">

            <div className="mobile-title"> 
              <img src={drpepeai_title} alt="drpepe title" width={200} />
            </div>

            <div className="mobile-subtitle">
            An AI agent designed to help you live forever
            </div>
            
          </div>


          <div className=" mobile-pepe-capsule-container">
            <img src={capsulepepe_gif} alt="capsulepepe" className="mobile-capsule" />
          </div>


          <div className="agents-container">

            <div className="mobile-agent-text-arrow-container">
              <div  onClick={openHumanAgent} className="agent-text-mobile">Human Agent v.0 1</div>
              <img src={squarearrow} alt="squarearrow" className="" width={10} />
              ↗
            </div>

            <div className="mobile-agent-text-arrow-container">
              <div className="agent-text-mobile animal-text-mobile">Dog Agent v.0 1</div>
              <img src={squarearrow} alt="squarearrow" className="" width={10} />
              ↗
            </div>

            <div className="mobile-agent-text-arrow-container">
              <div className="agent-text-mobile animal-text-mobile">Cat Agent v.0 1</div>
              <img src={squarearrowgrey} alt="squarearrow" className="" width={10} />
              ↗
            </div>

          </div>

        </div>

      </div>

      {/* Bottom mobile */}
      <div className="landing-cta-mobile-container">

      <div className="cta-container-mobile-first">
            <div  onClick={openJupiter}  className="text-cta-mobile parenthesis-text">﹝Buy on Solana﹞</div>
            <div  onClick={openXLink}  className="text-cta-mobile parenthesis-text">﹝Follow on X @drpepeai﹞</div>
            <div onClick={openTelegramLink} className="text-cta-mobile parenthesis-text">﹝Join Telegram﹞</div>
            <div  onClick={openAmbassadorLink}  className="text-cta-mobile parenthesis-text">﹝Become an Ambassador﹞</div>
      </div>



      <div className="ca-container-mobile">
        <div  className="text-cta-mobile ca-mobile">CA:BrYANThKaAbjZZH5XWLrw26NzMbfUNmBwbZiMe4Fj5Mk</div>
      </div>

      <div  onClick={openDocsLink} className="text-cta-mobile cta-docs-mobile ">﹝Docs﹞</div>
      </div>

    </div>
  );
};

export default Hero;
