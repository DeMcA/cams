var width = 500;
var height = 500;

var dataset = [];

d3.tsv("data/cams.csv").then( (data) => {

    var testdata = [{"head_width": "28", "colour": "Grey", "weight": "55", "number": "000", "strength": "4", "make": "BD", "size_l": "7.8", "size_u": "12.9", "model": "Camalot C3 "}, {"head_width": "28", "colour": "Purple", "weight": "57", "number": "00", "strength": "6", "make": "BD", "size_l": "9.0", "size_u": "13.7", "model": "Camalot C3 "}];

    var checkboxes = d3.select("body").selectAll("label")
        .data(testdata)
        .enter()
        .append("label")
            .attr("for", (d,i) =>  d.make + d.model + d.number)
            .text( (d) => d.make + d.model + d.number)
        .append("input")
            .attr("checked", true)
            .attr("type", "checkbox")
            .attr("id", (d,i) => d.make + d.model + d.number)
            .on("change", function(d) { changeSelection(this.checked, d); });

    var svg = d3.select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    var bars = svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect");

    bars.attr("y", (d,i) => i * 20)
        .attr("height", 10)
        .attr("width", (d) => 10 * (d.size_u - d.size_l))
        .attr("x", (d) => 10 * d.size_l)
        .attr("fill", (d) => d.colour.toLowerCase())
        .attr("stroke", (d) => d.colour.toLowerCase());

});

function changeSelection(that, d) {
    console.log(that, d);
}
