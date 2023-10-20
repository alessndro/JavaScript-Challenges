import podcasts from "./data.js";

/* Welcome Aboard Scrimba Airlines 


export default [
    {
        id: 1,
        title: "Scrimba Podcast", 
        duration: 50, 
        tags: ["education", "jobs", "technology"], 
        hosts: ["Alex Booker"], 
        rating: 10,
        genre: "education",
        paid: false
    },
    {

Your sort function should take two arguments: the podcast data and
flight length. If the flight is 60 minutes or less, sort the podcast list 
from shortest to longest. If it's anything else, sort from longest
to shortest. 

Your function shouldn't return anything. Instead log a numbered list 
of the title and duration of 
each podcast to the console, like this:

1. Crime Fan, 150 minutes
2. Mythical Creatures, 99 minutes
3. Crime Crime Crime, 70 minutes
4. Coding Corner, 55 minutes
5. Scrimba Podcast, 50 minutes
6. Something about Witches, 35 minutes

*/

function sortByDuration(data, flightLength){
  if (flightLength <= 60)
  {
      data.sort((item1, item2) => {
          return item1.duration - item2.duration 
      })
  }
  else
  {
      data.sort((item1, item2) => {
          return item2.duration - item1.duration 
      })
  }
  console.log(data)
}

sortByDuration(podcasts, 70);
