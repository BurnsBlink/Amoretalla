import React from "react";
import '../App.css';

function About() {
  return (
    <div className='pageBody'>
      <div className='container'>
        <img className='aboutUsProfileImg "col-md-8">' src='https://ik.imagekit.io/r596hampx/GabeProPic_xTeHgOctT.jpg' alt="" />
        <h3>MEET THE DESIGNER</h3><br></br>
        <p>
          Gabe Atallah, principal of Amoretalla Couture, began his career working for the
          prestigious Bridal House Priscilla of Boston, the couturier famous for working
          on the wedding gown of Princess Grace of Monaco and designing the gowns of
          three daughters of two U.S. Presidents. A graduate of the School of Fashion Design (Boston, MA),
          Mr. Atallah’s design aesthetics use fit, form and function to create each legendary gown.
          <br></br><br></br>
          Mr. Atallah designs for the modern bride, seamlessly incorporating timeless
          opulence using hand-sewn Haute Couture techniques. His fabrics, laces,
          pearls and genuine Swarovski crystals, including precious stones, are curated from around the world.
          <br></br><br></br>
          Mr. Atallah has been sketching and designing since the age of eight. His inspiration for fashion
          comes from traveling the world and being immersed in the beauty of nature, art and architecture. Mr. Atallah was born in
          Beirut, Lebanon, once known as Paris of the Middle East, and is the proud father of three children.
        </p>

        <h3 className="aboutUsContent">OUR STORY</h3><br></br>
        <p>
          Amoretalla Bridal Is a childhood dream-come-true for proprietor and head designer Gabe Atallah.
          As an 8-year-old in war-torn Lebanon, Mr. Atallah was inspired to fashion a wedding gown from drapes his Teta was discarded.
          While that first attempt certainly resembled a wedding gown, it never quite made it down the aisle.
          But the thrill of creation has sent Mr. Atallah on an award-winning journey of textile design.
        <br></br><br></br>
          In late 2022, Mr. Atallah opened Amorétalla, his atelier in Salem, N.H.,
          and began threading life into his sketches of bridal wear he designed to ensure brides radiate beauty,
          confidence and joy on their big day. Each piece is handmade using only carefully curated fabrics, laces and crystals.
          Designs are strategically engineered to ensure brides move freely and elegantly without ever compromising style.
        <br></br><br></br>
          Keenly aware that today’s brides may want more than one look,
          Mr. Atallah’s collection includes pieces that seamlessly convert from a traditional ceremonial gown
          to a short-and-sassy number ready to rock the after party. A single dress can offer up to three different looks.
        </p>

        <div className='row'>
          <h4 className='col mainTitleText'>PUBLICATIONS</h4>
        </div>
        <div className='row'>
          <a className='pubLink' href='http://books.vowsmagazine.com/books/vngq/#p=39' target='_blank' rel='noreferrer'>VOWS MAGAZINE <br></br>OCTOBER 2023</a>
        </div>
      </div>
    </div>
  );
}

export default About;
