type Car = {
	model: string;
	make: string;
	noOfDoors: number;
	kick?: boolean;
};

type Bike = {
	model: string;
	make: string;
	kick: boolean;
	noOfDoors?: number;
};

type honda = Car | Bike;

const CDCivic: honda =
	Math.random() < 0.5
		? {
				model: "2022",
				make: "Civic",
				noOfDoors: 4,
		  }
		: {
				model: "2022",
				make: "Civic",
				kick: true,
		  };
console.log(CDCivic.make, CDCivic.model);
