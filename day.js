function day_name(date) {
    const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return weekdays[date.getDay()];
}

function greeting(date) {
    return `Hello, world! Happy ${day_name(date)}`;
}