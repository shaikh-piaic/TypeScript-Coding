var A_CDCivic = Math.random() > 0.5
    ? {
        model: "2022",
        make: "Civic",
        noOfDoors: 4,
        kick: false
    }
    : {
        model: "2022",
        make: "Civic",
        kick: true,
        noOfDoors: 0
    };
console.log(A_CDCivic.kick, A_CDCivic.make, A_CDCivic.model, A_CDCivic.noOfDoors);
