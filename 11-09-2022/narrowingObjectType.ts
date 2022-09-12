type BCar = {
	model: string;
	make: string;
	noOfDoors: number;
};

type BBike = {
	model: string;
	make: string;
	kick: boolean;
};

type AHonda = BCar | BBike;

const B_CDCivic: AHonda = {
	model: "2022",
	make: "Civic",
	noOfDoors: 4,
};
const B_CD125: AHonda = {
	model: "2022",
	make: "Civic",
	kick: true,
};

function Show(vehicle: AHonda) {
	if ("kick" in vehicle) {
		console.log(vehicle.model, vehicle.make, vehicle.kick);
	} else if ("noOfDoors" in vehicle) {
		console.log(vehicle.model, vehicle.make, vehicle.noOfDoors);
	}
}

console.log(Show(B_CD125));
console.log(Show(B_CDCivic));
