// container dimensions
const courtWidth = 500;
const courtHeight = 470;

const paintWidth = 160;
const paintHeight = 190;

const threePointSideYPos = 330;
const threePointSideHeight = 140;

const pi = Math.PI;

const svg = d3.select("#svgcontainer")
    .append("svg").attr("width", courtWidth).attr("height", courtHeight);

// black background
svg.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', courtWidth)
    .attr('height', courtHeight)
    .attr('fill', 'black');

// key 
svg.append('rect')
    .attr('x', 170)
    .attr('y', 280)
    .attr('width', paintWidth)
    .attr('height', paintHeight)
    .attr('stroke', 'white');

// three- point side left line
svg.append("line")
    .attr("x1", 30)
    .attr("y1", threePointSideYPos)
    .attr("x2", 30)
    .attr("y2", threePointSideYPos + threePointSideHeight)
    .attr("stroke", "white");

// three - point side right line
svg.append("line")
    .attr("x1", 470)
    .attr("y1", threePointSideYPos)
    .attr("x2", 470)
    .attr("y2", threePointSideYPos + threePointSideHeight)
    .attr("stroke", "white");


const threePointArc = d3.arc()
    .innerRadius(239)
    .outerRadius(240)
    .startAngle(-90 * (pi / 180)) 
    .endAngle(90 * (pi / 180))

svg.append("path")
.attr("d", threePointArc)
.attr("fill", "white")
.attr("transform", "translate(250,425)");

// cover arc
svg.append('rect')
    .attr('x', 0)
    .attr('y', 330)
    .attr('width', 29)
    .attr('height', 140)
    .attr('stroke', 'black')
    .attr('fill', 'black');

svg.append('rect')
    .attr('x', 471)
    .attr('y', 330)
    .attr('width', 29)
    .attr('height', 140)
    .attr('stroke', 'black')
    .attr('fill', 'black');

// backboard
svg.append("line")
    .attr("x1", 220)
    .attr("y1", 430)
    .attr("x2", 280)
    .attr("y2", 430)
    .attr("stroke", "white")
    .attr("stroke-width", "0.3%");

// rim 
svg.append("circle")
    .attr("cx", 250)
    .attr("cy", 417.5)
    .attr("r", 7.5)
    .attr("stroke", "white");

// rim extension
svg.append('rect')
    .attr('x', 246.5)
    .attr('y', 424.5)
    .attr('width', 7)
    .attr('height', 5)
    .attr('fill', 'white');

// rim arc
const rimArc = d3.arc()
    .innerRadius(239)
    .outerRadius(240)
    .startAngle(-90 * (pi / 180))
    .endAngle(90 * (pi / 180))

svg.append("path")
    .attr("d", rimArc)
    .attr("fill", "white")
    .attr("transform", "translate(250,425)");




