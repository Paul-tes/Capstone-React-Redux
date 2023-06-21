import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getRockets, bookRocket, cancelBooking } from '../redux/rockets/rocketsSlice';
import './style/Rocket.css';

export default function Rocket() {
  const dispatch = useDispatch();

  const { rockets, isLoading, error } = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);
  return (
    <>
      {isLoading && <div className="alert alert-info">Loading ........</div>}
      {error && (
        <div className="alert alert-danger">
          Ooops! Something happened whiles fetching data
        </div>
      )}
      {!isLoading
        && Object.entries(rockets).map(([id, rocket]) => (
          <div key={id} className="rocket">
            <img src={rocket.flickr_images[0]} alt="rockets" width={250} height={200} />
            <div>
              <p className="details">{rocket.name}</p>
              <p className="description">
                {rocket.reserved && <span className="badge">Reserved</span>}
                {rocket.description}
              </p>
              {
                rocket.reserved
                  ? (<button className="btn-cancel" type="button" onClick={() => dispatch(cancelBooking(rocket.id))}>Cancel Reservation</button>)
                  : (<button className="btn-reserve" type="button" onClick={() => dispatch(bookRocket(rocket.id))}>Reserve Rocket</button>)
              }
            </div>
          </div>
        ))}
    </>
  );
}
