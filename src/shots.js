const CONSTANTS = {
    ROWS: 50,
    COLS: 47,
    WIDTH: 550,
    HEIGHT: 470,
    SHOT_OPACITY: "0.7",
}

class Shots {
    constructor(svg, playerName, season, date, period) {
        this.svg = svg;
        this.played = false;

        d3.csv(`./dataset/${season}.csv`)
            .then(function (d) {
                d.forEach(player => {
                    const dateConditional = date === undefined ? true : player.game_date === date;
                    const periodConditional = period === undefined ? true : player.period === period;

                    if (player.name === playerName && dateConditional && periodConditional) {
                        this.played = true;
                        if (player.shot_made_flag === "1"){
                            this.render([player.x, player.y], "made");
                        } else {
                            this.render([player.x, player.y], "missed");
                        }
                    }
                })
                // render unavailable message if player did not play in season
                if(!this.played) this.renderUnavailable();
            }.bind(this))
    }

    hexCenters() {
        const centers = [];

        for(let i = 0; i < CONSTANTS.ROWS; i++) {
            for(let j = 0; j < CONSTANTS.COLS; j++) {
                // Math.sqrt(3) ~ 1.75
                centers.push([this.hexRadius * j * 1.75, this.hexRadius * i * 1.5]);
            }
        }
        return centers;
    }

    renderUnavailable() {
        this.svg.append("text")
            .attr("x", 50)
            .attr("y", 150)
            .attr("dy", ".35em")
            .attr("font-size", 34)
            .attr("font-family", "Oswald")
            .text("Player Injured / Not Yet Drafted")
            .style("fill", "#D5D5D5")
    }

    render(playerPos, shotFlag) {
        const hexbin = d3.hexbin().radius(5);

        if(shotFlag === "made") {
            this.svg.append("g")
                .selectAll(".hexagon")
                .data(hexbin([playerPos]))
                .enter().append("path")
                .attr("d", function (d) {
                    return "M" + d.x + "," + d.y + hexbin.hexagon();
                })
                .attr("stroke", "white")
                .attr('transform', 'translate(250, 52.5)')
                .attr("fill", "skyblue")
                .attr("fill-opacity", CONSTANTS.SHOT_OPACITY)
                .attr("stroke-width", "0.1px");
        } else if (shotFlag === "missed") {
            this.svg.append("g")
                .selectAll(".hexagon")
                .data(hexbin([playerPos]))
                .enter().append("path")
                .attr("d", function (d) {
                    return "M" + d.x + "," + d.y + hexbin.hexagon();
                })
                .attr("stroke", "white")
                .attr('transform', 'translate(250, 52.5)')
                .attr("fill", "darkred")
                .attr("fill-opacity", CONSTANTS.SHOT_OPACITY)
                .attr("stroke-width", "0.1px");
        }
    }

    
}

export default Shots;