const findTheOldest = function(array) {
    const result = array.reduce((oldest, currentperson)=>{
        const oldestAge = getpeopleAge(oldest.yearOfBirth,oldest.yearOfDeath)
        const currentpersonAge = getpeopleAge(currentperson.yearOfBirth,currentperson.yearOfDeath) 
        return oldestAge < currentpersonAge ? currentperson : oldest
    })
    return result
};

function getpeopleAge(dob, deathday){
    if(!deathday){
        deathday = new Date().getFullYear()
    }
    return deathday - dob
}


// Do not edit below this line
module.exports = findTheOldest;
