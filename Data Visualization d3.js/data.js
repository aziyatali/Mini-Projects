const DATA = [
    {id: "d1", value: 10, region: 'USA'},
    {id: "d2", value: 14, region: 'KOR'},
    {id: "d3", value: 15, region: 'KGZ'},
    {id: "d4", value: 11, region: 'KAZ'}];

const xScale = d3.scaleBand()
    .domain(DATA.map((dta) => dta.region))
    .rangeRound([0, 600])
    .padding(0.1);

const yScale = d3.scaleLinear().domain([0, 20]).range([400, 0])


const container = d3.select('svg')
    .classed('container', true);

const bars = container
    .selectAll('.bar') 
    .data(DATA)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('height', data => 400 - yScale(data.value)) // it starts with top left so we want bottom left
    .attr('width', xScale.bandwidth())
    .attr('x', data => xScale(data.region))
    .attr('y', data => yScale(data.value));

    setTimeout(() => {
        bars.data(DATA.slice(0,2)).exit().remove();
    }, 2000)