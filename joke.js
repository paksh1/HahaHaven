let joke = {
    fetchjoke: function () {
        fetch("https://v2.jokeapi.dev/joke/Dark?blacklistFlags=nsfw,explicit,religious")
        .then((response) => response.json())
        .then((data) => this.displayjoke(data))
        .catch((err) => console.log(`There was an error an error fetching data:  ${err}`));
    },
    displayjoke: function(data) {
        const {type} = data;
        if(type == "single"){
            const {joke} = data;
            document.querySelector(".joke").innerText = joke;
        }
        if(type == "twopart"){
            const {setup, delivery} = data;
            document.querySelector(".joke").innerText = setup +"\n \n" + delivery;
        }
    },
    showjoke: function () {
        this.fetchjoke();
    }
};
document.querySelector(".btn").addEventListener("click", function(){
    joke.showjoke();
});
joke.fetchjoke();