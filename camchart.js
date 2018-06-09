var width = 500;
var height = 500;

var dataset = [];

function camId(d) {
    return `${d.make} ${d.model} ${d.number}`;
}

d3.tsv("data/cams.csv").then( (data) => {

    var testdata = [{"head_width": "28", "colour": "Grey", "weight": "55", "number": "000", "strength": "4", "make": "BD", "size_l": "7.8", "size_u": "12.9", "model": "Camalot C3"}, {"head_width": "28", "colour": "Purple", "weight": "57", "number": "00", "strength": "6", "make": "BD", "size_l": "9.0", "size_u": "13.7", "model": "Camalot C3"}];

    var checkboxes = d3.select("body").selectAll("label")
        .data(data)
        .enter()
        .append("label")
            .attr("for", (d,i) => camId(d) )
            .text( (d) => camId(d) )
        .append("input")
            .attr("type", "checkbox")
            .property("checked", false)
            .attr("id", (d) => camId(d) )
            .on("change", function(d) { changeSelection(this.checked, this.id); });

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

function changeSelection(checked, id) {
    d3.selectAll("rect")
    .filter( (x) => {
        return checked, id == camId(x) 
    })
    .attr("visibility", checked ? "visible": "collapse");

    //console.log(that, d);
}
