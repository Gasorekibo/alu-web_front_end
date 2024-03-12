function studentHogwarts() {
    let privateScore = 0;
    let name = null;

    
        function changeScoreBy(point) {
            privateScore += point;
        }
    return {
        setName: function(newName) {
            name = newName
        },
        rewardStudent: function(){
            changeScoreBy(1)
        },
        penalizeStudent: function() {
            changeScoreBy(-1);
        },
        getScore: function () {
            return `${name}: ${privateScore}`
        }
    }
}

//  ==== Rewarding Student ====

const harry = studentHogwarts();
harry.setName("Harry");

// Reward the student four times
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

// Log the name and score
console.log(harry.getScore()); //Harry: 4

// ==== Penalize Student ======

const darco = studentHogwarts();
darco.setName( "Darco" )
darco.rewardStudent();
darco.penalizeStudent()
darco.penalizeStudent()
darco.penalizeStudent()
console.log(darco.getScore()) //-2