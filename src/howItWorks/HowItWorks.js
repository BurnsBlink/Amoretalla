import React from 'react';
import '../App.css';

const getImageSrcSet = (baseUrl) => ({
  src: `${baseUrl}?tr=w-1200,q-80`,
  srcSet: `${baseUrl}?tr=w-600,q-80 600w, ${baseUrl}?tr=w-800,q-80 800w, ${baseUrl}?tr=w-1200,q-80 1200w, ${baseUrl}?tr=w-1600,q-80 1600w`,
});

const HowItWorks = () => {
  const image = getImageSrcSet('https://ik.imagekit.io/r596hampx/howItWorks_YS7GFTUIi.jpeg');

  const steps = [
    {
      number: '1',
      title: '1: CONSULTATION',
      body: (
        <>
          Conceptual meeting with Gabe Atallah where you establish general direction for the dress.<br />
          Live sketching by the designer.<br /><br />
          <em>Please bring any inspiration images that may help us understand your vision</em>
        </>
      ),
    },
    {
      number: '2',
      title: '2: FIRST FITTING',
      body: 'The first fitting to determine the perfect fit, silhouette, and design lines.',
    },
    {
      number: '3',
      title: '3: SECOND FITTING',
      body: (
        <>
          The second fitting is of your garment.<br />
          At this fitting we are making sure all ideas & inspiration are incorporated.
        </>
      ),
    },
    {
      number: '4',
      title: '4: THIRD FITTING',
      body: (
        <>
          At third fitting your dress is almost fully assembled.<br />
          At this fitting we are perfecting fit and hemlines.
        </>
      ),
    },
    {
      number: '5',
      title: '5: FINAL FITTING',
      body: 'The dress is tried on one last time before the client takes it home.',
    },
  ];

  return (
    <div className="pageBodyHowItWorks">
      <div className="hiw-header">
        <img
          src={image.src}
          srcSet={image.srcSet}
          alt="How It Works banner"
          className="event-header-image"
          loading="lazy"
        />
        <h1 className="event-header-title">How It Works</h1>
      </div>
      <div className="container">
        <section className="hiw-container" aria-label="How It Works steps">
          {steps.map((step) => (
            <div key={step.number} className="hiw-step row">
              <div className="col">
                <h3 className="hiw-title">{step.title}</h3>
                <p className="hiw-body">{step.body}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;