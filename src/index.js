import * as d3 from "d3";
import allcams from "./allcams";

var margin = {top: 40, right: 50, bottom: 10, left: 120},
    containerWidth = 1200, 
    height = margin.top + margin.bottom;

var width = containerWidth - margin.left - margin.right;
var selectedData = [];
var container = d3.select("#container");

d3.select(window)
  .on("resize", () => update(selectedData));

/** unique identifier for each cam */
function camId(d) {
    let str = `${d.make}${d.model}${d.number}`;
    return str.replace(/\s/g,'').trim();
}

/** unique identifier for each make-model set of cams */
function camGroup(d) {
    let str = d.make + d.model;
    return str.replace(/\s/g,'').trim();
}

// group cams according to each make-model set
var groupCams = d3.nest()
    .key(camGroup)
    .entries(allcams);

// Setup check-boxes
d3.select(".selectall-wrapper")
    .append("label").attr("for", "selectall-checkbox").text("Select All")
    .append("input")
        .attr("type", "checkbox")
        .attr("id", "selectall-checkbox")
        .property("checked", false)
        .on("change", changeAllSelection)

d3.select(".cam-checkboxes")
    .selectAll("div")
    .data(groupCams)
    .enter().append("div").attr("class", "checkbox-columns")
    .each( function(d) {
        d3.select(this).append("label")
            .text((d) => d.values[0].make + " " + d.values[0].model )
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

        d3.select(this).selectAll("label.cam_label")
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

var sortMethods = ["size_u", "model"]
var form = d3.select(".sort-radiobuttons").append("form");

form.selectAll("label")
    .data(sortMethods)
    .enter()
    .append("label")
    .text((d) => d)
    .append("input")
    .attr("type", "radio")
    .attr("name", "sortbutton")
    .attr("value", (d) => d )
    .property("checked", false)
    .on("change", () => update(selectedData.sort(sortCams)))
    .on("click", () => update(selectedData.sort(sortCams)))


window.setLocalCamStorage = function(){
    localStorage.setItem('selectedCams', JSON.stringify(selectedData))
}

/*
 * Get cams from local storage, tick boxes for those cams and update global selectedData.
 *
 * Does not update camGroup select-all box as appropriate.
 */
function getLocalCamStorage() { 
    const cams = JSON.parse(localStorage.getItem('selectedCams'));
    if (!cams) return null
    selectedData = cams
    const camIds = cams.map(camId)
    // Not using d3.selectAll.filter, since camIds not available in scope
    // Presumably, there is a nice way to do it in d3, though?
    camIds.forEach((d) => {
        // Can't just select for #id as d3 fails on periods etc.
        // Check d3 is happy with slashes in id.
        d3.select(`input[id='${d}']`).property("checked", true)
    })
    return cams 
}

// These functions are bound directly in html, so add to window when using webpack
/** Deselect all cams and load from local storage */
window.loadCams = function() {
    d3.selectAll("input").property("checked", false)
    update()
}
/** Deselect all cams and update chart to be empty */
window.clearCams = function() {
    d3.selectAll("input").property("checked", false)
    selectedData = []
    update(selectedData)
}

/** Method called by sort, not the sort function itself */
function sortCams(a,b) {
    const sortMethod = d3.select('input[name="sortbutton"]:checked').node().value || sortMethods[0]
    if (sortMethod === "size_u") {
        return a.size_u - b.size_u
    }
    // compare make-model, then size
    else if (sortMethod === "model") {
        if (a.make+a.model < b.make+b.model) return 1
        if (a.make+a.model >  b.make+b.model) return -1
        return a.size_u - a.size_l
    }
}

// setup chart
var chart = d3.select(".chart")
    .attr("width", containerWidth)
    .attr("height", height )
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

chart.append("text")
    .attr("transform", `translate(
        ${width/2}, ${-10 - margin.top/2})`
    )
    .style("text-anchor", "middle")
    .attr("class", "axis-label")
    .text("Range (mm)");

chart.append("g")
    .attr("class", "x axis upper");

chart.append("g").attr("class", "x axis lower")
    .attr("transform", `translate(0, ${height})`);


/**
 * Main update function, to be called whenever global selectedData array or page view is updated
 *
 * Used for updating chart object with new data or window dimensions.
 * Does not touch selectedData itself.
 * Should really break this down.
 */
function update(data){
    data = data || getLocalCamStorage() || []

    // space for axis
    var yPadding = 40;
    // Might be better if there was actual padding around the chart area,
    // not chart sitting inside the chart container.
    var height = ((data.length +1 )* 20 + yPadding);
    // Leave space for labels:
    // (could do something better, like create a hidden element and measure its width?)
    margin.right = (10 + d3.max(data, (d) => (d.model + d.number).length)) * 8;
    var containerWidth = container.node().getBoundingClientRect().width;
    var width = containerWidth - margin.left - margin.right;
    chart.attr("width", containerWidth)
        .attr("height", height)
        .attr("transform", `translate(${margin.left}, ${margin.top})`)

    container.style("height", height + margin.top + margin.bottom + "px") // style, because div not SVG element

    var x = d3.scaleLinear()
        .domain([0, d3.max(data, (d) => d.size_u)])
        .range([10, width]);

    var x1 = d3.scaleLinear()
        .domain([0, d3.max(data, (d) => d.size_u)])
        .range([10, width]);

    var xAxis = d3.axisTop(x)//.ticks()// .tickSizeOuter([0]) // does nothing?
    var xAxisLower = d3.axisBottom(x1).ticks() // has to be a second axis

    // Don't bother moving axis about when there's no data
    if (data.length > 0) {
        chart.select(".axis-label")
            .attr("transform", `translate( ${width/2}, ${height - yPadding + 35})`)

        chart.select(".x.upper").call(xAxis);
        chart.select(".x.lower").call(xAxisLower)
        .attr("transform", `translate(0, ${height - yPadding})`);
    } 
    // else  {} // Could set display: none and then re-enable when data is present

    // To remove first gridline at 0
    // Bit of a hack, splice returns the deleted array, which is used for data binding
    var gridLines = chart.selectAll("line.verticalGrid")
        .data(x.ticks().splice(1, x.ticks().length), (d) => d);

    gridLines.enter().append("line")
        .attr("class", "verticalGrid")
        .attr("fill" , "none")
        // .attr("shape-rendering" , "crispEdges")
        .attr("stroke" , "lightgray")
        .attr("stroke-dasharray" , "10,10")
        .attr("stroke-width" , "1px")
    .merge(gridLines)
        .attr("y1" , 0)
        .attr("y2" , height - margin.top - margin.bottom)
        .attr("x1" , (d) => x(d) + 0.5) // Don't know why the tick marks get shifted across by 0.5
        .attr("x2" , (d) => x(d) + 0.5);
    gridLines.exit().remove();

    var bars = chart.selectAll("rect")
        .data(data, camId);

    bars.enter().append("rect")
        .attr("fill", (d) => d.colour.toLowerCase())
        .attr("stroke", (d) => d.colour.toLowerCase())
        .attr("height", 10)
    .merge(bars)
        .attr("y", (d,i) => 10 + i * 20)
        .attr("x", (d) => x(d.size_l))
        .attr("width", (d) => x(d.size_u - d.size_l))
       .append("svg:title")
            // TODO: add check for empty data and/or do this better/prettier tooltips
           .text((d) => {
           return `${d.make} ${d.model} - No. ${d.number}\n
           weight: ${d.weight} g
           head wdith: ${d.head_width} mm
           strenght: ${d.strength} kN
           `; });
    bars.exit().remove();

    var labels = chart.selectAll("text.cam-label")
        .data(data, (d) => d.make+d.model+d.number+"label");
        // Wouldn't it have been sensible to put an id in the data?

    labels.enter().append("text").attr("class", "cam-label")
        .merge(labels)
            .text((d) => `${d.model}, No. ${d.number}`)
            .attr("y", (d,i) => { return 20 + i * 20 })
            .attr("x", function(d) {
                return x(d.size_u) + 15 // axis offset from side of char by 10 now
                }); 
    labels.exit().remove();
}

/**
 * First, uncheck the selectAll check box since we're picking boxes individually
 * Could do something more sophisticated like check whether all boxes are ticked but this will do
 * (Same thing won't work for changeMakeModelSelection, since it is called by changeAllSelection)
 */
function changeSelection(datum, isChecked) {
    d3.select(".selectall-wrapper").select("input").property("checked", false);
    // Now adjust selectedData and update:
    if (isChecked) {
        selectedData.push(datum)
    } else {
        selectedData = selectedData.filter( (i) => camId(i) !== camId(datum) );
    }
    update(selectedData);
}

/**
 * If a makeModel selectAll checkbox is ticked  [ ] -> [X] then:
 *  - check all boxes for cams of that make & model
 *  - add all cams that were not previously checked to selectedData
 * If a makeModel selectAll checkbox is unticked  [X] -> [ ] then:
 *  - do opposite
 */
function changeMakeModelSelection(makeModelClass, parentCheckBox) {
    d3.selectAll(makeModelClass)
        .each( function(d) {
            const isChecked = d3.select(this).node().checked;
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
 * TODO: can doubtless simplify and/or split out functionality. Also, wasn't his meant to toggle, 
 * i.e remember the selectedData when unselected. Clean this up anyway.
 */
function changeAllSelection() {
    const checkbox = {}
    checkbox.checked = d3.select(this).node().checked
    // var selectall = {checked: true}
    d3.selectAll(".cam_group")
        .each( function(d) {
            // changeMakeModelSelection expects and object with "checked" property
            // but I can't use this directly(?)
            changeMakeModelSelection("."+d.key, checkbox) 
        })
    .property("checked", checkbox.checked);
}

// Inital load of chart. update() will search in local storage initially
d3.select(window).on("load", update)
