import React from "react";
import '../App.css';

function About() {
  return (
    <div className='pageBody aboutPage'>
      <div className='container aboutContainer'>
        <section className='aboutSection'>
          <div className='aboutHeader'>
            <h2 className='sectionTitle'>Meet the Designer</h2>
            <div className='designerContent'>
              <div className='designerImageWrapper'>
                <img 
                  className='aboutUsProfileImg' 
                  src='https://ik.imagekit.io/r596hampx/creator.jpg' 
                  alt="Gabe Atallah, Principal Designer" 
                />
              </div>
              <div className='designerText'>
                <p>
                  Gabe Atallah, principal of Amoretalla Couture, began his career working for the
                  prestigious Bridal House Priscilla of Boston, the couturier famous for working
                  on the wedding gown of Princess Grace of Monaco and designing the gowns of
                  three daughters of two U.S. Presidents. A graduate of the School of Fashion Design (Boston, MA),
                  Mr. Atallah’s design aesthetics use fit, form, and function to create each legendary gown.
                </p>
                <p>
                  Mr. Atallah designs for the modern bride, seamlessly incorporating timeless
                  opulence using hand-sewn Haute Couture techniques. His fabrics, laces,
                  pearls, and genuine Swarovski crystals, including precious stones, are curated from around the world.
                </p>
                <p>
                  Mr. Atallah has been sketching and designing since the age of eight. His inspiration for fashion
                  comes from traveling the world and being immersed in the beauty of nature, art, and architecture. 
                  Mr. Atallah was born in Beirut, Lebanon, once known as Paris of the Middle East, and is the proud father of three children.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='aboutSection'>
          <div className='aboutHeader'>
            <h2 className='sectionTitle'>Our Story</h2>
            <div className='storyContent'>
              <div className='storyImageWrapper'>
                <img 
                  className='aboutStoryImg' 
                  src='/images/amoreBlack.png' 
                  alt="Amoretalla Couture Logo" 
                />
              </div>
              <div className='storyText'>
                <p>
                  Amoretalla Bridal is a childhood dream-come-true for proprietor and head designer Gabe Atallah.
                  As an 8-year-old in war-torn Lebanon, Mr. Atallah was inspired to fashion a wedding gown from drapes his Teta discarded.
                  While that first attempt certainly resembled a wedding gown, it never quite made it down the aisle.
                  But the thrill of creation has sent Mr. Atallah on an award-winning journey of textile design.
                </p>
                <p>
                  In late 2022, Mr. Atallah opened Amorétalla, his atelier in Salem, N.H.,
                  and began threading life into his sketches of bridal wear he designed to ensure brides radiate beauty,
                  confidence, and joy on their big day. Each piece is handmade using only carefully curated fabrics, laces, and crystals.
                  Designs are strategically engineered to ensure brides move freely and elegantly without ever compromising style.
                </p>
                <p>
                  Keenly aware that today’s brides may want more than one look,
                  Mr. Atallah’s collection includes pieces that seamlessly convert from a traditional ceremonial gown
                  to a short-and-sassy number ready to rock the after party. A single dress can offer up to three different looks.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='aboutSection'>
          <h2 className='sectionTitle'>Publications</h2>
          <div className='publicationContent'>
            <a 
              className='pubLink' 
              href='http://books.vowsmagazine.com/books/vngq/#p=39' 
              target='_blank' 
              rel='noreferrer'
            >
              VOWS MAGAZINE <br />OCTOBER 2023
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;