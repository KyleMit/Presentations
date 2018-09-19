/* #########################
              Proximity
              https://jsfiddle.net/KyleMit/frbzcLtd/
              ####################### */
var xCategories = ['Equivalent', 'Similar', 'Connected', 'Unrelated', 'Opposed'];
var yCategories = ['Contained', 'Adjacent', 'Buffered', 'Apart', 'Distant']
Highcharts.chart('proximity-chart', {

    title: {
        text: 'Conextual Relationship & Proximity',
        style: {
            fontSize: '25px'
        }
    },
    xAxis: {
        title: {
            text: 'Contextual Relationship',
            style: {
                fontSize: '20px'
            }
        },
        categories: xCategories
    },
    yAxis: {
        title: {
            text: 'Proximity',
            style: {
                fontSize: '20px'
            }
        },
        categories: yCategories
    },

    legend: { enabled: false },
    credits: { enabled: false },
    tooltip: {
        useHTML: true,
        formatter: function () {
            return 'Relationship: <b>' + xCategories[this.point.x] + "</b><br/>" +
                'Proximity: <b>' + yCategories[this.point.y] + "</b><br/>" +
                (this.point.img ? "<img src='" + this.point.img + "'></img><br/>" : "") +
                (this.point.description ? this.point.description : "");
        }
    },
    series: [{
        name: 'Ideal',
        data: [
            { x: 0, y: 0, description: "" },
            { x: 1, y: 1, description: "" },
            { x: 2, y: 2, description: "" },
            { x: 3, y: 3, description: "" },
            { x: 4, y: 4, description: "" }
        ],
        label: { enabled: false },
        type: "line",
        lineWidth: 5,
        marker: {
            symbol: 'url(https://kylemit.github.io/Presentations/UX/content/fonts/fa/svg/fa-check-circle.png)'
        },
        color: "#06b706"
    },
    {
        name: 'Problematic',
        data: [
            { x: 0, y: 4, description: "", img: "https://i.imgur.com/Mi9Q1Tl.png" },
            { x: 4, y: 0, description: "", img: "https://i.imgur.com/Fvk61xI.png" },
        ],
        label: { enabled: false },
        type: "scatter",
        marker: {
            symbol: 'url(https://kylemit.github.io/Presentations/UX/content/fonts/fa/svg/fa-exclamation-triangle-red.png)'
        },
        color: "red"
    }],


});


/* #########################
   Emphasis
   https://jsfiddle.net/KyleMit/vh56sjd8/
   ####################### */

var likert = ['Low', 'Medium', 'High'];

Highcharts.chart('emphasis-chart', {

    title: {
        text: 'Information Relevance & Emphasis',
        style: {
            fontSize: '25px'
        }
    },
    xAxis: {
        title: {
            text: 'Information Relevance',
            style: {
                fontSize: '20px'
            }
        },
        categories: likert
    },
    yAxis: {
        title: {
            text: 'Emphasis',
            style: {
                fontSize: '20px'
            }
        },
        categories: likert
    },

    legend: { enabled: false },
    credits: { enabled: false },
    tooltip: {
        useHTML: true,
        formatter: function () {
            return "<span style='font-size:16px;'>" + this.point.title + "</span><br/>" +
                'Information: <b>' + likert[this.point.x] + "</b><br/>" +
                'Emphasis: <b>' + likert[this.point.y] + "</b><br/><br/>" +
                (this.point.description ? this.point.description : "");
        }
    },
    series: [{
        name: 'Ideal',
        data: [
            { x: 0, y: 0, title: "Clarity", description: "" },
            { x: 1, y: 1, title: "Clarity", description: "" },
            { x: 2, y: 2, title: "Clarity", description: "" },
        ],
        label: { enabled: false },
        type: "line",
        lineWidth: 5,
        marker: {
            symbol: 'url(https://kylemit.github.io/Presentations/UX/content/fonts/fa/svg/fa-check-circle.png)'
        },
        color: "#06b706"
    },
    {
        name: 'Problematic',
        data: [
            { x: 0, y: 2, title: "Visual Noise", description: "" },
            { x: 2, y: 0, title: "Weak Signal", description: "" },
        ],
        label: { enabled: false },
        type: "scatter",
        marker: {
            symbol: 'url(https://kylemit.github.io/Presentations/UX/content/fonts/fa/svg/fa-exclamation-triangle-red.png)'
        },
        color: "red"

    }]
});
