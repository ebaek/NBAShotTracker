import Court from './court';
import Shots from './shots';
import Qbutton from './qbutton';
import Pie from './pie';

const CONSTANTS = {
    courtWidth: 500,
    courtHeight: 470,
    defaultSeason: "2017"
}

document.addEventListener("DOMContentLoaded", () => {
    const searchfield = document.querySelector("input");

    searchfield.oninput = (event) => {
        event.target.value === "" ? clearPlayerMenuResults() : debounceSearch(event);
    };

    randomButton();    
});

function randomButton() {
    const min = 2010;
    const max = 2017;
    const season = Math.floor(Math.random() * (max - min + 1)) + min;

    d3.selectAll(".lucky")
        .append("input")
        .property("type", "button")
        .attr("class", "randombutton")
        .attr("value", "I'm Feeling Lucky")
        .on("click", function(d, i) {
            d3.csv(`./dataset/${season.toString()}.csv`)
                .then(function (data) {
                    const player = data[Math.floor(Math.random() * data.length)];
                    const playerName = player.name;
                    const playerTeam = player.team_name;

                    drawChart(playerName, season);
                    loadPlayerGames(playerName, season);
                    displayGameBreakdownButton(playerName, season);

                    displayPlayerTeam(playerTeam);
                    displaySeasonSelector(season);

                    d3.selectAll(".searchfield").classed("initial", false);
                    d3.selectAll(".searchresults").classed("initialresults", false);
                    d3.selectAll(".searchfield").property("placeholder", playerName);

                    d3.selectAll(".lucky").remove();
                })
        })
}

const debounce = (func, delay) => {    
    let timeoutId;

    return (newArgs) => {
        const args = newArgs.target.value;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(args), delay);
    }
}

const debounceSearch = debounce((event) => playerMenu(event, CONSTANTS.defaultSeason), 300);

export function clearChart() {
    d3.select("svg").remove();
}

export function drawChart(playerName, season, date, period) {    
    clearChart();
    clearPies();

    let svg = d3.select("#svgcontainer")
        .append("svg").attr("width", CONSTANTS.courtWidth).attr("height", CONSTANTS.courtHeight);
    
    const court = new Court(svg);
    court.render();

    new Shots(svg, playerName, season, date, period);
}

function clearPlayerMenuResults() {
    d3.selectAll(".searchresults li").remove();
}

function clearSearch(playerName) {
    d3.selectAll(".searchfield")
        .property("value", "")
        .property("placeholder", playerName)
}

function playerMenu(searchText, season) {
    clearPlayerMenuResults();

    d3.csv(`./dataset/${season}.csv`)
        .then(function (data) {
            const searchLength = searchText.length;
            let players = {};

            data.forEach(player => {
                const fullName = player.name.split(" ")
                const lastName = fullName[fullName.length - 1];
                if ( (player.name.slice(0, searchLength).toLowerCase() === searchText.toLowerCase()
                    || lastName.slice(0, searchLength).toLowerCase() === searchText.toLowerCase())
                    && Object.keys(players).length <= 6 && !Object.keys(players).includes(player.name) ) {

                    d3.select(".searchresults")
                        .append("li")
                        .attr("class", "playeroption")
                        .text(player.name) 
                        .on("click", function (d, i) {
                            d3.selectAll(".searchfield").classed("initial", false);
                            d3.selectAll(".searchresults").classed("initialresults", false);
                            d3.selectAll(".quarters input").classed("qactive", false);

                            const playerName = d3.event.target.textContent;
                            clearSearch(playerName);
                            clearPlayerMenuResults();
                            clearPlayerGames();
                            
                            drawChart(playerName, season);
                            loadPlayerGames(playerName, season);
                            displayGameBreakdownButton(playerName, season);

                            displayPlayerTeam(players[player.name]);
                            displaySeasonSelector();

                            d3.selectAll(".lucky").remove();
                        })

                    players[player.name] = player.team_name;
                }
            });
        });
}

function loadPlayerGames(player, season) {
    d3.csv(`./dataset/${season}.csv`)
        .then(function (data) {
            const games = {};
            data.forEach(shot => {
                if(shot.name.toLowerCase() === player.toLowerCase() && games[shot.game_date] === undefined) {
                    games[shot.game_date] = [];
                    games[shot.game_date].push(shot.opponent);
                    games[shot.game_date].push(shot.team_name);
                }
            });
            displayPlayerGames(games, season);
            displayAllGamesButton(player, season);
        });
}

function displayPlayerTeam(team) {
    d3.selectAll(".teamseason h3").remove();

    d3.select(".teamseason").append("h3").text(`Team: ${team}`)
    d3.select(".teamseason").append("h3").text(`Search by Season`).classed("seasonlabel")

}

function displayAllGamesButton(playerName, season) {
    d3.select(".allshotsbutton").remove();

    const activeClass = "qactive";

    d3.select(".allbutton-div")
        .append("input")
        .property("type", "button")
        .property("value", `All ${season} Games`)
        .attr("class", "allshotsbutton")
        .on("click", function (d, i) {
            clearPies();
            drawChart(playerName, season);

            const alreadyIsActive = d3.select(this).classed(activeClass);

            d3.selectAll(".quarters input").remove();
            d3.selectAll(".games li").classed("selectedgame", false);
            d3.selectAll(".breakdownbutton").classed("qactive", false);

            d3.select(this).classed(activeClass, !alreadyIsActive);

        })
}

