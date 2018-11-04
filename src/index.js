import * as d3 from "d3";
import allcams from "./allcams";

var margin = {top: 20, right: 30, bottom: 30, left: 40},
    width = 1200 - margin.left - margin.right,
    height = margin.top + margin.bottom;

var data  = [],
    selectedData = [];

var container = d3.select("#container");

d3.select(window)
  .on("resize", function() {
    update(selectedData);
  });

function camId(d) {
    let str = `${d.make}${d.model}${d.number}`;
    return str.replace(/\s/g,'');
}

function camGroup(d) {
    let str = d.make + d.model;
        return str.replace(/\s/g,'').trim();
}

var x = d3.scaleLinear()
    .domain([0, d3.max(data, (d) => d.size_u)])
    .range([0, width]);

var y = d3.scaleBand() // not being used currently
    .domain(d3.range(0, data.length))
    .range([0, height]);

var groupCams = d3.nest()
    .key(camGroup)
    .entries(allcams);

var selectAllDiv = d3.select(".selectall-wrapper")
    .append("label").attr("for", "selectall-checkbox").text("Select All")
    .append("input")
        .attr("type", "checkbox")
        .attr("id", "selectall-checkbox")
        .property("checked", false)
        .on("change", changeAllSelection)

var checkboxDivs = d3.select(".cam-checkboxes")
    .selectAll("div")
    .data(groupCams)
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

var buttons = ["size_u", "model"]
var form = d3.select(".sort-radiobuttons").append("form");
var sortMethod = "model"
var labels = form.selectAll("label")
    .data(buttons)
    .enter()
    .append("label")
    .text((d) => d)
    .append("input")
    .attr("type", "radio")
    .attr("name", "sortbutton")
    .attr("value", (d) => d )
    .property("checked", (d) => d === sortMethod )
    .on("change", () => update(selectedData))
    
function sortCams(a,b) {
    sortMethod = d3.select('input[name="sortbutton"]:checked').node().value
    if (sortMethod === "size_u") {
        return a.size_u - b.size_u
    }
    else if (sortMethod === "model") {
        if (a.make+a.model < b.make+b.model) {return 1}
        if (a.make+a.model >  b.make+b.model) {return -1}
        return 0
    }
}

var xAxis = d3.axisTop(x);
// Might want a y-axis? probably just bounding box
// var yAxis = d3.axisLeft(y);

var chart = d3.select(".chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var theXaxis = chart.append("g")
    .attr("class", "x axis");
 // .attr("transform", "translate(0,-10)");

function update(data){
    selectedData.sort(sortCams)

    width = container.node().getBoundingClientRect().width;

    chart = d3.select(".chart")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    x.domain([0, d3.max(data, (d) => d.size_u)]);
    x.range([0, width]);

    height = ((data.length +1 )* 20 + margin.top + margin.bottom);
    chart.attr("height", height);

    chart.select(".x")
        .call(xAxis);

    var bars = chart.selectAll("rect")
        .data(data, camId)

    bars.enter().append("rect")
        .attr("fill", (d) => d.colour.toLowerCase())
        .attr("stroke", (d) => d.colour.toLowerCase())
        .attr("height", 10)
    .merge(bars)
        .attr("y", (d,i) => 10 + i * 20)
        .attr("x", (d) => x(d.size_l))
        .attr("width", (d) => x(d.size_u - d.size_l) );

    bars.exit().remove();
}

function changeSelection(datum, isChecked) {
    // First, uncheck the selectAll check box since we're picking boxes individually
    // Could do something more sophisticated like check whether all boxes are ticked but this will do
    // (Same thing won't work for changeMakeModelSelection, since it is called by changeAllSelection)
    d3.select(".selectall-wrapper").select("input").property("checked", false);
    // Now adjust selectedData and update:
    isChecked ? selectedData.push(datum) : selectedData = selectedData.filter( (i) => camId(i) !== camId(datum) );
    update(selectedData);
}

function changeMakeModelSelection(makeModelClass, parentCheckBox) {
    // If a makeModel selectAll checkbox is ticked  [ ] -> [X] then:
    //      * check all boxes for cams of that make & model
    //      * add all cams that were not previously checked to selectedData
    // If a makeModel selectAll checkbox is unticked  [X] -> [ ] then:
    //      do opposite
    d3.selectAll(makeModelClass)
        .each( function(d) {
            let isChecked = d3.select(this).node().checked;
            if( parentCheckBox.checked && !isChecked) {
                selectedData.push(d); 
            }
            if ( !parentCheckBox.checked && isChecked ) {
                // remove from array if alrady in it
                selectedData = selectedData.filter( (i) => {
                    return camId(i) !== camId(d);
                });
            }
        })
    .property("checked", parentCheckBox.checked);
    update(selectedData);

}

/**
 * Sets every makeModel checkbox to the same state
 * Since changeMakeModelSelection sets each of its child checkboxes, every checkbox on the page should be set here.
 * Essentially, select/deselect all.
 */
function changeAllSelection() {
    var checkbox = {}
    checkbox.checked = d3.select(this).node().checked
    var selectall = {checked: true}
    d3.selectAll(".cam_group")
        .each( function(d) {
            // changeMakeModelSelection expects and object with "checked" property
            // but I can't use this directly(?)
            changeMakeModelSelection("."+d.key, checkbox) 
        })
    .property("checked", checkbox.checked);
}
