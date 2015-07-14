$(function() {
    var subScreenIsActive = false;
    var screenShifting = false;

    $(document)
        .on("webkitTransitionEnd", function(event) {
            if (event.originalEvent.propertyName != "opacity" && event.originalEvent.propertyName != "color") {
                screenShifting = false;
                if (!subScreenIsActive) {
                    $(".quadrantContent").hide();
                    $(".faded").removeClass("faded");
                }
            }
        })
        .on("transitionend", function(event) {
            if (event.originalEvent.propertyName != "opacity" && event.originalEvent.propertyName != "color") {
                screenShifting = false;
                if (navigator.appName === "Opera" && subScreenIsActive) {
                    $('.quadrantCover').hide();
                }
                else if (!subScreenIsActive) {
                    $(".quadrantContent").hide();
                    $(".faded").removeClass("faded");
                }
            }
        })
        .on("msTransitionEnd", function(event) {
            if (event.originalEvent.propertyName != "opacity" && event.originalEvent.propertyName != "color") {
                screenShifting = false;
                if (!subScreenIsActive) {
                    $(".quadrantContent").hide();
                    $(".faded").removeClass("faded");
                }
            }
        });

    $(document).ready(function() {
        setupMusicTracks();

        if (navigator.appName === "Microsoft Internet Explorer") {
            $(".fullWidthTextBoxWrapper")
                .removeClass("fullWidthTextBoxWrapper")
                .addClass("textBoxWrapper")
                .find("p")
                    .removeClass("ellipseGlowTextBox")
                    .addClass("textBox");
        }

        $(".quadrantContent").hide();
    });

    $('h2').hover(function() {
            var $this = $(this)[0];

            if ($this === $("#topLeftHeader")[0]) {
                $("#topLeftCover").css("opacity", ".5");
            }
            else if ($this === $("#topRightHeader")[0]) {
                $("#topRightCover").css("opacity", ".5");
            }
            else if ($this === $("#bottomLeftHeader")[0]) {
                $("#bottomLeftCover").css("opacity", ".5");
            }
            else if ($this === $("#bottomRightHeader")[0]) {
                $("#bottomRightCover").css("opacity", ".5");
            }

            $(this).css("color", "#FFF");
        },
        function() {
            var $this = $(this)[0];

            if (subScreenIsActive) {
                if ($this === $("#topLeftHeader")[0]) {
                    $("#topLeftCover").css("opacity", "0");
                }
                else if ($this === $("#topRightHeader")[0]) {
                    $("#topRightCover").css("opacity", "0");
                }
                else if ($this === $("#bottomLeftHeader")[0]) {
                    $("#bottomLeftCover").css("opacity", "0");
                }
                else if ($this === $("#bottomRightHeader")[0]) {
                    $("#bottomRightCover").css("opacity", "0");
                }
            }
            else {
                if ($this === $("#topLeftHeader")[0]) {
                    $("#topLeftCover").css("opacity", "1");
                }
                else if ($this === $("#topRightHeader")[0]) {
                    $("#topRightCover").css("opacity", "1");
                }
                else if ($this === $("#bottomLeftHeader")[0]) {
                    $("#bottomLeftCover").css("opacity", "1");
                }
                else if ($this === $("#bottomRightHeader")[0]) {
                    $("#bottomRightCover").css("opacity", "1");
                }
                $(this).css("color", "#000");
            }
        }
    )
    $('h2').click(function() {
        // If we're closing a subquadrant.
        if (subScreenIsActive) {
            $("title").html("Home | Blake Thiessen");

            var newColors = randomColorScheme();

            // If we're using IE or Opera, don't rely on pointer-events for
            // effects in subquadrants. .quadrantCover is an effect.
            if (navigator.appName === "Microsoft Internet Explorer" ||
                navigator.appName === "Opera") {
                $('.quadrantCover').show();
            }

            if ($(this)[0] === $("#topLeftHeader")[0]) {
                $(this).html('Games');
                $("#topLeftCover").css("background-color", newColors[3]);
                $("#topRightCover").css("background-color", newColors[1]);
                $("#bottomRightCover").css("background-color", newColors[0]);
                $("#bottomLeftCover").css("background-color", newColors[2]);
                quadrantAnimation.closeTopLeft();
            }
            else if ($(this)[0] === $("#topRightHeader")[0]) {
                $(this).html('Music');
                $("#topLeftCover").css("background-color", newColors[1]);
                $("#topRightCover").css("background-color", newColors[3]);
                $("#bottomLeftCover").css("background-color", newColors[0]);
                $("#bottomRightCover").css("background-color", newColors[2]);
                quadrantAnimation.closeTopRight();
            }
            else if ($(this)[0] === $("#bottomLeftHeader")[0]) {
                $(this).html('Swing');
                $("#topLeftCover").css("background-color", newColors[1]);
                $("#topRightCover").css("background-color", newColors[0]);
                $("#bottomLeftCover").css("background-color", newColors[3]);
                $("#bottomRightCover").css("background-color", newColors[2]);
                quadrantAnimation.closeBottomLeft();
            }
            else if ($(this)[0] === $("#bottomRightHeader")[0]) {
                $(this).html('Me');
                $("#topLeftCover").css("background-color", newColors[0]);
                $("#topRightCover").css("background-color", newColors[1]);
                $("#bottomLeftCover").css("background-color", newColors[2]);
                $("#bottomRightCover").css("background-color", newColors[3]);
                quadrantAnimation.closeBottomRight();
            }

            $(".faded").css("opacity", "1");
            subScreenIsActive = false;

            if (navigator.appName === "Microsoft Internet Explorer") {
                $(".quadrantContent").hide();
                $(".faded").removeClass("faded");
            }
        }
        else {
            $(this).html('Back');

            if (navigator.appName === "Microsoft Internet Explorer") {
                $('.quadrantCover').hide();
            }

            if ($(this)[0] === $("#topLeftHeader")[0]) {
                $("#topLeftContent").show();
                quadrantAnimation.openTopLeft();
                $("title").html("Games | Blake Thiessen");
            }
            else if ($(this)[0] === $("#topRightHeader")[0]) {
                $("#topRightContent").show();
                quadrantAnimation.openTopRight();
                $("title").html("Music | Blake Thiessen");
            }
            else if ($(this)[0] === $("#bottomLeftHeader")[0]) {
                $("#bottomLeftContent").show();
                quadrantAnimation.openBottomLeft();
                $("title").html("Swing | Blake Thiessen");
            }
            else if ($(this)[0] === $("#bottomRightHeader")[0]) {
                $("#bottomRightContent").show();
                quadrantAnimation.openBottomRight();
                $("title").html("Me | Blake Thiessen");
            }

            $(".faded").css("opacity", "0");

            subScreenIsActive = true;
        }
    });
});

