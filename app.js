
function color_pie_chart(name){
	const svg = d3.select(name);

	var width = parseInt(svg.style("width"), 10);
	var height= parseInt(svg.style("height"), 10);
	var radius = Math.min(width, height) / 2;

	var g = svg.append("g")
			   .attr("transform", "translate(" + width / 2 + "," + height*0.0001 + ")");
	var data = [2, 4, 8];
	var pie = d3.pie();
	var color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3']);

	// Generate the pie
	var pie = d3.pie();

	// Generate the arcs
	var arc = d3.arc()
	            .innerRadius(0)
	            .outerRadius(radius);

	//Generate groups
	var arcs = g.selectAll("arc")
	            .data(pie(data))
	            .enter()
	            .append("g")
	            .attr("class", "arc")

	//Draw arc paths
	arcs.append("path")
	    .attr("fill", function(d, i) {
	        return color(i);
	    })
	    .attr("d", arc);
	};
// color_pie_chart('#B1Color');
// color_pie_chart('#B2Color');
// color_pie_chart('#B3Color');
// color_pie_chart('#B4Color');
// color_pie_chart('#B5Color');

// const width = 100;
// const height = 500;

// var widthScale = d3.scale.linear().domain([0,60]).range([0, width]);



// svg.append('circle').attr('cx', '100')
// 					.attr('cy', '100')
// 					.attr('r', '50')
// 					.attr('fill', 'red');

// svg.append('text').attr('x', 200)
// 				  .attr('y', 450)
// 				  .attr('fill', 'grey')
// 				  .text('Hello There!');

// var dataArray = [20,40,50];

// var bars = svg.selectAll("rect")
// 			  .data(dataArray)
// 			  .enter()
// 			  .append("rect")
// 			  .attr("y", function(d){return widthScale(d);})
// 			  .attr("width", function(d){return d;})
// 			  .attr("height", function(d){return 50;});