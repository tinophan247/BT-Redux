/* eslint-disable react/prop-types */

const SeatRows = ({ seatRows, numberSeatRows }) => {

  const renderSeat = () => {
    return seatRows.listSeat.map((item, index) => {
      let cssSelectedSeat = "";
      let disabled = false;
      //Trạng thái ghế đã bị người khác đặt rồi
      if (item.booked) {
        cssSelectedSeat = "selectedSeat";
        disabled = true;
      }


      return <button disabled={disabled} className={`seat ${cssSelectedSeat} `} key={index}>
          {item.numberSeat}
      </button>
    });
  };

  const renderRows = () => {
    return seatRows.listSeat.map((item, index) => {
      return <button className="rowNumber" key={index}>{item.numberSeat}</button>;
    });
  };

  const  renderSeatRows = () => {
    if (numberSeatRows === 0) {
        return <div className="ml-4">
            {seatRows.row} 
            {renderRows()}
        </div>
    } else {
        return <div>
            {seatRows.row} 
            {renderSeat()}
        </div>
    }

}

  return (
    <div
      className="text-white text-left ml-5 mt-1"
      style={{ fontSize: 30 }}
    >
        {renderSeatRows()}
    </div>
  );
};

export default SeatRows;
