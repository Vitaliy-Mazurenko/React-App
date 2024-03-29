export default interface ITask {
	title: string;
	description?: string;
	date: string;
	status: string;
	priority: 'Low' | 'Medium' | 'High'; 
}