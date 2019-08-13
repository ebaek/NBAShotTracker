const CONSTANTS = {
    ROWS: 60,
    COLS: 60,
    WIDTH: 550,
    HEIGHT: 480,
}

class Shots {
    constructor(svg) {
        this.svg = svg;
        
        this.hexRadius = d3.min([CONSTANTS.WIDTH/((CONSTANTS.COLS + 0.5) * Math.sqrt(3)), CONSTANTS.HEIGHT/((CONSTANTS.ROWS + 1/3) * 1.5)]);        
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

    render() {
        const points = this.hexCenters();
        const hexbin = d3.hexbin().radius(this.hexRadius);

        this.svg.append("g")
            .selectAll(".hexagon")
            .data(hexbin(points))
            .enter().append("path")
            .attr("d", function(d) {
                return "M" + d.x + "," + d.y + hexbin.hexagon();
            })
            .attr("stroke", "white")
            .attr("fill-opacity", "0.4")
            .attr("stroke-width", "0.2px");
    }
}

export default Shots;