function setupMusicTracks() {
    // Randomly start with a track, Math.random() is multiplied by total tracks.
    var currentTrackNumber = Math.floor(Math.random() * 7);
    var currentTrack = $("#trackHeader");

    setTrackData(currentTrackNumber, currentTrack);

    if (navigator.appName !== "Microsoft Internet Explorer") {
        $("#musicPlayer").css("position", "absolute");
    }

    // Bind the current track to the clicked on track.
    $(document).on("click", ".musicTrack", function() {
        if ($(this)[0] !== $("#" + currentTrackNumber)) {
            // Darken this track's background and lighten the old track.
            $(this).addClass("selectedMusicTrack");
            $("#" + currentTrackNumber).removeClass("selectedMusicTrack");

            currentTrackNumber = parseInt($(this).attr("id"));

            setTrackData(currentTrackNumber, currentTrack);

            // Switch out the song itself.
            var player = $("#musicPlayer")[0];
            player.pause();
            player.load();
            player.play();
        }
    });
}

function setTrackData(currentTrackNumber, currentTrack) {
    switch (currentTrackNumber) {
        case 0:
            currentTrack.find(".trackTitle").html("Yellow (Coldplay Cover)");
            currentTrack.find(".trackArtist").html("Blake & Layla");
            $("#mp3_src").attr("src", "music/Yellow-ColdplayCover.mp3");
            $("#ogg_src").attr("src", "music/Yellow-ColdplayCover.ogg");
            break;
        case 1:
            currentTrack.find(".trackTitle").html("Stranger");
            currentTrack.find(".trackArtist").html("Blake & Layla");
            $("#mp3_src").attr("src", "music/Stranger.mp3");
            $("#ogg_src").attr("src", "music/Stranger.ogg");
            break;
        case 2:
            currentTrack.find(".trackTitle").html("Sugar");
            currentTrack.find(".trackArtist").html("Blake & Layla");
            $("#mp3_src").attr("src", "music/Sugar.mp3");
            $("#ogg_src").attr("src", "music/Sugar.ogg");
            break;
        case 3:
            currentTrack.find(".trackTitle").html("Off the Track");
            currentTrack.find(".trackArtist").html("Blake, Zach, Susie. & Michael");
            $("#mp3_src").attr("src", "music/OffTheTrack.mp3");
            $("#ogg_src").attr("src", "music/OffTheTrack.ogg");
            break;
        case 4:
            currentTrack.find(".trackTitle").html("SFS");
            currentTrack.find(".trackArtist").html("Blake");
            $("#mp3_src").attr("src", "music/SFS.mp3");
            $("#ogg_src").attr("src", "music/SFS.ogg");
            break;
        case 5:
            currentTrack.find(".trackTitle").html("Paleontology");
            currentTrack.find(".trackArtist").html("Matt, Kurt, & Blake");
            $("#mp3_src").attr("src", "music/Paleontology.mp3");
            $("#ogg_src").attr("src", "music/Paleontology.ogg");
            break;
        case 6:
            currentTrack.find(".trackTitle").html("<i>GodFighter</i> Game SoundTrack");
            currentTrack.find(".trackArtist").html("Blake");
            $("#mp3_src").attr("src", "music/GodFighter-Soundtrack.mp3");
            $("#ogg_src").attr("src", "music/GodFighter.Soundtrack.ogg");
            break;
    }
}

/*
 TODO: Add rectangular decoration
 TODO: Consider giving each quadrant a background
 TODO: Preload stuff
 TODO: Create Movies section
 TODO: Make PolyPong look nice
 TODO: Make subquadrants expand if needed.
 TODO: Refactor and optimize jQuery
 TODO: Optimize for mobile
*/