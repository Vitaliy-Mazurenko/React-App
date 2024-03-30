export default interface ITask {
	title: string;
	name: string;
	description?: string;
	date: string;
	status: string;
	priority: 'Low' | 'Medium' | 'High'; 
}