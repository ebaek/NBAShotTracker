import Court from './court';
import Shots from './shots';
import Qbutton from './qbutton';
import Widgets from './widgets';

const CONSTANTS = {
    courtWidth: 500,
    courtHeight: 470,
}

document.addEventListener("DOMContentLoaded", () => {
    const searchfield = document.querySelector("input");

    searchfield.oninput = (text) => {
        text.target.value === "" ? clearPlayerMenuResults() : playerMenu(text.target.value);
    };
});

export function clearChart() {
    d3.select("svg").remove();
}

export function drawChart(playerName, date, period) {    
    clearChart();

    let svg = d3.select("#svgcontainer")
        .append("svg").attr("width", CONSTANTS.courtWidth).attr("height", CONSTANTS.courtHeight);
    
    const court = new Court(svg);
    court.render();

    const shots = new Shots(svg, playerName, date, period);
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
                            const playerName = d3.event.target.textContent;
                            clearSearch(playerName);
                            clearPlayerMenuResults();
                            clearPlayerGames();

                            drawChart(playerName);
                            loadPlayerGames(playerName);
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
            clearAllGamesButton();
            displayAllGamesButton(player);
        });
}

function clearAllGamesButton() {
    d3.select(".allshotsbutton").remove();
}

function displayAllGamesButton(playerName) {
    const activeClass = "qactive";

    d3.select(".allbutton-div")
        .append("input")
        .property("type", "button")
        .property("value", "All Games")
        .attr("class", "allshotsbutton")
        .on("click", function (d, i) {
            drawChart(playerName);

            const alreadyIsActive = d3.select(this).classed(activeClass);

            d3.selectAll(".quarters input")
                .classed(activeClass, false);

            d3.select(this).classed(activeClass, !alreadyIsActive);
        })
}

function displayPlayerGames(games) {
    const allGames = games;
    
    Object.keys(allGames).forEach( (date) => {
        const opp = allGames[date].split(" ");
        const teamName = opp[opp.length - 1]; 

        d3.select(".search")
            .text("Search by Game")

        d3.select(".games")
            .append("li")
            .text(date)
            .append("img")
            .attr("class", "teamLogo")
            .property("src", `../assets/${teamName}.png`)
            .on("click", function (d, i) {
                // d3.event.target.parentElement.parentElement.children.classList.remove("selectedgame");
                d3.event.target.parentElement.classList.toggle("selectedgame");
                const playerName = d3.select(".searchfield")._groups[0][0].placeholder;
                const date = d3.event.target.parentElement.textContent;
                drawChart(playerName, date);
                
                displayQuarterButtons(playerName, date);
            })
    })
}

function clearPlayerGames() {
    d3.selectAll(".games li")
        .remove();
}

function displayQuarterButtons(playerName, date) {
    d3.selectAll(".quarters input")
        .remove();

    // all quarter buttons
    for(let i = 1; i < 5; i++) {
        const qNum = i;
        const quarter = "Q" + qNum.toString();
        new Qbutton(playerName, date, quarter);
    }

    // E 
    new Qbutton(playerName, date);
}

