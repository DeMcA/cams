# Cams

A chart showing the reported camming ranges of various rock climbing camming devices. 
It is currently hosted on AWS, although this may change:

<http://d3cams.s3-website-eu-west-1.amazonaws.com/index.html>


## Motivation

This was originally an exercise in learning how to create a webapp and write html, neither of which I had much experience with.
However, it makes little sense to maintain a python backend just to generate a simple bar chart.
More recently, I had been tinkering with other people's d3 code at work, so migrating to JavaScript seemed like a good opportunity to better learn the framework's capabilities.
It can also be hosted statically.

There are lots of other cam size charts and tables out there but none worked exactly how wanted.
I will try to add links to those I've come across here at some point.

I have now got sufficient cams to cover all the normal sizes but being able to quickly visualise potential additions to the rack is still fun. Currently, I am trying to decide whether I should go for very big, very small or add more totems, since most of my local climbing is limestone.


## Contributing

I would ideally like to expand the data to include most or all commonly available cams on the market.
Any help with this would be welcome; it is very easy to add them to the chart, especially if the data is an appropriately formatted csv or json.
Comments, bug-fixes or additions to the code are also welcome.


## Sources 

The camming range data was originally taken from the  [Needle Sports](http://www.needlesports.com/) website (one of many excellent climbing shops in the UK).
It has since been augmented from other sources, which I should add here when I get round to consolidating the data.


## License

GPL if you want to use the code.
I assume the cam size and weight measurements are not subject to copyright and/or fall under a copyright exemption.
In any case, manufacturers and retailers would presumably welcome the data being re-published. From my perspective, re-use of data in this repository is fine for any purpose.
