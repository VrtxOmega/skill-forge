/**
 * Skill Forge - Edge Gallery Launcher
 * 
 * This file serves as the execution bridge for Edge Gallery.
 * When the 'run_js' tool is called by the agent, this script
 * intercepts the generated configuration (if provided) and 
 * launches the local FORGE UI (index.html).
 */

module.exports = async function run(args) {
    // Attempt to parse the skill specification if Gemma passed it
    let specData = {};
    if (args && typeof args === 'string') {
        try {
            specData = JSON.parse(args);
        } catch(e) {
            specData = { raw: args };
        }
    } else if (args && typeof args === 'object') {
        specData = args;
    }

    // Determine the path to our local builder UI
    // In Edge Gallery, you might need to adjust this depending on how local assets are served
    const uiUrl = 'index.html'; 
    
    // Fallback: If Edge Gallery handles run_js as returning an object for a webview:
    return {
        type: "webview",
        url: uiUrl,
        // Pass data through URL hash/query or state if supported by your runtime
        data: encodeURIComponent(JSON.stringify(specData))
    };
};
