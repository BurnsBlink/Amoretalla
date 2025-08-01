// src/components/Events.js
import React from 'react';
import '../App.css';

const getEventImageUrl = (baseUrl, width = 800) => {
  const fileIdMatch = baseUrl.match(/id=([^&]+)/) || baseUrl.match(/\/d\/([^/]+)/);
  const fileId = fileIdMatch ? fileIdMatch[1] : baseUrl.split('/')[5]?.split('&')[0];
  const googleUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w${width}`;
  return `${process.env.REACT_APP_PROXY_URL}/api/proxy-image?url=${encodeURIComponent(googleUrl)}`;
};

const EventItem = ({ event }) => (
  <a
    href={event.link}
    className="eventLink"
    target="_blank"
    rel="noreferrer"
    aria-label={`Visit ${event.title} event page`}
  >
    <div className="event-item">
      <div className="event-image-col">
        <img
          src={getEventImageUrl(event.image)}
          alt={`${event.title} event`}
          className="event-image"
          loading="lazy"
        />
      </div>
      <div className="event-details-col">
        <h2 className="eventTitle">{event.title}</h2>
        <p className="eventDate">{event.date}</p>
        <p className="eventLocation">{event.location}</p>
        <p className="eventCity">{event.city}</p>
        <p className="eventBooth">{event.booth}</p>
      </div>
    </div>
  </a>
);

const Events = () => {
  const events = [
    {
      title: 'National Bridal Market',
      date: '8/17 - 8/19',
      location: '222 Merchandise Mart Plaza',
      city: 'Chicago, IL 60654',
      booth: 'Booth #1094',
      link: 'https://www.nationalbridalmarket.com/',
      image: 'https://drive.google.com/thumbnail?id=1RqN57kPQqdEIN67hpQIdppkk4iSa--LA',
    },
    {
      title: 'New York Bridal Fashion Week',
      date: '10/14 - 10/16',
      location: '417 5th Ave',
      city: 'Manhattan, NY 10016',
      booth: 'Showroom 5B',
      link: 'https://fashionweekonline.com/bridal',
      image: 'https://drive.google.com/thumbnail?id=1xA43mrUV6bznrmHrBxw2P8_qjc3BSpCY',
    },
  ];

  if (!events.length) {
    return <div className="pageBody">No upcoming events</div>;
  }

  return (
    <div className="pageBody">
      <div className="event-header">
        <img
          src="https://ik.imagekit.io/r596hampx/eventMain.jpg?tr=w-1200,q-80"
          alt="Upcoming Events banner"
          className="event-header-image"
          loading="lazy"
        />
        <h1 className="event-header-title">Upcoming Events</h1>
      </div>
      <div className="container">
        <div className="event-container">
          {events.map((event) => (
            <EventItem key={event.title} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;