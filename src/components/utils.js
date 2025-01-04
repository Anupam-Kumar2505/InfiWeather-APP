export function getAltFromPath(path) {
    if (!path) {
        console.error("Path to image expected");
        return "image";
    }

    if (typeof path !== "string") {
        console.error("Path must be a String");
        return "image";
    }

    const filenameParts = path.split("/").pop().split(".");
    return filenameParts.length > 1
        ? filenameParts.slice(0, -1).join(".")
        : filenameParts[0] || "image";
}