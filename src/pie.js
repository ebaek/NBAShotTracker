const CONSTANTS = {
    WIDTH: 200,
    HEIGHT: 200,
    MARGIN: 40,
    CSV: "../dataset/dataset.csv",
}

class Pie {
    constructor(svg, playerName) {
        this.svg = svg;
        this.playerName = playerName;
    }

    madeMissedStats(timeline) {
        const that = this;

        d3.csv(CONSTANTS.CSV).then( function(data) {
            const madeMissed = [
                { name: "Made", value: 0 }, 
                { name: "Missed", value: 0 }];

            data.forEach( (shot) => {
                if(shot.name.toLowerCase() === that.playerName.toLowerCase()) {
                    shot.shot_made_flag === "1" ? madeMissed[0]["value"] += 1 : 
                        madeMissed[1]["value"] += 1;
                }
            })
            return madeMissed;
        }).then((stats) => { this.render(stats, "FG"); });
    }

    shotActionStats() {
        const that = this;

        d3.csv(CONSTANTS.CSV).then(function (data) {
            // dunk/ layup
            // jumpshots
            // hooks

            // const shotActionsList = [
            //     {name: "Alley Oop Dunk", value: 0},
            //     {name: "Alley Oop Layup", value: 0},
            //     {name: "Driving Bank Hook", value: 0},
            //     {name: "Driving Dunk", value: 0},
            //     {name: "Driving Finger Roll Layup", value: 0},
            //     {name: "Driving Hook", value: 0},
            //     {name: "Driving Layup", value: 0},
            //     {name: "Driving Reverse Layup", value: 0},
            //     {name: "Driving Slam Dunk", value: 0},
            //     {name: "Dunk", value: 0},
            //     {name: "Fadeaway Bank", value: 0},
            //     {name: "Fadeaway Jump", value: 0},
            //     {name: "Finger Roll Layup Shot", value: 0},
            //     {name: "Floating Jump", value: 0},
            //     {name: "Hook Bank", value: 0},
            //     {name: "Hook Shot", value: 0},
            //     {name: "Jump Bank Hook", value: 0},
            //     {name: "Jump Bank", value: 0},
            //     {name: "Jump Shot", value: 0}];

            const shotActionsList = [
                {name: "Dunk/ Layup", value: 0},
                {name: "Jumpshot", value: 0},
            ]

            data.forEach( (shot) => {
                if (shot.name.toLowerCase() === that.playerName.toLowerCase()) {
                    const shotAction = shot.action_type.toLowerCase();

                    if(shotAction.includes("dunk") || shotAction.includes("layup") || shotAction.includes("hook")) {
                        shotActionsList[0].value += 1;
                    } else if (shotAction.includes("jump")) {
                        shotActionsList[1].value += 1;
                    }
                }
            })

            return shotActionsList;
            
        }).then((stats) => { this.render(stats, "Shot Type"); });
    }

    indivTeamStats(teamName) {
        const that = this;

        d3.csv(CONSTANTS.CSV).then(function (data) {
            const indivTeam = [
                { name: "Individual", value: 0 },
                { name: "Team", value: 0 }];

            data.forEach((shot) => {
                if(shot.team_name.toLowerCase().includes(teamName.toLowerCase())) {
                    shot.name.toLowerCase() === that.playerName.toLowerCase() ? 
                        indivTeam[0].value += 1 : indivTeam[1].value += 1
                }
            });

            return indivTeam;
        }).then((stats) => { this.render(stats, "FGA vs Team"); });
    }

    madeTeamStats(teamName) {
        const that = this;

        d3.csv(CONSTANTS.CSV).then(function (data) {
            const indivTeam = [
                { name: "Individual", value: 0 },
                { name: "Team", value: 0 }];

            data.forEach((shot) => {
                if (shot.team_name.toLowerCase().includes(teamName.toLowerCase())) {
                    shot.name.toLowerCase() === that.playerName.toLowerCase() && shot.shot_made_flag === "1" ?
                        indivTeam[0].value += 1 : indivTeam[1].value += 1
                }
            });

            return indivTeam;
        }).then((stats) => { this.render(stats, "FGM vs Team"); });
    }

