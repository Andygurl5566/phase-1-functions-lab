// Code your solution in this file!
 
// distance in blocks
function distanceFromHqInBlocks(pickupLocationinft){
    return Math.abs(pickupLocationinft - 42)
}


//distance from the HQ in feet
 function distanceFromHqInFeet(block) {
  let distance = distanceFromHqInBlocks(block)
    return distance * 264
 }

function distanceTravelledInFeet(start, finish){
  
return Math.abs(start-finish)*264
}

function calculatesFarePrice(start, destination){
    let fareDistance = distanceTravelledInFeet( start, destination)

    if(fareDistance<=400){
         return 0
        }
    else if(fareDistance>400, fareDistance<=2000){
        return .02*(fareDistance-400)
        } 
    else if (fareDistance>2000, fareDistance<=2500){
        return 25
    }
    else if (fareDistance>2500){
        return "cannot travel that far"
    }


    }


