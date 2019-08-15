import Court from './court';
import Shots from './shots';
import Widgets from './widgets';

const CONSTANTS = {
    courtWidth: 500,
    courtHeight: 470,
}

document.addEventListener("DOMContentLoaded", () => {
    const searchfield = document.querySelector("input");

    loadPlayerGames("Lebron James");

    searchfield.oninput = (text) => {
        text.target.value === "" ? clearPlayerMenuResults() : playerMenu(text.target.value);
    };
});

function clearChart() {
    d3.select("svg").remove();
}

function drawChart(playerName) {    
    let svg = d3.select("#svgcontainer")
        .append("svg").attr("width", CONSTANTS.courtWidth).attr("height", CONSTANTS.courtHeight);
    
    const court = new Court(svg);
    court.render();

    const shots = new Shots(svg, playerName);
}

function clearPlayerMenuResults() {
    d3.selectAll(".searchresults li")
        .remove();
}

function clearSearch(playerName) {
    d3.selectAll(".searchfield")
        .property("value", "")
        .property("placeholder", playerName)
}

function playerMenu(searchText) {
    clearPlayerMenuResults();

    d3.csv("../dataset/dataset.csv")
        .then(function (data) {
            const searchLength = searchText.length;
            let players = [];
            //set structure
            data.forEach(player => {
                // trim name (for spaces)
                if ( player.name.slice(0, searchLength).toLowerCase() === searchText.toLowerCase() 
                    && players.length <= 6 && !players.includes(player.name) ) {
                    d3.select(".searchresults")
                        .append("li")
                        .attr("class", "playeroption")
                        .text(player.name) 
                        .on("click", function (d, i) {
                            clearChart();
                            clearSearch(d3.event.target.textContent);
                            clearPlayerMenuResults()
                            drawChart(d3.event.target.textContent);
                        })

                    players.push(player.name);
                }
            });
        });
}

function loadPlayerGames(player) {
    d3.csv("../dataset/dataset.csv")
        .then(function (data) {
            const games = {};
            data.forEach(shot => {
                if(shot.name.toLowerCase() === player.toLowerCase() && games[shot.game_date] === undefined) {
                    games[shot.game_date] = shot.opponent;
                }
            });

            displayPlayerGames(games);
        });
}

function displayPlayerGames(games) {
    const allGames = games;
    
    Object.keys(allGames).forEach( (date) => {
        const opp = allGames[date].split(" ");
        const teamName = opp[opp.length - 1]; 

        d3.select(".games")
            .append("li")
            .text(date)
            .append("img")
            .attr("class", "teamLogo")
            .property("src", `../assets/${teamName}.png`)
    })
}
