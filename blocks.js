fetch('blocks/structure.json')
.then(response => response.json())
.then(blocks => {
    Blockly.defineBlocksWithJsonArray(blocks);
    console.log("structure Blocks loaded successfully!");
})
.catch(error => console.error("Error loading blocks:", error));

fetch('blocks/metadata_seo.json')
.then(response => response.json())
.then(blocks => {
    Blockly.defineBlocksWithJsonArray(blocks);
    console.log("metadata & seo Blocks loaded successfully!");
})
.catch(error => console.error("Error loading blocks:", error));

fetch('blocks/text_format.json')
.then(response => response.json())
.then(blocks => {
    Blockly.defineBlocksWithJsonArray(blocks);
    console.log("text format loaded successfully!");
})
.catch(error => console.error("Error loading blocks:", error));

fetch('blocks/hyperlinks.json')
.then(response => response.json())
.then(blocks => {
    Blockly.defineBlocksWithJsonArray(blocks);
    console.log("hyperlink loaded successfully!");
})
.catch(error => console.error("Error loading blocks:", error));

fetch('blocks/lists.json')
.then(response => response.json())
.then(blocks => {
    Blockly.defineBlocksWithJsonArray(blocks);
    console.log("list loaded successfully!");
})
.catch(error => console.error("Error loading blocks:", error));


fetch('blocks/table.json')
.then(response => response.json())
.then(blocks => {
    Blockly.defineBlocksWithJsonArray(blocks);
    console.log("table loaded successfully!");
})
.catch(error => console.error("Error loading blocks:", error));


fetch('blocks/forms.json')
.then(response => response.json())
.then(blocks => {
    Blockly.defineBlocksWithJsonArray(blocks);
    console.log("form loaded successfully!");
})
.catch(error => console.error("Error loading blocks:", error));

fetch('blocks/media.json')
.then(response => response.json())
.then(blocks => {
    Blockly.defineBlocksWithJsonArray(blocks);
    console.log("media loaded successfully!");
})
.catch(error => console.error("Error loading blocks:", error));

fetch('blocks/semantic.json')
.then(response => response.json())
.then(blocks => {
    Blockly.defineBlocksWithJsonArray(blocks);
    console.log("form loaded successfully!");
})
.catch(error => console.error("Error loading blocks:", error));


document.getElementById('runCode').onclick = function() {
    eval(Blockly.JavaScript.workspaceToCode(workspace));
};
var workspace = Blockly.inject('blocklyDiv', {
    renderer: 'zelos',
    toolbox: document.getElementById('toolbox'),
    zoom: {
        controls: true,    // Enable zoom in/out buttons
        wheel: false,       // Enable zoom with mouse wheel
        startScale: .8,     // Default zoom level (1 = 100%)
        maxScale: 3,       // Maximum zoom level
        minScale: 0.3,     // Minimum zoom level
        scaleSpeed: 1.2    // Zoom speed factor
    },
    move: {
        scrollbars: true,  // Enable scrolling with scrollbars
        drag: true,        // Allow panning by dragging
        wheel: true       // Disable scrolling with the mouse wheel
    },
    grid: {
        spacing: 20,       // Grid spacing in pixels
        length: 3,         // Grid line length
        colour: '#ccc',    // Grid color
        snap: true         // Snap blocks to grid
    },
    toolboxOptions: {
      border: true, // Show border around toolbox
      background: '#ffffff' // Dark background

  }
});


