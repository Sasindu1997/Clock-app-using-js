 setInterval(setClock, 1000)//setting up the intervals with 1000ms

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand')
const secondHand = document.querySelector('[data-second-hand')


 function setClock(){//setting up the clock
     const currentDate = new Date()
     const secondsRatio = currentDate.getSeconds() / 60
     const minutesRatio = (secondsRatio + currentDate.getMinutes())/60
     const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
     setRotation(secondHand, secondsRatio)
     setRotation(minuteHand, minutesRatio)
     setRotation(hourHand, hoursRatio)
 }

 function setRotation(element, rotationRatio){//setting up rotaions of the hands around 
     element.style.setProperty('--rotation', rotationRatio * 360)
 }

 //to avoid initializing the clock hands when refreshing the page
 setClock()