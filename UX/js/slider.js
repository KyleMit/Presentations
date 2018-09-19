var rangeSlider = document.getElementById('proximity-slider');

noUiSlider.create(rangeSlider, {
    start: 0,
    range: {
        'min': [-80],
        'max': [80]
    },
    pips: {
        mode: 'positions',
        values: [0, 25, 50, 75, 100],
        density: 25,
        format: {
            to: function (value) {
                if (value < -60) return "contained";
                if (value < -20) return "adjacent";
                if (value < 20) return "buffered";
                if (value < 60) return "apart";
                if (value > 60) return "distant";
                return value + ',-';
            }
        }
    }
});

rangeSlider.noUiSlider.on('update', function (values, handle) {
    var value = values[handle];
    console.log(value);

    var isContained = value < -55;
    var isAdjacent = value < -20 && value > -55;

    document.querySelectorAll(".elevator .control").forEach(function (el) {

        el.classList.toggle("contained", isContained);
        el.classList.toggle("adjacent", isAdjacent);

        el.querySelector(".label").style.marginLeft = value + "px";
    });
});
