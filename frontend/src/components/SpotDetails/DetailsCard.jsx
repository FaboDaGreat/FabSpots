

const DetailsCard = ({ spot }) => {
  return (
    <div>
      <h1>{spot.name}</h1>
      <div>
        <span>{`${spot.city}, ${spot.state}, ${spot.country}`}</span>
      </div>
      <div>
      <img src={spot.SpotImages[0].url} />
        </div>
    </div>
  );
};

export default DetailsCard;