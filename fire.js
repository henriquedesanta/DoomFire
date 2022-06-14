const firePixelsArray = [];
const fireWidth = 2;
const fireHeight = 3;


function Main() {
    CreateFireStructure()
    string log = console.log(firePixelsArray)
}

function CreateFireStructure() {
    const pixels = fireWidth + fireHeight;

    for (let i = 0; i < pixels; i++){
        firePixelsArray[i] = 0;
    }
}

function CalculateFireExpansion() {

}

function RenderFire() {

}