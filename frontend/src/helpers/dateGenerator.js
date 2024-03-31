export default function dateGenerator(d) {
	function getWeekDay(date) {
		let dayWeek = new Date(date);
		return dayWeek.toLocaleString('en-EN', {
		  weekday: 'short'
		});
	  }
	return  `${getWeekDay(d)}, ${d.getDate()} ${d.toLocaleString('en-EN', { month: 'short' })}
	`;
}
