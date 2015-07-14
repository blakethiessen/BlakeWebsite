var quadrantAnimation = (function() {

    return {
        openTopLeft: function() {
            $("#topRightCover")
                .css("width", "0%")
                .css("height", "100%")
                .css("left", "100%");
            $("#bottomLeftCover")
                .css("width", "100%")
                .css("height", "0%")
                .css("top", "100%");
            $("#bottomRightCover")
                .css("width", "0%")
                .css("height", "0%")
                .css("left", "100%")
                .css("top", "100%");

            $("#topRightHeader")
                .addClass("faded")
                .css("left", "100%");
            $("#bottomLeftHeader")
                .addClass("faded")
                .css("top", "100%");
            $("#bottomRightHeader")
                .addClass("faded")
                .css("left", "100%")
                .css("top", "100%");

            $("#topLeftCover")
                .css("opacity", "0")
                .css("width", "100%")
                .css("height", "100%");

            $("#center")
                .addClass("faded")
                .css("left", "100%")
                .css("top", "100%");
        },
        closeTopLeft: function() {
            $("#topRightCover")
                .css("width", "50%")
                .css("height", "50%")
                .css("left", "50%");
            $("#bottomLeftCover")
                .css("width", "50%")
                .css("height", "50%")
                .css("top", "50%");
            $("#bottomRightCover")
                .css("width", "50%")
                .css("height", "50%")
                .css("left", "50%")
                .css("top", "50%");

            $("#topLeftCover")
                .css("opacity", ".5")
                .css("width", "50%")
                .css("height", "50%");
            $("#center")
                .css("left", "50%")
                .css("top", "50%");

            $("#topRightHeader")
                .css("left", "75%");
            $("#bottomLeftHeader")
                .css("top", "75%");
            $("#bottomRightHeader")
                .css("left", "75%")
                .css("top", "75%");
        },
        openTopRight: function() {
            $("#topLeftCover")
                .css("width", "0%")
                .css("height", "100%");
            $("#bottomLeftCover")
                .css("width", "0%")
                .css("height", "0%")
                .css("top", "100%");
            $("#bottomRightCover")
                .css("width", "100%")
                .css("height", "0%")
                .css("left", "0%")
                .css("top", "100%");

            $("#topLeftHeader")
                .addClass("faded")
                .css("left", "0%");
            $("#bottomLeftHeader")
                .addClass("faded")
                .css("top", "100%")
                .css("left", "0%");
            $("#bottomRightHeader")
                .addClass("faded")
                .css("top", "100%");

            $("#topRightCover")
                .css("opacity", "0")
                .css("left", "0%")
                .css("width", "100%")
                .css("height", "100%");

            $("#center")
                .css("left", "0%")
                .css("top", "100%")
                .addClass("faded");
        },
        closeTopRight: function() {
            $("#topLeftCover")
                .css("width", "50%")
                .css("height", "50%");
            $("#bottomLeftCover")
                .css("width", "50%")
                .css("height", "50%")
                .css("top", "50%");
            $("#bottomRightCover")
                .css("width", "50%")
                .css("height", "50%")
                .css("left", "50%")
                .css("top", "50%");

            $("#topLeftHeader")
                .css("left", "25%");
            $("#bottomLeftHeader")
                .css("top", "75%")
                .css("left", "25%");
            $("#bottomRightHeader")
                .css("top", "75%");

            $("#topRightCover")
                .css("opacity", ".5")
                .css("height", "50%")
                .css("left", "50%")
            $("#center")
                .css("left", "50%")
                .css("top", "50%");
        },
        openBottomLeft: function() {
            $("#topLeftCover")
                .css("width", "100%")
                .css("height", "0%")
                .css("left", "0%");
            $("#bottomRightCover")
                .css("width", "0%")
                .css("height", "100%")
                .css("left", "100%")
                .css("top", "0%");
            $("#topRightCover")
                .css("width", "0%")
                .css("height", "0%")
                .css("left", "100%")
                .css("top", "0%");

            $("#topLeftHeader")
                .addClass("faded")
                .css("top", "0%");
            $("#topRightHeader")
                .addClass("faded")
                .css("top", "0%")
                .css("left", "100%");
            $("#bottomRightHeader")
                .addClass("faded")
                .css("left", "100%");

            $("#bottomLeftCover")
                .css("opacity", "0")
                .css("width", "100%")
                .css("height", "100%")
                .css("top", "0%");

            $("#center")
                .css("left", "100%")
                .css("top", "0%")
                .addClass("faded");
        },
        closeBottomLeft: function() {
            $("#topLeftCover")
                .css("width", "50%")
                .css("height", "50%")
                .css("left", "0%");
            $("#bottomRightCover")
                .css("width", "50%")
                .css("height", "50%")
                .css("top", "50%")
                .css("left", "50%");
            $("#topRightCover")
                .css("width", "50%")
                .css("height", "50%")
                .css("left", "50%")
                .css("top", "0%");

            $("#topLeftHeader")
                .css("top", "25%");
            $("#topRightHeader")
                .css("top", "25%")
                .css("left", "75%");
            $("#bottomRightHeader")
                .css("left", "75%");

            $("#bottomLeftCover")
                .css("opacity", ".5")
                .css("top", "50%")
                .css("width", "50%")
                .css('height', "50%");
            $("#center")
                .css("left", "50%")
                .css("top", "50%");
        },
        openBottomRight: function() {
            $("#topLeftCover")
                .css("width", "0%")
                .css("height", "0%");
            $("#bottomLeftCover")
                .css("width", "0%")
                .css("height", "100%")
                .css("top", "0%");
            $("#topRightCover")
                .css("width", "100%")
                .css("height", "0%")
                .css("left", "0%");

            $("#topLeftHeader")
                .addClass("faded")
                .css("top", "0%")
                .css("left", "0%");
            $("#topRightHeader")
                .addClass("faded")
                .css("top", "0%");
            $("#bottomLeftHeader")
                .addClass("faded")
                .css("left", "0%");

            $("#bottomRightCover")
                .css("opacity", "0")
                .css("width", "100%")
                .css("height", "100%")
                .css("left", "0%")
                .css("top", "0%");

            $("#center")
                .css("left", "0%")
                .css("top", "0%")
                .addClass("faded");
        },
        closeBottomRight: function() {
            $("#topLeftCover")
                .css("width", "50%")
                .css("height", "50%");
            $("#bottomLeftCover")
                .css("width", "50%")
                .css("height", "50%")
                .css("top", "50%");
            $("#topRightCover")
                .css("width", "50%")
                .css("height", "50%")
                .css("left", "50%");

            $("#topLeftHeader")
                .css("top", "25%")
                .css("left", "25%");
            $("#topRightHeader")
                .css("top", "25%");
            $("#bottomLeftHeader")
                .css("left", "25%");

            $("#bottomRightCover")
                .css("opacity", ".5")
                .css("width", "50%")
                .css("height", "50%")
                .css("left", "50%")
                .css("top", "50%");
            $("#center")
                .css("left", "50%")
                .css("top", "50%")
        }
    }

} ())