var access_token = 'BQCYuErQ6cjsqjQt48-ye-AzH2iy_SxLB7wnC4sGftKQePwFwnwBky26eplFQK5-XcwAhg-XGo3MMFVmCQeljt3bA6_XIQRrSY8LZ8B07McoH96k7GUxkuyAf4YY9wRdn6b80FkNVUXdLZ7wOYSrvjIxpDajLqmwcOrph7gqCq0Vw2J6r8avu5uUf2Du0MdOHIo'
//'BQCJkssl_qHX9UmmR6ziaz05ZV_giiHjsUigKONIJJoBuOm-i8otGgBZA5S4AGFnrARP2ssQTOHlxlKbNg80XUOmvWBKg7sqShKoJF_Dx6VLJbWBaFrlCmcaPad0aeaVF-emheG5SBRHN0b8AwOqtm_4xYPRH6dhcNJqtuZSJyshnvtZPMLGRB4M5DmPOtFyicA'
//'BQACruLYSaIMJfbOMhujRDAWZapZAa4NkCuOdXs8Y5M-nEptN43eqJQosMN9og7VLS9YzneLLzPcEWjsXNv3qUVJP-wNkJGqUwYE98TaIMCukRBTBbchLlDkngBxlFVBvxCOwt2xQSDOhiRGd8FbWlytoBSliwOhOmtevJoQWsQ3g1G-gf_DKIpaIJpbIYYvNsY'

var options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token 
    }
}
var play = document.querySelector("play");
play.addEventListener("click", function () {
    fetch('https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02/albums', options)
    .then(response => response.json)
    .then(data => console.log("data"))
    .then(alert("here"))
})

var button = document.querySelector("login");

button.addEventListener("click", function(){
  alert("SOMEONE CLICKED THE BUTTON!!");
});
