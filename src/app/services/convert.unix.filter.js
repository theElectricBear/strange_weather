export function ConvertUnix() {
	const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	return function(input){
		let time = new Date(input * 1000);
		let converted = {};
		converted.year = time.getFullYear();
		converted.month = monthNames[time.getMonth()];
		converted.date = time.getDate();
		converted.day = dayNames[time.getDay()];
		return converted;	
	};
}