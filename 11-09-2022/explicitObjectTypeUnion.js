var CDCivic = Math.random() < 0.5
    ? {
        model: "2022",
        make: "Civic",
        noOfDoors: 4
    }
    : {
        model: "2022",
        make: "Civic",
        kick: true
    };
console.log(CDCivic.make, CDCivic.model);
