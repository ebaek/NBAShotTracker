import Court from './court';
import Shots from './shots';

const CONSTANTS = {
    courtWidth: 500,
    courtHeight: 470,
}

document.addEventListener("DOMContentLoaded", () => {
    draw("Jimmy Butler");
    const searchfield = document.querySelector("input");
    
    searchfield.oninput = (text) => {
        debugger
        playerMenu(text.target.value);
    };
});

function draw(playerName) {
    let svg = d3.select("#svgcontainer")
        .append("svg").attr("width", CONSTANTS.courtWidth).attr("height", CONSTANTS.courtHeight);

    const court = new Court(svg);
    court.render();

    const shots = new Shots(svg, playerName);
}

function playerMenu(searchText) {
    let resultCount = 0;

    d3.csv("../dataset/nba_savant.csv")
        .then(function (data) {
            debugger
            const searchLength = searchText.length;

            data.forEach(player => {
                if (player.name.slice(0, searchLength).toLowerCase() === searchText.toLowerCase() && resultCount <= 6) {
                    d3.select(".searchresults")
                        .append("li")
                        .text(player.name)                    
                    resultCount += 1;
                }
            })

        })
}


    // d3.csv("../dataset/nba_savant.csv")
    //     .then(function (data) {
    //         const selector = d3.select("body")
    //             .append("select")
    //             .attr("id", "playerSelector")
    //             .selectAll("option")
    //             .data(data)
    //             .enter().append("option")
    //             .text(function (d) { return d.name; })
    //             .attr("value", function (d, i) {
    //                 return i;
    //             });
    //     })
            
    //         let i = Math.round(Math.random() * data.length);
    //         d3.select("#playerSelector").property("selectedIndex", i);

    //         d3.select("body")
    //             .append("p")
    //             .data(data)
    //             .text(function (d) {
    //                 return data[i]['team_name'];
    //             })

    //         d3.select("#playerSelector")
    //             .on("change", function (d) {
    //                 i = this.value;
    //                 update();
    //             })
            
    //         function update() {
    //             d3.selectAll("p")
    //                 .data(data)
    //                 .text(function (d) {
    //                     return data[i]['team_name'];
    //                 })
    //         }
        // })
// }