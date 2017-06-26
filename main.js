/*
  Here is a guide for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
let artistSearch = document.querySelector.(input.artistSearch);
let trackList = document.querySelector.(div.trackList);

let page_size = 15;

// 2. Create your `onSubmit` event for getting the user's search term
document.addEventListener("submit", artistSearch, false);

function artistSearch(e) {
  SC.get("/tracks", {
  q:"artistSearch"}).then(function(trackList) {
  console.log(trackList);
});

// 3. Create your `fetch` request that is called after a submission
fetch("https://connect.soundcloud.com/sdk/sdk-3.1.2.js")
  then (function(response){
    return response.json();
  })

  then(function(json){
    let foundArtist = json[0];
    let trackName = foundArtist.trackName;

  })
// 4. Create a way to append the fetch results to your page
SC.get('/tracks', { limit: page_size }).then(function(tracks) {
  res.render(foundArtist.trackName);
});

// 5. Create a way to listen for a click that will play the song in the audio play
