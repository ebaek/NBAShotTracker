import Court from './court';
import Shots from './shots';

document.addEventListener("DOMContentLoaded", () => {
    const courtWidth = 500;
    const courtHeight = 470;

    const svg = d3.select("#svgcontainer")
        .append("svg").attr("width", courtWidth).attr("height", courtHeight);

    const court = new Court(svg);
    court.render();

    const shots = new Shots(svg);
    shots.render();
});