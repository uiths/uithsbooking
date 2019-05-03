import React from 'react';
function renderTv(isTv) {
  if (isTv)
    return (<React.Fragment><br></br><i className="fa fa-tv"> TV</i><br></br></React.Fragment>);
}
function renderWifi(isWifi) {
  if (isWifi)
    return (<React.Fragment><br></br><i className="fa fa-wifi"> Wifi</i><br></br></React.Fragment>);
}
function renderConditioner(isConditioner) {
  if (isConditioner)
    return (<React.Fragment><br></br><i className="fa fa-asterisk"> Máy điều hòa</i><br></br></React.Fragment>);
}
function renderWashing(isWashing) {
  if (isWashing)
    return (<React.Fragment><br></br><i className="fa fa-cube"> Máy giặt</i><br></br></React.Fragment>);
}
function renderElevator(isElevator) {
  if (isElevator)
    return (<React.Fragment><br></br><i className="fa fa-angle-up"> Thang máy</i><br></br></React.Fragment>);
}
function renderFridge(isFridge) {
  if (isFridge)
    return (<React.Fragment><br></br><i className="fa fa-cube"> Tủ lạnh</i><br></br></React.Fragment>);
}
export function RentalAssets(props) {

  return (
    <div>
      {renderTv(props.rental.isTv)}
      {renderWifi(props.rental.isWifi)}
      {renderConditioner(props.rental.isConditioner)}
      {renderWashing(props.rental.isWashing)}
      {renderFridge(props.rental.isFridge)}
      {renderElevator(props.rental.isElevator)}

    </div>

  )
}
