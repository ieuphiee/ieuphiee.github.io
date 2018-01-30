var redrawxMin, redrawxMax, redrawyMin, redrawyMax;
var xDataName, yDataName, csvName;
var xData, yData, xLabel, yLabel;
var gridX, gridY;

var margin = {top: 20, right: 20, bottom: 40, left: 50},
	width = 667 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom,
	xMin = 0,
	xMax = 1;


var array = loadData("SIO2", "MGO", "ALU");
xData = array[0];
yData = array[1];
xLabel = array[2];
yLabel = array[3];
csvName = array[4];
drawPlot(xData, yData, xLabel, yLabel, csvName);

/***********************************************************************************/
/** loadData() retrieves data from csv provided:
/** the x and y axis plotting variables and
/** name of the csv file.
/** @xDataName x-axis plotting variable
/** @yDataName y-axis plotting variable
/** @csvName name of csv file
/** @return an array containing that specific plot's data
/***********************************************************************************/

function loadData(xDataName, yDataName, csvName) {
	
	
	switch (xDataName) {
			
		case "SIO2":
			xData = function (d) { return d.SIO2; };
			xLabel = "Wt.% SiO2";
			break;
			
		case "TIO2":
			xData = function (d) { return d.TIO2; };
			xLabel = "Wt.% TiO2";
			break;
			
		case "AL2O3":
			xData = function (d) { return d.AL2O3; };
			xLabel = "Wt.% Al2O3";
			break;
		
		case "FE2O3":
			xData = function (d) { return d.FE2O3; };
			xLabel = "Wt.% FE2O3";
			break;
		
		case "FEO":
			xData = function (d) { return d.FEO; };
			xLabel = "Wt.% FeO";
			break;
	
		case "FET":
			xData = function (d) { return d.FET; };
			xLabel = "Wt.% FeO*";
			break;
			
		case "MNO":
			xData = function (d) { return d.MNO; };
			xLabel = "Wt.% MnO";
			break;
			
		case "MGO":
			xData = function (d) { return d.MGO; };
			xLabel = "Wt.% MgO";
			break;
	
		case "CAO":
			xData = function (d) { return d.CAO; };
			xLabel = "Wt.% CaO";
			break;
	
		case "NA2O":
			xData = function (d) { return d.NA2O; };
			xLabel = "Wt.% Na2O";
			break;
	
		case "K2O":
			xData = function (d) { return d.K2O; };
			xLabel = "Wt.% K2O";
			break;
	
		case "NAK":
			xData = function (d) { return d.NAK; };
			xLabel = "Wt% Na2O + K2O";
			break;
			
		case "P2O5":
			xData = function (d) { return d.P2O5; };
			xLabel = "Wt.% P2O5";
			break;
			
	
		case "CR2O3":
			xData = function (d) { return d.CR2O3; };
			xLabel = "Wt.% Cr2O3";
			break;
		
		case "P2O5":
			xData = function (d) { return d.P2O5; };
			xLabel = "Wt.% P2O5";
			break;
	
		case "NIO":
			xData = function (d) { return d.NIO; };
			xLabel = "Wt.% NiO";
			break;
	
		case "ZR2O3":
			xData = function (d) { return d.ZR2O3; };
			xLabel = "Wt.% Zr2O3";
			break;
	
		case "BAO":
			xData = function (d) { return d.BAO; };
			xLabel = "Wt.% BaO";
			break;
	
		case "H2O+":
			xData = function (d) { return d.H2OPLUS; };
			xLabel = "Wt.% H2O+";
			break;
	
		case "H2O-":
			xData = function (d) { return d.H2OMINUS; };
			xLabel = "Wt.% H2O-";
			break;	
	
		case "CL":
			xData = function (d) { return d.CL; };
			xLabel = "Wt.% Cl";
			break;
	
		case "SO3":
			xData = function (d) { return d.SO3; };
			xLabel = "Wt.% SO3";
			break;
	}
	
	switch (yDataName) {
			
		case "SIO2":
			yData = function (d) { return d.SIO2; };
			yLabel = "Wt.% SiO2";
			break;
		
	
		case "TIO2":
			yData = function (d) { return d.TIO2; };
			yLabel = "Wt.% TiO2";
			break;
		

		case "AL2O3":
			yData = function (d) { return d.AL2O3; };
			yLabel = "Wt.% Al2O3";
			break;
		
		
		case "FE2O3":
			yData = function (d) { return d.FE2O3; };
			yLabel = "Wt.% FE2O3";
			break;
		
		
		case "FEO":
			yData = function (d) { return d.FEO; };
			yLabel = "Wt.% FeO";
			break;
		
		
		case "FET":
			yData = function (d) { return d.FET; };
			yLabel = "Wt.% FeO*";
			break;
		
		case "MNO":
			yData = function (d) { return d.MNO; };
			yLabel = "Wt.% MnO";
			break;
		
		case "MGO":
			yData = function (d) { return d.MGO; };
			yLabel = "Wt.% MgO";
			break;
		
		case "CAO":
			yData = function (d) { return d.CAO; };
			yLabel = "Wt.% CaO";
			break;
		
		case "NA2O":
			yData = function (d) { return d.NA2O; };
			yLabel = "Wt.% Na2O";
			break;
		
		case "K2O":
			yData = function (d) { return d.K2O; };
			yLabel = "Wt.% K2O";
			break;
		
		case "NAK":
			yData = function (d) { return d.NAK; };
			yLabel = "Wt% Na2O + K2O";
			break;
		
		case "P2O5":
			yData = function (d) { return d.P2O5; };
			yLabel = "Wt.% P2O5";
			break;
		
		case "CR2O3":
			yData = function (d) { return d.CR2O3; };
			yLabel = "Wt.% Cr2O3";
			break;
		
		case "P2O5":
			yData = function (d) { return d.P2O5; };
			yLabel = "Wt.% P2O5";
			break;
		
		case "NIO":
			yData = function (d) { return d.NIO; };
			yLabel = "Wt.% NiO";
			break;
		
		case "ZR2O3":
			yData = function (d) { return d.ZR2O3; };
			yLabel = "Wt.% Zr2O3";
			break;
		
		case "BAO":
			yData = function (d) { return d.BAO; };
			yLabel = "Wt.% BaO";
			break;	
		
		case "H2O+":
			yData = function (d) { return d.H2OPLUS; };
			yLabel = "Wt.% H2O+";
			break;
		
		case "H2O-":
			yData = function (d) { return d.H2OMINUS; };
			yLabel = "Wt.% H2O-";
			break;
		
		case "CL":
			yData = function (d) { return d.CL; };
			yLabel = "Wt.% Cl";
			break;
		
		case "SO3":
			yData = function (d) { return d.SO3; };
			yLabel = "Wt.% SO3";
			break;
			
	}

	return [xData, yData, xLabel, yLabel, csvName];
	
}


