// Rover Object Goes Here
// ======================
var rover={
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: []
}
var command='';
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction){
    case 'N':
    rover.direction='W'
    break;
    case 'W':
    rover.direction='S'
    break;
    case 'S':
    rover.direction='E'
    break;
    case 'E':
    rover.direction='N'
    break;
    default:
    console.log('no valid direction')
    break;
  }
  
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction){
    case 'N':
    rover.direction='E'
    break;
    case 'E':
    rover.direction='S'
    break;
    case 'S':
    rover.direction='W'
    break;
    case 'W':
    rover.direction='N'
    break;
    default:
    console.log('no valid direction')
    break;
  }
  
}

function moveForward(rover){
  console.log("moveForward was called")
  switch(rover.direction){
    case 'N':
    rover.x-=1
    break;
    case 'W':
    rover.y-=1
    break;
    case 'S':
    rover.x+=1
    break;
    case 'E':
    rover.y+=1
    break;
    default:
    console.log('no valid direction')
  }
  
}

function moveBackwards(rover){
  console.log('moveBackwords was called');
  switch(rover.direction){
    case 'N':
    rover.x+=1
    break;
    case 'W':
    rover.y+=1
    break;
    case 'S':
    rover.x-=1
    break;
    case 'E':
    rover.y-=1
    break;
    default:
    console.log('no valid direction')
  }
}

function goTo(command){
  for(var i=0;i<command.length;i++){
    switch(command[i]){
      case 'f':
      moveForward(rover)
      break;
      case 'l':
      turnLeft(rover)
      break;
      case 'r':
      turnRight(rover)
      break;
      case 'b':
      moveBackwards(rover)
      break;
      default:
      console.log('Invalid direction')
      break;
    }
  }
  if(rover.x>9){
    var xString=rover.x.toString();
    var xLastDigit=parseInt(xString[xString.length-1])
    rover.x=xLastDigit;
  }
  if(rover.x<0){
    var xNegStr=rover.x.toString();
    var xNegLastDigit=parseInt(xNegStr[xNegStr.length-1]);
    rover.x=-xNegLastDigit+10;
  }

  if(rover.y>9){
    var yString=rover.y.toString();
    var yLastDigit=parseInt(yString[yString.length-1])
    rover.y=yLastDigit;
  }
  if(rover.y<0){
    var yNegStr=rover.y.toString();
    var yNegLastDigit=parseInt(yNegStr[yNegStr.length-1]);
    rover.y=-yNegLastDigit+10;
  }

  console.log('The rover is facing '+rover.direction+' in position: '+rover.x+' ,'+rover.y);

  var arrayPos=[]
  arrayPos.push(rover.direction,rover.x,rover.y)  ;
  rover.travelLog.push(arrayPos)
  
}


