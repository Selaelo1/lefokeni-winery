
import React from 'react';
import './Events.css';
import { events } from './Data';

const Events = () => {
  return (
    <div id="events" className="events-section">
      <h2 className="section-title">Upcoming Events</h2>
      <p>
        Join us for unforgettable experiences at Lefokeni Winery! 
        From wine tastings to vineyard tours, our events are designed 
        to bring people together and create lasting memories. 
        Come, indulge in the beauty of our vineyards, savor our 
        exceptional wines, and make new friends. We can't wait 
        to welcome you!
      </p>


      {/* Featured Event */}
      <div className="featured-event">
        <div className="video-container">
          <video src={events[0].video} controls />
          <div className="event-details">
          <h3>{events[0].name}</h3>
          <p>
            {events[0].date} | {events[0].venue} | {events[0].time}
          </p>
          <p>Cost: {events[0].cost}</p>
          <p>{events[0].description}</p>
        </div>
        </div>
        <div className="event-details">
          <h3>{events[0].name}</h3>
          <p>
            {events[0].date} | {events[0].venue} | {events[0].time}
          </p>
          <p>Cost: {events[0].cost}</p>
          <p>{events[0].description}</p>
        </div>
      </div>

      
      <div className="future-events">
        {events.slice(1).map((event, index) => (
          <div key={(event.id)} className={`event ${index % 2 === 0 ? 'left-image' : 'right-image'}`}>
            <div className="image-container">
              <img src={event.image} alt={event.name} />
            </div>
            <div className="event-info">
              <h3>{event.name}</h3>
              <p>
                {event.date} | {event.venue} | {event.time}
              </p>
              <p>Cost: {event.cost}</p>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;




