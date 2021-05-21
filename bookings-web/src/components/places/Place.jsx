import React from 'react';
import PropTypes from 'prop-types';
import style from '../app/app.css'
import Loading from '../app/Loading';
import { Link } from 'react-router-dom';

const Place = ({
  id,
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
    <>
      <Link to={`/${id}`} className={style.placeCard}>
        <h3 className={style.hotelName}>{name}</h3>
        <p>{description}</p>
        <h4>{location}</h4>
        <p>Price Per Night: ${pricePerNight}</p>
        <img src={imageThumbnail} alt='getaway' className={style.detailImg} />
        <ul>
          <li>Max Guests: {maxGuests}</li>
          <li>{petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</li>
          {pool ? <li>Has a Pool!</li> : null}
          {wifi ? <li>Free Wifi</li> : null}
        </ul>
      </Link>
    </>
  );
};

Place.propTypes = {
  id: PropTypes.string.isRequired,
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