function sideScroll(element, direction, speed, distance, step) {
    let scrollAmount = 0;
    const slideTimer = setInterval(function () {
        direction == "left" ? element.scrollLeft -= step : element.scrollLeft += step;

        scrollAmount += step;

        if (scrollAmount >= distance) window.clearInterval(slideTimer);
    }, speed);
}

function displayPlayerGames(games, season) {
    d3.selectAll(".games li").remove();
    d3.selectAll(".search h3").remove();
    d3.selectAll(".leftarrow").remove();
    d3.selectAll(".rightarrow").remove();


    const allGames = games;
    const activeClass = "selectedgame";

    d3.select(".leftarr")
        .append("input")
        .property("type", "button")
        .attr("class", "leftarrow")
        .attr("value", "L")
        .on("click", function(d, i) {
            const container = d3.select('.games-div')._groups[0][0]
            sideScroll(container, "left", 25, 100, 10);
        })

    Object.keys(allGames).forEach( (date) => {
        const opp = allGames[date][0].split(" ");
        const oppTeamName = opp[opp.length - 1];
        
        const teamName = allGames[date][1];

        d3.select(".search").text("Search by Game")

        d3.select(".games")
            .append("li")
            .text(date)
            .append("img")
            .attr("class", "teamLogo")
            .property("src", `./assets/${oppTeamName}.png`)
            .on("click", function (d, i) {

                const playerName = d3.select(".searchfield")._groups[0][0].placeholder;
                const date = d3.event.target.parentElement.textContent;

                drawChart(playerName, season, date);
                displayQuarterButtons(playerName, season, date);
                displayPlayerTeam(teamName);

                const alreadyIsActive = d3.select(this).classed(activeClass);

                d3.selectAll(".games li").classed(activeClass, false);

                d3.selectAll(".breakdownbutton").classed("qactive", false);
                d3.selectAll(".quarters input").classed("qactive", false);

                d3.select(this.parentElement).classed(activeClass, !alreadyIsActive);
            })
    })

    d3.select(".rightarr")
        .append("input")
        .property("type", "button")
        .attr("class", "rightarrow")
        .attr("value", "R")
        .on("click", function (d, i) {
            const container = d3.select('.games-div')._groups[0][0]
            sideScroll(container, "right", 25, 120, 10);
        })
}

function clearPlayerGames() {
    d3.selectAll(".games li").remove();
}

function displayQuarterButtons(playerName, season, date) {
    d3.selectAll(".quarters input").remove();

    // all quarter buttons
    for(let i = 1; i < 5; i++) {
        const qNum = i;
        const quarter = "Q" + qNum.toString();
        new Qbutton(playerName, season, date, quarter);
    }

    // E 
    new Qbutton(playerName, season, date);
}

export function clearPies() {
    d3.selectAll("#svgcontainer svg").remove();
}

function displaySeasonSelector(selectedOption = 2018) {
    d3.select(".seasonselect-div select").remove();
    d3.select(".seasonlabel").remove();

    d3.select(".seasonselect-div").append("select");

    for(let i = 2018; i >= 2010; i--) {
        if(i === selectedOption) {
            d3.select(".seasonselect-div select")
                .append("option")
                .attr("selected", true)
                .property("value", `${i}`)
                .attr("label", `${i}`)
        } else {
            d3.select(".seasonselect-div select")
                .append("option")
                .property("value", `${i}`)
                .attr("label", `${i}`)
        }
        
    }
    const activeClass = "qactive";

    d3.select(".seasonselect-div select")
        .on("change", function (d, i) {
            const playerName = d3.select(".searchfield")._groups[0][0].placeholder;
            const season = d3.event.target.value;
            drawChart(playerName, season)
            displayGameBreakdownButton(playerName, season);
            loadPlayerGames(playerName, season);

            d3.selectAll(".quarters input").classed(activeClass, false);
        })
}

function getTeamname() {
    const teamName = d3.select(".teamseason h3")._groups[0][0].textContent.split(" ");
    return teamName.slice(1,teamName.length).join(" ");
}

function displayGameBreakdownButton(playerName, season) {
    d3.selectAll(".breakdownbutton").remove();

    d3.select(".breakdown-div")
        .append("input")
        .property("type", "button")
        .property("value", `Season Shot Breakdown`)
        .attr("class", "breakdownbutton")
        .on("click", function (d, i) {
            clearChart();
            clearPies();

            const svg = d3.select("svg");

            // made shots
            const pieMade = new Pie(svg, playerName);
            pieMade.madeMissedStats(season);

            // action type
            const pieAction = new Pie(svg, playerName);
            pieAction.shotActionStats(season);

            // shots by quarter 
            const pieQuarter = new Pie(svg, playerName);
            pieQuarter.shotQuarterStats(season);

            // shots by distance
            const pieDistance = new Pie(svg, playerName);
            pieDistance.shotDistanceStats(season);

            const teamName = getTeamname();

            // indiv v.s team shots
            const indivTeam = new Pie(svg, playerName);
            indivTeam.indivTeamStats(teamName, season);

            // indiv v.s. team made shots 
            const indivMadeTeam = new Pie(svg, playerName);
            indivMadeTeam.madeTeamStats(teamName, season);

            const activeClass = "qactive";
            const alreadyIsActive = d3.select(this).classed(activeClass);

            d3.selectAll(".quarters input").classed(activeClass, false);
            d3.selectAll(".allshotsbutton").classed(activeClass, false);

            d3.selectAll(".games li").classed("selectedgame", false);
            d3.select(this).classed(activeClass, !alreadyIsActive);
        })
}

