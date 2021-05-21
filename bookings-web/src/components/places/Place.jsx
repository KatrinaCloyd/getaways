import React from 'react';
import PropTypes from 'prop-types';
import style from '../app/app.css'

const Place = ({
  name,
  description,
  location,
  pricePerNight,
  image,
  imageThumbnail,
  maxGuests,
  petFriendly,
  pool,
  wifi,
}) => {
  return (
    <div className={style.placeCard}>
      <h3>{name}</h3>
      <p>{description}</p>
      <h4>{location}</h4>
      <p>Price Per Night: ${pricePerNight}</p>
      <img src={imageThumbnail} alt='getaway' className={style.detailImg} />
      <p>Max Guests: {maxGuests}</p>
      <p>{petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</p>
      {pool ? <p>Has a Pool!</p> : null}
      {wifi ? <p>Free Wifi</p> : null}
    </div>
  );
};

Place.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  imageThumbnail: PropTypes.string.isRequired,
  maxGuests: PropTypes.number.isRequired,
  petFriendly: PropTypes.bool.isRequired,
  pool: PropTypes.bool.isRequired,
  wifi: PropTypes.bool.isRequired,
};

export default Place;