/***********************************************************************************/
/** drawPlot() draws the corresponding plot provided:
/** @xData x-axis plotting variable's data
/** @yData y-axis plotting variable's data
/** @xLabel x-axis' label
/** @yLabel y-axis' label
/** @csvName name of csv file
/***********************************************************************************/


function drawPlot(xData, yData, xLabel, yLabel, csvName) {
	
	/**************************************************/
	/************ Retrieve data from csv file *********/
	/**************************************************/
	
	d3.csv("rockData/" + csvName + ".csv", function (error, data) {

		data.forEach(function (d) { // The data types are in the first row. d3 knows to use row 1
			d.SIO2 = +d.SIO2; // Change string (from CSV) into number format
			dTIO2 = +d.TIO2;
			d.AL2O3 = +d.AL2O3;
			d.FE2O3 = +d.FE2O3;
			d.FEO = +d.FEO;
			d.FET = +d.FET;
			d.MNO = +d.MNO;
			d.MGO = +d.MGO;
			d.CAO = +d.CAO;
			d.NA2O = +d.NA2O;
			d.K2O = +d.K2O;
			d.NAK = +d.NAK;
			d.P2O5 = +d.P2O5;
			d.CR2O3 = +d.CR2O3;
			d.BAO = +d.BAO;
			d.CL = +d.CL;
			d.SO3 = +d.SO3;
			d["Rock Name"] = "" + d["Rock Name"]; // Keep as string
			if (error) {
				console.log(error);
			}
		});
	
	/***************************************************************************************************/	
	/************ Set up x and y axis' scale, domain, range, and x and y values of data points *********/
	/***************************************************************************************************/
		
	var xValue = xData;
	var x = d3.scale.linear()
		.range([0, width]);
	var xMap = function (d) { return x(xValue(d)); };

	var yValue = yData;
	var y = d3.scale.linear()
		.range([height, 0]);
	var yMap = function (d) { return y(yData(d)); };

		
	var xAxis = d3.svg.axis()
		.scale(x)
		.orient("bottom")
		.ticks(10)
		.tickSize(5);

	/*var xAxisTop = d3.svg.axis()
		.scale(x)
		.orient("top")
		.ticks(10);*/
		
	var updateGridX = d3.svg.axis()
		.scale(x)
		.orient("bottom")
		.ticks(10)
		.tickSize(-height, 0, 0)
		.tickFormat("");
	
	var yAxis = d3.svg.axis()
		.scale(y)
		.orient("left")
		.ticks(10)
		.tickSize(5);

	/*var yAxisRight = d3.svg.axis()
		.scale(y)
		.orient("right")
		.ticks(10);*/
		
	var updateGridY = d3.svg.axis()
		.scale(y)
		.orient("left")
		.ticks(10)
		.tickSize(-width, 0, 0)
		.tickFormat("");
		
	/****************************************************/	
	/************ Apply tooltip area to webpage *********/
	/****************************************************/
		
	var tooltip = d3.select("#plot")
			.append("div")
			.attr("class", "tooltip")
			.style("background-color", "white")
			.style("opacity", 0); 

	// Setup fill color
	var cValue = function (d) { return d["Rock Name"]; };
	var	color = d3.scale.category10();
		
	/*******************************************************/	
	/************ Find and set up x and y domains  *********/
	/*******************************************************/
		
	var xMin = 10 * Math.floor((d3.min(data, xValue)) / 10);
	var yMin = 10 * Math.floor((d3.min(data, yValue)) / 10);
	var xMax = 10 * Math.ceil((d3.max(data, xValue)) / 10);
	var yMax = 10 * Math.ceil((d3.max(data, yValue)) / 10);
		
	if (d3.max(data, xValue) <= 5) {
		xMax = 5;
		xMin = 0;
	}
		
	if (d3.max(data, yValue) <= 5) {
		yMax = 5;
		yMin = 0;
	}
		
	if (d3.max(data, xValue) <= 2) {
		xMax = 2;
		xMin = 0;
	}
		
	if (d3.max(data, yValue) <= 2) {
		yMax = 2;
		yMin = 0;
	}
		
	if (d3.max(data, xValue) <= 1) {
		xMax = 1;
		xMin = 0;
	}
		
	if (d3.max(data, yValue) <= 1) {
		yMax = 1;
		yMin = 0;
	}
		
	if (xMin == NaN) {
		xMin = 0;
	}

	// Set the d3.axis.scale.linear().domains for the x and y axes
	// Don't want dots overlapping axis, so add in buffer to data domain
	x.domain([xMin, xMax]);
	y.domain([yMin, yMax]);
		
		
		
	/***********************************************************/	
	/************ Create svg and set up zoom behavior **********/
	/***********************************************************/	
		
	var zoom = d3.behavior.zoom().x(x).y(y).on("zoom", refresh);
	var zoomRect = false; 

	d3.select("#zoom-rect").on("change", function() {
		  zoomRect = this.checked; // Toggles the ability to zoom by rectangle (default behavior is to pan)
	});
	
	// Remove previous svg plot and data, if one exists
	d3.selectAll('svg').remove();
	
	// Create new svg and append box-zoom functionality (if checkbox is checked)
	var svg = d3.select("#plot").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  	.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .call(zoom)
  	.append("g")
    .on("mousedown", function() {
      if (!zoomRect) { return; }
      var e = this,
          origin = d3.mouse(e),
          rect = svg.append("rect").attr("class", "zoom");
      d3.select("#plot").classed("noselect", true);
      origin[0] = Math.max(0, Math.min(width, origin[0]));
      origin[1] = Math.max(0, Math.min(height, origin[1]));
      d3.select(window)
          .on("mousemove.zoomRect", function() {
            var m = d3.mouse(e);
            m[0] = Math.max(0, Math.min(width, m[0]));
            m[1] = Math.max(0, Math.min(height, m[1]));
            rect.attr("x", Math.min(origin[0], m[0]))
                .attr("y", Math.min(origin[1], m[1]))
                .attr("width", Math.abs(m[0] - origin[0]))
                .attr("height", Math.abs(m[1] - origin[1]));
          })
          .on("mouseup.zoomRect", function() {
            d3.select(window).on("mousemove.zoomRect", null).on("mouseup.zoomRect", null);
            d3.select("body").classed("noselect", false);
            var m = d3.mouse(e);
            m[0] = Math.max(0, Math.min(width, m[0]));
            m[1] = Math.max(0, Math.min(height, m[1]));
            if (m[0] !== origin[0] && m[1] !== origin[1]) {
              zoom.x(x.domain([origin[0], m[0]].map(x.invert).sort()))
                  .y(y.domain([origin[1], m[1]].map(y.invert).sort()));
            }
            rect.remove();
            refresh(); // !! This is the zoom function !!
          }, true);
      d3.event.stopPropagation();
    });

	
	svg.append("rect")
		.attr("width", width)
		.attr("height", height);

	/***********************************************/
	/********* Append x and y axis to svg **********/
	/***********************************************/	
		
	svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.append("text") 
		.attr("class", "label")
		.attr("transform", "translate(0,40)")
		.attr("x", width / 2)
		.attr("y", -6) 
		.style("text-anchor", "middle")
		.style("font-weight", "bold")
		.style("font-size", "120%")
		.text(xLabel); 		

	svg.append("g")
		.attr("class", "y axis")
		.call(yAxis)
		.attr("title", "yAxis1")
		.append("text")
		.attr("class", "label")
		.attr("x", -height / 2) // Because of the rotate, this puts the label in the middle
		.attr("transform", "rotate(-90)")
		.attr("y", -40) // Put the label to the left of the Graph
		.attr("dy", ".71em")
		.style("text-anchor", "middle")
		.style("font-weight", "bold")
		.style("font-size", "120%")
		.text(yLabel);
		
	// When called, zoom function rewrites x and y axis and redraws the data points
	function refresh() {
		var t = main.transition().duration(700); // Transition effect
		svg.select(".x.axis").call(xAxis);
		svg.select(".y.axis").call(yAxis);
		gridX.call(updateGridX);
		gridY.call(updateGridY);
		main.selectAll(".dot").transition(t)
			.attr("class", "dot")
			.attr("r", 3.5)
			.attr("cx", xMap) 
			.attr("cy", yMap)
	}
		
	/***********************************************/	
	/************ Create x and y gridlines *********/	
	/***********************************************/	
	
	drawGrid();
		
	function make_x_gridlines() {
		return d3.svg.axis()
		.scale(x)
		.orient("bottom")
		.ticks(10)
	}
		
	// Gridlines in y axis function
	function make_y_gridlines() {
		return d3.svg.axis()
		.scale(y)
		.orient("left")
		.ticks(10)
	}

	function drawGrid() {
		
		// Add the x gridlines
		gridX = svg.append("g")
		.attr("class", "grid")
		.attr("id", "grid")
		.attr("transform", "translate(0," + height + ")")
		.call(make_x_gridlines()
		.tickSize(-height, 0, 0)
		.tickFormat(""));

		// Add the y gridlines
		gridY = svg.append("g")
		.attr("class", "grid")
		.attr("id", "grid")
		.call(make_y_gridlines()
		.tickSize(-width, 0, 0)
		.tickFormat(""));
	}	
		
	
		
	/***********************************************************/	
	/******************* (I M P O R T A N T) *******************/
	/***********************************************************/	
	/**** Clips data points so they stay inside the svg box ****/
	/***********************************************************/	
	/***********************************************************/	
		
	svg.append('defs')
	.append('clipPath')
	.attr('id', 'clip')
	.append('rect')
		.attr('x', 0)
		.attr('y', 0)
		.attr('width', width)
		.attr('height', height);

	var main = svg.append('g')
      	.attr('class', 'main')
      	.attr('clip-path', 'url(#clip)');

	
	/***********************************************************/
	/************* Draw dots and set mouseover data ************/
	/***********************************************************/
		
	main.selectAll(".dot")
		.data(data)
		.enter().append("circle")
		.attr("class", "dot")
		.attr("r", 3.5)
		.attr("cx", xMap) //xMap is the xValue of the data point
		.attr("cy", yMap)
		.style("fill", function (d) {
			return color(cValue(d));
		})
	
	// Add tooltips for every data point
	.on("mouseover", function (d) {
		tooltip.transition()
			.duration(200)
			.style("opacity", 1);
		tooltip.html("Sample: " + d["Sequence Number"] + "<br/> " + d["Rock Name"] + "<br/> " + xLabel + ": " + xValue(d) +
			"<br/> " + yLabel + ": " + yValue(d))
			.style("font-size", "80%")
			.style("left", (d3.event.pageX - 160) + "px")
			.style("top", (d3.event.pageY - 28) + "px");
		}) // End .on(mousein) function
	.on("mouseout", function (d) {
		tooltip.transition()
			.duration(500)
			.style("opacity", 0);
		}); //End .on(mouseout) function
		
	
	/***************************************/	
	/****** end of d3.csv() function ******/	

	});

	/***************************************/	
	/***************************************/	

}

