export function PackPrecip() {
	return function(input){
		let precipWeek = {};
		precipWeek.width = input.length * 100;

		function precipRecord() {
		    this.day = '';
		    this.labelPosition= '';
		    this.positionX = '';
		    this.positionY = '';
		}
		input.forEach(function(item, index){
			let newRecord = new precipRecord;
			newRecord.day =item.convertedTime.day;
			newRecord.positionX = (index * 100) + 100;
			newRecord.positionY = 400 - (Math.round((Math.random() * 300)));
			precipWeek[index] = newRecord;
		});
		return precipWeek;	
	};
}