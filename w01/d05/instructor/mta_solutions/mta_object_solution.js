// Single Object solution to MTA

var mta = {

    data: {
        "N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
        "L": ["8th", "6th", "Union Square", "3rd", "1st"],
        "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
    },

    hub: "Union Square",

    lines: function() {
        return Object.keys(this.data); // fetches the keys in this.data
    },

    stops: function(line) {
        return this.data[line]; // fetches the value of the key line
    },

    distanceSingleLine: function(line, stop1, stop2) {
        var stops = this.stops(line); // uses the function stops

        // computes the distance biwteen the stops
        var distance = stops.indexOf(stop2) - stops.indexOf(stop1);
        distance = Math.abs(distance);

        return distance;
    },

    distance: function(line1, stop1, line2, stop2) {
        // This function uses the distanceSingleLine to compute
        // the stops traveled on line1 from stop1 to the hub
        // and then on line2 from the hub to stop2
        var distance1 = this.distanceSingleLine(line1, stop1, this.hub);
        var distance2 = this.distanceSingleLine(line2, this.hub, stop2);
        return distance1 + distance2;
    }
};


