var testdata = [{"head_width": 28, "colour": "Grey", "weight": 55, "number": 000, "strength": 4, "make": "BD", "size_l": 7.8, "size_u": 12.9, "model": "Camalot C3"}, {"head_width": 28, "colour": "Purple", "weight": 57, "number": 00, "strength": 6, "make": "BD", "size_l": 9.0, "size_u": 13.7, "model": "Camalot C3"}];

var margin = {top: 20, right: 30, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    padding = 0.3;

var data  = testdata;

function height() { return ((this.data.length +1 )* 20)} //- margin.top - margin.bottom,

var chart = d3.select(".chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height() + margin.top + margin.bottom)
    // .attr("preserveAspectRatio", "xMinYMin") // Switch for height/width attr to get responsive
    //.attr("viewBox", "0 0 960 " + height()) // also in update()
    //.append("g") // won't work with update() as this nests
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var container = d3.select("#container")

d3.select(window)
  .on("resize", function() {
    width = container.node().getBoundingClientRect().width;
      console.log(width)
    // x.range([0, width]);
    update(data)
      console.log(x)
  });
console.log("outside", width)

var dataset = [];

function camId(d) {
    let str = `${d.make}${d.model}${d.number}`;
    return str.replace(/\s/g,'')
}

function camGroup(d) {
    let str = d.make + d.model
        return str.replace(/\s/g,'').trim();
}


var x = d3.scaleLinear()
    .domain([0, d3.max(data, (d) => d.size_u)])
    .range([0, width]);

var y = d3.scaleBand()
    .domain(d3.range(0, data.length))
    .range([0, height()]);

var previousMakeModel = null

var groupcams = d3.nest()
    .key(camGroup)
    .entries(moredata)

var checkboxDivs = d3.select(".cam-checkboxes")
    .selectAll("div")
    .data(groupcams)
    .enter().append("div").attr("class", "checkbox-columns")
    .each( function(d) {
        d3.select(this) .append("label")
            .text((d) => d.values[0].make + d.values[0].model )
            .attr("for", d.key)
            .attr("class", "cam_group_label")
        .append("input")
            .attr("class", "cam_group")
            .attr("type", "checkbox")
            .property("checked", false)
            .attr("id", d.key)
            .on("change", function(d) { 
                changeMakeModelSelection("."+d.key, this);
            });

        d3.select(this).selectAll("label")
            .data((d) => d.values)
            .enter().append("label")
                .attr("class", "cam_label")
                .text((d) => d.number)
                .attr("for", camId )
            .append("input")
                .attr("type", "checkbox")
                .attr("class", d.key + " cam_checkbox")
                .property("checked", false)
                .attr("id", camId )
                .on("change", function(d)
                    { changeSelection(d, this.checked); });
    });
    
 
var xAxis = d3.axisBottom(x);
//var yAxis = d3.axisLeft(y);

var theXaxis = chart.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + "0" + ")") // replace second "0" with height to place at bottom

function update(data){
    x.domain([0, d3.max(data, (d) => d.size_u)])
    x.range([0, width]);

    // chart.attr("viewBox", "0 0 960 " + height.call(this))

    this.data = data   
    chart.attr("height", height.call(this))

    chart.select(".x")
        .call(xAxis);

    var bars = chart.selectAll("rect")
        .data(data, (d) => d.id );

    bars.enter().append("rect")
        .attr("fill", (d) => d.colour.toLowerCase())
        .attr("stroke", (d) => d.colour.toLowerCase())
        .attr("height", 10)
        .attr("y", (d,i) => i * 20)
    .merge(bars)
        .attr("x", (d) => x(d.size_l))
        .attr("width", (d) => x(d.size_u - d.size_l) )

    bars.exit().remove();
}

var selectedData = []
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