/***********************************************************************************/
/***********************************************************************************/
/************************ end of drawplot() function *******************************/
/***********************************************************************************/
/***********************************************************************************/


/****************************************************************************/ 	
/************ Listen for a radio button click and update the graph *********/ 
/****************************************************************************/

var setX = document.forms['xForm'].elements['xAxisChoice'];
	for (var i = 0, len = setX.length; i < len; i++) {
		setX[i].onclick = function () {
			xDataName = this.value;
			array = loadData(xDataName, yDataName, csvName);
			xData = array[0];
			yData = array[1];
			xLabel = array[2];
			yLabel = array[3];
			csvName = array[4];
			drawPlot(xData, yData, xLabel, yLabel, csvName);
		};
	}

var setY = document.forms['yForm'].elements['yAxisChoice'];
	for (var i = 0, len = setY.length; i < len; i++) {
		setY[i].onclick = function () {
			yDataName = this.value;
			array = loadData(xDataName, yDataName, csvName);
			xData = array[0];
			yData = array[1];
			xLabel = array[2];
			yLabel = array[3];
			csvName = array[4];
			drawPlot(xData, yData, xLabel, yLabel, csvName);
		
		};
}

var setCsv = document.forms['csvForm'].elements['csvChoice'];
	for (var i = 0, len = setCsv.length; i < len; i++) {
		setCsv[i].onclick = function () {
			csvName = this.value;
			array = loadData(xDataName, yDataName, csvName);
			xData = array[0];
			yData = array[1];
			xLabel = array[2];
			yLabel = array[3];
			csvName = array[4];
			drawPlot(xData, yData, xLabel, yLabel, csvName);
		};
	}







