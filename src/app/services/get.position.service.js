export function GetPositionService() {
  const getPosition = function () {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(
         function(position) {
            resolve(position);
         },
         function(error) {
            reject(error);
         }
      );
    });
  }
  const queryPosition = function () {
    return getPosition();
  };
  return {
    queryPosition
  };
}