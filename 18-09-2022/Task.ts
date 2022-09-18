function ShowTables(times: number, ...tables: number[]) {
	for (let table of tables) {
		for (let j = 1; j <= times; j++) {
			console.log(`${table} x ${j} = ${table * j}`);
		}
		console.log("***********************************");
	}
}
ShowTables(10, 2, 3);
