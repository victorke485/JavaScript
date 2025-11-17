let x = new Date();
console.log(x, typeof x);

console.log(new Date(2025, 0, 12, 4, 45));

console.log(`Year: ${new Date().getFullYear()}`);
console.log(`Month: ${new Date().getMonth()}`);
console.log(`Day: ${new Date().getDate()}`);
console.log(`Hour: ${new Date().getHours()}`);
console.log(`Minutes: ${new Date().getMinutes()}`);
console.log(`Seconds: ${new Date().getSeconds()}`);

// Time API
console.log(Intl.DateTimeFormat('en-US').format(new Date()));
console.log(Intl.DateTimeFormat('en-GB').format(new Date()));
console.log(Intl.DateTimeFormat('en-GB', { month: 'long' }).format(new Date()));

console.log(new Date().toLocaleString('en-GB', { month: '2-digit' }));
