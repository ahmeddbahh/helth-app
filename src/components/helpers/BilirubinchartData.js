function transcutaneousBilirubinLow() {
    return [
        null,
        3.9,
        4.8,
        4.9,
        7,
        7.8,
        8.7,
        9.7,
        11.1,
        11.7,
        12.3,
        12.9,
        13.1,
        13.05,
        13.03,
    ]
}

function transcutaneousBilirubinMedium() {
    return [
        null,
        5.1,
        5.9,
        6,
        8.9,
        10,
        10.9,
        12.7,
        13.3,
        14.8,
        15.1,
        15.5,
        15.9,
        15.6,
        15.3,
    ]
}

function transcutaneousBilirubinHeigh() {
    return [
        null,
        7.1,
        7.2,
        7.8,
        11.1,
        12.1,
        13.1,
        15.1,
        16,
        16.9,
        17.3,
        17.4,
        17.7,
        17.6,
        17.2,

    ]
}

function timeAxis() {
    return [
        0,
        12,
        18,
        24,
        36,
        40,
        48,
        60,
        72,
        84,
        96,
        108,
        120,
        132,
        144,

    ]
}



module.exports = {
    timeAxis: timeAxis(),
    transcutaneousBilirubinLow: transcutaneousBilirubinLow(),
    transcutaneousBilirubinMedium: transcutaneousBilirubinMedium(),
    transcutaneousBilirubinHeigh: transcutaneousBilirubinHeigh(),

}