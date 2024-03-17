const modules = require('./index');

hasfsHolyQuran = modules.hasfsHolyQuran;

// Check if hasfsHolyQuran[0] exists before accessing its properties
if (hasfsHolyQuran[0] && hasfsHolyQuran[0]["verses"]) {
    console.log(hasfsHolyQuran[0]["verses"][2]);
} else {
    console.log("Error: Unable to access verses.");
}