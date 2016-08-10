export function packPrecip() {
  return input => {
    const precipWeek = {};
    precipWeek.width = input.length * 100;
    function PrecipRecord() {
      this.day = '';
      this.labelPosition = '';
      this.positionX = '';
      this.positionY = '';
    }
    input.forEach((item, index) => {
      const newRecord = new PrecipRecord();
      newRecord.day = item.convertedTime.day;
      newRecord.positionX = (index * 100) + 100;
      newRecord.positionY = 400 - (Math.round((Math.random() * 300)));
      precipWeek[index] = newRecord;
    });
    return precipWeek;
  };
}
