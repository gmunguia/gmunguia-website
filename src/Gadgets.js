import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Gadgets.css";

import backpackImage from "./backpack.jpg";
import keyboardImage from "./keyboard.jpg";
import penImage from "./pen.jpg";

const affiliateLinks = {
  backpack:
    "https://www.amazon.es/North-Face-Borealis-Mochila-Negro/dp/B00OS2NUT4/ref=as_li_ss_tl?s=sports&ie=UTF8&qid=1522251695&sr=1-1&keywords=north+face+borealis&linkCode=ll1&tag=gmunguia-21&linkId=1e68f64d838363b7ceaaf1231c9a0042",
  keyboard: {
    pcb:
      "https://www.aliexpress.com/item/xd75re-Custom-Mechanical-Keyboard-75-keys-TKG-TOOLS-Underglow-RGB-PCB-GH60-60-programmed-gh60-kle/32818745981.html",
    case:
      "https://www.aliexpress.com/store/product/stainless-steel-bent-case-for-xd75-60-custom-keyboard-acrylic-panels-acrylic-diffuser/3034003_32821659665.html",
    keys:
      "https://www.aliexpress.com/item/Cool-Jazz-pbt-keycap-dsa-1u-mixded-color-green-yellow-blue-white-Transparent-keycaps-for-gaming/32830177884.html?spm=2114.search0104.3.3.7c0637edxHCBlK&ws_ab_test=searchweb0_0,searchweb201602_1_10152_10151_10065_10344_10068_10547_10342_10343_10340_10548_10341_10696_10084_10083_10618_10307_10301_10303_10313_10059_10184_10534_100031_10103_10624_10623_10622_10621_10620,searchweb201603_50,ppcSwitch_5&algo_expid=42b7fe33-1fe2-4453-bde7-30fc3490f640-0&algo_pvid=42b7fe33-1fe2-4453-bde7-30fc3490f640&priceBeautifyAB=0",
    switches:
      "https://www.aliexpress.com/store/product/gateron-switches-3pin-5pin-blue-red-black-brown-green-white-white-green-for-custom-mechnical-keyboard/3034003_32815810102.html?spm=2114.12010612.0.0.770077caOJnfsv"
  },
  pen:
    "https://www.amazon.es/TWSBI-vac700r-l%C3%A1piz-Pluma-estilogr%C3%A1fica/dp/B06XY5BFY2/ref=as_li_ss_tl?ie=UTF8&qid=1522250321&sr=8-1&keywords=twsbi+vac700r&linkCode=ll1&tag=gmunguia-21&linkId=c6a1dd12917c3bc57ccef45d2ad4e200"
};

class Gadgets extends Component {
  render() {
    return (
      <div className="Gadgets">
        <div className="Gadgets__container">
          <header className="Gadgets__header">
            <nav className="Gadgets__back">
              <Link to="/">{"↜"}</Link>
            </nav>
            <h1>Gadgets</h1>
          </header>
          <main>
            <p>
              A curated list of artifacts that symbolize a pact with{" "}
              <s>materialism</s>.
            </p>
            <ul className="Gadgets__list">
              <li>
                <a href={affiliateLinks.backpack} className="Gadgets__item">
                  <div className="Gadgets__item-text">
                    <h3 className="Gadgets__item-title">
                      Backpack: The North Face {'"'}Borealis{'"'}
                    </h3>
                    <p className="Gadgets__item-description">
                      Confortable, durable, waterproof, high-capacity... I
                      bought it a few years ago, and never looked back.
                    </p>
                  </div>
                  <div className="Gadgets__item-image">
                    <img alt="" src={backpackImage} />
                  </div>
                </a>
              </li>
              <li className="Gadgets__item">
                <div className="Gadgets__item-text">
                  <h3 className="Gadgets__item-title">Keyboard: xd75</h3>
                  <p className="Gadgets__item-description">
                    Ortholinear, minimalist keyboard. Fully programmable and
                    easy to mount.
                  </p>
                  <ul className="Gadgets__item-parts">
                    <li className="Gadgets__item-part">
                      <a href={affiliateLinks.keyboard.pcb}>Board (PCB)</a>
                    </li>
                    <li className="Gadgets__item-part">
                      <a href={affiliateLinks.keyboard.case}>Steel case</a>
                    </li>
                    <li className="Gadgets__item-part">
                      <a href={affiliateLinks.keyboard.keys}>Keycaps</a>
                    </li>
                    <li className="Gadgets__item-part">
                      <a href={affiliateLinks.keyboard.switches}>Switches</a>
                    </li>
                  </ul>
                </div>
                <div className="Gadgets__item-image">
                  <img alt="" src={keyboardImage} />
                </div>
              </li>
              <li>
                <a href={affiliateLinks.pen} className="Gadgets__item">
                  <div className="Gadgets__item-text">
                    <h3 className="Gadgets__item-title">Pen: TWSBI vac 700R</h3>
                    <p className="Gadgets__item-description">
                      High quality, inexpensive fountain pen with a simple
                      vacuum filler mechanism and elegant design. An extremely
                      good choice for everyday writing.
                    </p>
                  </div>
                  <div className="Gadgets__item-image">
                    <img alt="" src={penImage} />
                  </div>
                </a>
              </li>
            </ul>
          </main>
        </div>
      </div>
    );
  }
}

export default Gadgets;
