// syntactic sugar
class Instructor{
    name;
    designation = 'Web Instructor';
    team = 'Web Team';
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`);
    }
    createQuiz(moduleNum){
        console.log(`Please create quiz for module ${moduleNum}`)
    }
}

const aamir = new Instructor('aamir', 'Mumbai')
// aamir.startSupportSession(11)
// aamir.createQuiz(34)
// console.log(aamir)


const solaiman = new Instructor('solaiman Khan', 'Dhaka')
console.log(solaiman.name);