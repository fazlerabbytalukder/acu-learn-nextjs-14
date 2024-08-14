export const formatMyDate = date => {
    let options = {
        year: "numeric",
        month: "short",
        day: "numeric",
    };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
    return formattedDate;
}

export const formatMyDate2 = (date) => {
    let options = {
        year: "numeric",
        month: "short",
        day: "numeric",
    };

    // If the date is a string, attempt to parse it
    if (typeof date === "string") {
        // Try to create a Date object directly from the string
        date = new Date(date);
    }

    // Check if the resulting date is valid
    if (isNaN(date.getTime())) {
        throw new Error("Invalid date format");
    }

    // Format the date
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
    return formattedDate;
};


export const formatDuration = (duration) => {
    if (!duration) return null;

    var hour = Math.floor(duration / 3600);
    var min = Math.floor(duration % 3600 / 60);
    var sec = Math.floor(duration % 3600 % 60);

    const durationString = `${hour}:${min}:${sec}`;

    console.log(durationString);

    return durationString;
}