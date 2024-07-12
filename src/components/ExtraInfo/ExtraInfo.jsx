const ExtraInfo = () => {
  return (
    <div id="extraInfo">
      <div className="col">
        <div className="info">
          <h5>High</h5>
          <p id="tempMax"></p>
        </div>
      </div>
      <div className="col">
        <div className="info">
          <h5>Low</h5>
          <p id="tempMin"></p>
        </div>
      </div>
    </div>
  );
};

export default ExtraInfo;
