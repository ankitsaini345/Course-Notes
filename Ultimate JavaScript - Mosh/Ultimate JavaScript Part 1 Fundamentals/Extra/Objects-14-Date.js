const now = new Date();
//Expected Output: 2020-10-31T01:23:41.029Z
console.log(now);
//new Date(dateString) creates a new date object from a date string:
//Expected Output: 2018-05-11T04:00:00.000Z
const date1 = new Date('May 11 2018 0900');
console.log(date1);

//parametersDate(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date

const date2 = new Date(2018, 4, 11, 9, 0);//output: 2018-05-11T13:00:00.000Z
console.log(date2);
//month is 0 based 0 = Jan, 11= december

//each date object has get and set methods
