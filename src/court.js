class Court {
    constructor(svg) {
        this.svg = svg;
    }

    render() {
        const courtWidth = 500;
        const courtHeight = 470;

        // container dimensions
        const paintWidth = 160;
        const paintHeight = 190;

        const threePointSideYPos = 330;
        const threePointSideHeight = 140;

        const pi = Math.PI;

        // black background
        this.svg.append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', courtWidth)
            .attr('height', courtHeight)
            .attr('fill', 'black');

        // key 
        this.svg.append('rect')
            .attr('x', 170)
            .attr('y', 0)
            .attr('width', paintWidth)
            .attr('height', paintHeight)
            .attr('stroke', 'white');

        // three- point side left line
        this.svg.append("line")
            .attr("x1", 30)
            .attr("y1", 0)
            .attr("x2", 30)
            .attr("y2", threePointSideHeight)
            .attr("stroke", "white");

        // three - point side right line
        this.svg.append("line")
            .attr("x1", 470)
            .attr("y1", 0)
            .attr("x2", 470)
            .attr("y2", threePointSideHeight)
            .attr("stroke", "white");

        const threePointArc = d3.arc()
            .innerRadius(239)
            .outerRadius(240)
            .startAngle(-90 * (pi / 180))
            .endAngle(90 * (pi / 180))

        this.svg.append("path")
            .attr("d", threePointArc)
            .attr("fill", "white")
            .attr("transform", "rotate(180) translate(-250, -45)")

        // cover arc
        this.svg.append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', 29.5)
            .attr('height', 140)
            .attr('fill', 'black');

        this.svg.append('rect')
            .attr('x', 470.5)
            .attr('y', 0)
            .attr('width', 29)
            .attr('height', 140)
            .attr('fill', 'black');

        // backboard
        this.svg.append("line")
            .attr("x1", 220)
            .attr("y1", 40)
            .attr("x2", 280)
            .attr("y2", 40)
            .attr("stroke", "white")
            .attr("stroke-width", "0.3%");

        // rim 
        this.svg.append("circle")
            .attr("cx", 250)
            .attr("cy", 52.5)
            .attr("r", 7.5)
            .attr("stroke", "white");

        // rim extension
        this.svg.append('rect')
            .attr('x', 246.5)
            .attr('y', 40)
            .attr('width', 7)
            .attr('height', 5)
            .attr('fill', 'white');

        // rim arc
        const rimArc = d3.arc()
            .innerRadius(40)
            .outerRadius(41)
            .startAngle(-90 * (pi / 180))
            .endAngle(90 * (pi / 180))

        this.svg.append("path")
            .attr("d", rimArc)
            .attr("fill", "white")
            .attr("transform", "rotate(180) translate(-250, -40)")

        // key made 
        this.svg.append('rect')
            .attr('x', 470.5)
            .attr('y', 430)
            .attr('width', 50)
            .attr('height', 12)
            .attr('fill', 'skyblue')
        
        this.svg.append("text")
            .attr("x", 434)
            .attr("y", 436)
            .attr("font-size", 14)
            .attr("dy", ".35em")
            .attr("font-family", "Oswald")
            .text("Made")
            .style("fill", "#D5D5D5")

        // key missed
        this.svg.append('rect')
            .attr('x', 470.5)
            .attr('y', 410)
            .attr('width', 50)
            .attr('height', 12)
            .attr('fill', 'darkred')

        this.svg.append("text")
            .attr("x", 428)
            .attr("y", 416)
            .attr("dy", ".35em")
            .attr("font-size", 14)
            .attr("font-family", "Oswald")
            .text("Missed")
            .style("fill", "#D5D5D5")
    }
}

export default Court;