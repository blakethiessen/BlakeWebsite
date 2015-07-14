function randomColorScheme() {

    // Generate random HSL color array
    var baseArr = [];
    baseArr[0] = Math.floor(Math.random() * 360);
    baseArr[1] = Math.floor(Math.random() * 25) + 50;
    baseArr[2] = Math.floor(Math.random() * 25) + 50;

    var base = "hsl(" + baseArr[0] + "," + baseArr[1] + "%," + baseArr[2] + "%)";
    var analog1 = "hsl(" + Math.abs(baseArr[0] + 20) + "," + baseArr[1] + "%," + baseArr[2] + "%)";
    var analog2 = "hsl(" + Math.abs(baseArr[0] - 20) + "," + baseArr[1] + "%," + baseArr[2] + "%)";
    var complementary;

    if (baseArr[0] > 180)
        complementary = "hsl(" + (Math.abs(baseArr[0] - 180)) + "," + (baseArr[1]) + "%," + (baseArr[2]) + "%)";
    else
        complementary = "hsl(" + (Math.abs(baseArr[0] + 180)) + "," + (baseArr[1]) + "%," + (baseArr[2]) + "%)";

    // Return array calculations
    return [base, analog1, analog2, complementary];

}