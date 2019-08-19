import { drawChart } from './index';

class Qbutton {
    constructor(playerName, season, date, quarter) {
        const activeClass = "qactive";

        const label = quarter === undefined ? "E" : quarter;

        d3.select(".quarters")
            .append("input")
            .property("type", "button")
            .property("value", label)
            .on("click", function (d, i) {
                const alreadyIsActive = d3.select(this).classed(activeClass);

                d3.selectAll(".quarters input").classed(activeClass, false);
                
                d3.selectAll(".allshotsbutton").classed(activeClass, false);

                d3.select(this).classed(activeClass, !alreadyIsActive);
                
                quarter === undefined ? drawChart(playerName, season, date) : drawChart(playerName, season, date, quarter[1]);
            })
    }
}

export default Qbutton;