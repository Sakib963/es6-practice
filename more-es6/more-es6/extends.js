class TeamMember {
    name;
    location;
    constructor (name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} Thank you for your feeedback`)
    }
}

class Instructor extends TeamMember{
    designation = 'Web Instructor';
    team = 'Web Team'
    constructor (name, location){
        super(name, location)
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`);
    }
    createQuiz(moduleNum){
        console.log(`Please create quiz for module ${moduleNum}`)
    }
}


class Developer extends TeamMember{
    designation = 'Web Instructor';
    team = 'Web Team';
    tech;
    constructor(name, location, tech){
        super(name, location)
        this.tech = tech;
    }
    developFeature(feature){
        console.log(`please develop the ${feature}`);
    }
    release(version){
        console.log(`Please release the version ${version}`)
    }
}

class JobPlacement extends TeamMember{
    designation = 'Job Placement Commandos';
    team = 'Job Placement';
    tech;
    constructor(name, location, tech){
        super(name, location)
        this.tech = tech;
    }
    provideResume(resume){
        console.log(`please provide the ${resume}`);
    }
    prepareStudent(version){
        console.log(`Please release the version ${version}`)
    }
}

const alia = new Developer('alia bhaat', 'dhaka', 'react')

alia.provideFeedback()

const bipasha = new JobPlacement('Bipasha', 'Kolkata', 'India')
console.log(bipasha)