    shotQuarterStats() {
        const that = this;

        d3.csv(CONSTANTS.CSV).then(function (data) {
            const quarterStats = [
                { name: "Q1", value: 0 },
                { name: "Q2", value: 0 },
                { name: "Q3", value: 0 },
                { name: "Q4", value: 0 }
            ];

            data.forEach((shot) => {
                if (shot.name.toLowerCase() === that.playerName.toLowerCase()) {
                    switch(shot.period) {
                        case "1":
                            quarterStats[0].value += 1;
                            break;
                        case "2":
                            quarterStats[1].value += 1;
                            break;
                        case "3":
                            quarterStats[2].value += 1;
                            break;
                        case "4":
                            quarterStats[3].value += 1;
                            break;
                    }
                }
            });

            return quarterStats;
        }).then((stats) => { this.render(stats, "By Quarter"); });
    }

    shotDistanceStats() {
        const that = this;
        d3.csv(CONSTANTS.CSV).then(function (data) {
            const distanceStats = [
                { name: "0-5 ft", value: 0 },
                { name: "6-10 ft", value: 0 },
                { name: "11-15 ft", value: 0 },
                { name: "16-20 ft", value: 0 },
                { name: "21-25 ft", value: 0 },
                { name: "26-30 ft", value: 0 },
            ];

            data.forEach((shot) => {
                if (shot.name.toLowerCase() === that.playerName.toLowerCase()) {
                    const dist = parseInt(shot.shot_distance);
                    switch (true) {
                        case dist <= 5:
                            distanceStats[0].value += 1;
                            break;
                        case dist >= 6 && dist <= 10:
                            distanceStats[1].value += 1;
                            break;
                        case dist >= 11 && dist <= 15:
                            distanceStats[2].value += 1;
                            break;
                        case dist >= 16 && dist <= 20:
                            distanceStats[3].value += 1;
                            break;
                        case dist >= 21 && dist <= 25:
                            distanceStats[4].value += 1;
                            break;
                        case dist >= 26 && dist <= 30:
                            distanceStats[5].value += 1;
                            break;
                    }
                }
            });
            return distanceStats;
        }).then((stats) => { this.render(stats, "By Distance"); });
    }

    render(data, label) {
        const radius = Math.min(CONSTANTS.WIDTH, CONSTANTS.HEIGHT) / 2
        let arc = d3.arc().innerRadius(radius * 0.53).outerRadius(radius - 1);

        const pie = d3.pie().padAngle(0.005).sort(null).value(d => d.value)
        
        const arcs = pie(data);

        const svg = d3.select("#svgcontainer")
            .append("svg")
            .attr("width", CONSTANTS.WIDTH)
            .attr("height", CONSTANTS.HEIGHT)
            .append("g")
            .attr("transform", "translate(" + CONSTANTS.WIDTH / 2 + "," + CONSTANTS.HEIGHT / 2 + ")")

        const color = d3.scaleOrdinal()
            .domain(data.map(d => d.name))
            .range(d3.quantize(t => d3.interpolateGreys(t * 0.65), data.length).reverse());

        svg.selectAll("path")
            .data(arcs)
            .join("path")
            .attr("fill", d => color(d.data.name))
            .attr("fill-opacity", 0.75)
        
        svg.selectAll("path")
            .data(arcs)
            .join("path")
            .attr("d", arc)
            .append("title")
            .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`)

        svg.append("g")
            .attr("font-family", "Oswald")
            .attr("font-size", 10)
            .attr("fill", "white")
            .attr("text-anchor", "middle")
            .attr("fill-opacity", 0.7)
            .selectAll("text")
            .data(arcs)
            .join("text")
            .attr("transform", d => `translate(${arc.centroid(d)})`)
            .call(text => text.append("tspan")
                .attr("y", "-0.4em")
                .attr("font-weight", "bold")
                .text(d => d.data.name))
            .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
                .attr("x", 0)
                .attr("y", "0.7em")
                .attr("fill-opacity", 0.7)
                .text(d => d.data.value.toLocaleString()));

        svg.append("text")
            .attr("class", "pietext")
            .text(`${label}`)
            .attr('y', 10)
            .style("text-anchor", "middle")
    }
}

export default Pie;