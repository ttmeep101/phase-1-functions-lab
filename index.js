// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    if(blocks >= 42) {
        return blocks - 42;
    } else {
        return (blocks - 42)*-1;
    };
}

function distanceFromHqInFeet(val){
    return distanceFromHqInBlocks(val)*264;
}

function distanceTravelledInFeet(start,end){
    if(start-end >= 0){
        return (start-end)*264;
    } else {
        return (start-end)*-264;
    }
}

function calculatesFarePrice(start,end){
    if(distanceTravelledInFeet(start,end) <= 400){
        return 0;
    } else if(distanceTravelledInFeet(start,end) <= 2000){
        return 0.02*(distanceTravelledInFeet(start,end)-400);
    } else if(distanceTravelledInFeet(start,end) <=2500){
        return 25;
    } else{
        return 'cannot travel that far';
    };
}