var width = 500;
var height = 1000;

var dataset = [];

function camId(d) {
    return `${d.make} ${d.model} ${d.number}`;
}

var selectedData = [];

d3.tsv("data/cams.csv").then( (data) => {

    var testdata = [{"head_width": "28", "colour": "Grey", "weight": "55", "number": "000", "strength": "4", "make": "BD", "size_l": "7.8", "size_u": "12.9", "model": "Camalot C3"}, {"head_width": "28", "colour": "Purple", "weight": "57", "number": "00", "strength": "6", "make": "BD", "size_l": "9.0", "size_u": "13.7", "model": "Camalot C3"}];

    var previousMakeModel = null;

    var checkboxes = d3.select("body").selectAll("label")
        .data(data)
        .enter()
        .each( function(d) {
            d3.select(this)
                .filter( (d) => {
                    prev = previousMakeModel;
                    current = d.make + d.model;
                    previousMakeModel = current;
                    return prev !== current;
                })
                .append("p")
                .text( (d) => `${d.make} ${d.model}`)
                .append("input")
                .attr("type", "checkbox")
                .property("checked", false)
                .attr("id", (d) => d.make + d.model )
                .on("change", function(d) { changeMakeModelSelection("."+d.make+d.model, this); });
            d3.select(this)
                .append("label")
                .attr("for", (d,i) => camId(d) )
                .text( (d) => camId(d) )
                .append("input")
                .attr("type", "checkbox")
                .attr("class", (d) => d.make + d.model )
                .property("checked", false)
                .attr("id", (d) => camId(d) )
                .on("change", function(d) { changeSelection(d, this.checked); });
        });


    var svg = d3.select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    function update(data) {
        var bars = svg.selectAll("rect")
            .data(data, (d) => camId(d) );

        // bars.attr("class", "update");

        bars.enter().append("rect")
        // .attr("class", "enter")
            .attr("y", (d,i) => i * 20)
            .attr("height", 10)
            .attr("width", (d) => 10 * (d.size_u - d.size_l))
            .attr("x", (d) => 10 * d.size_l)
            .attr("fill", (d) => d.colour.toLowerCase())
            .attr("stroke", (d) => d.colour.toLowerCase())
            .merge(bars)
            .attr("y", (d,i) => i * 20);

        bars.exit().remove();
    }

    function changeSelection(datum, isChecked) {
        isChecked ? selectedData.push(datum) : selectedData = selectedData.filter( (i) => camId(i) !== camId(datum) );
        update(selectedData);
    }

    function changeMakeModelSelection(makeModelClass, parentCheckBox) {
        d3.selectAll(makeModelClass)
            .each( function(d) {
                let isChecked = d3.select(this).node().checked;
                if( parentCheckBox.checked && !isChecked) {
                    selectedData.push(d); 
                }
                if ( !parentCheckBox.checked && isChecked ) {
                // remove from array if alrady in it
                    selectedData = selectedData.filter( (i) => {
                        return camId(i) !== camId(d) }
                    );
                }
            })
            .property("checked", parentCheckBox.checked);
        update(selectedData);

    }

});
