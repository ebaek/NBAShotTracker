const CONSTANTS = {
    WIDTH: 450,
    HEIGHT: 450,
    MARGIN: 40,
}

class Pie {
    constructor(svg) {
        this.svg = svg;
        // this.render();

        this.calcStats("Lebron James");
    }

    calcStats(playerName) {
        d3.csv("../dataset/dataset.csv").then( function(data) {
            const madeMissed = [{ name: "MADE", value: 0 }, {name: "MISSED", value: 0 }];

            data.forEach( (shot) => {
                if(shot.name.toLowerCase() === playerName.toLowerCase()) {
                    if(shot.shot_made_flag === "1") {
                        madeMissed[0]["value"] += 1;
                    } else {
                        madeMissed[1]["value"] += 1;
                    }
                }
            })
            return madeMissed;
        }).then((stats) => { this.render(stats); });
    }

    render(data) {
        const radius = Math.min(CONSTANTS.WIDTH, CONSTANTS.HEIGHT) / 2
        let arc = d3.arc().innerRadius(radius * 0.67).outerRadius(radius - 1);

        const pie = d3.pie().padAngle(0.005).sort(null).value(d => d.value)
        
        const arcs = pie(data);

        const svg = d3.select(".piescontainer")
            .append("svg")
            .attr("width", CONSTANTS.WIDTH)
            .attr("height", CONSTANTS.HEIGHT)
            .append("g")
            .attr("transform", "translate(" + CONSTANTS.WIDTH / 2 + "," + CONSTANTS.HEIGHT / 2 + ")")

        const color = d3.scaleOrdinal()
            .domain(data.map(d => d.name))
            .range(d3.quantize(t => d3.interpolateRdBu(t * 0.85), data.length).reverse());

        svg.selectAll("path")
            .data(arcs)
            .join("path")
            .attr("fill", d => color(d.data.name))
            .attr("fill-opacity", 0.75)
            .attr("d", arc)
            .append("title")
            .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`);

        svg.append("g")
            .attr("font-family", "Oswald")
            .attr("font-size", 18)
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
            .text("FG COUNT")
            .attr('y', 20)
            .style("text-anchor", "middle")
    }
}

export default Pie;