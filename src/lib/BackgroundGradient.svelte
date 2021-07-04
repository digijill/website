<script>
import { onMount } from 'svelte';

var time0 = (new Date()).getTime() / 1000;

const positions = [
    -1, -1,
    1, -1,
    -1,  1,
    -1,  1,
    1, -1,
    1,  1
];

const texCoords = [
    0,  0,
    1,  0,
    0,  1,
    0,  1,
    1,  0,
    1,  1
]

const colors = [
    [255/255, 219/255, 210/255], // flamingo
    [231/255, 194/255, 227/255], // quartz
    [179/255, 227/255, 232/255], // cloud
    [179/255, 227/255, 191/255], // seafoam
    [246/255, 232/255, 151/255] // pollen
];

const numColors = colors.length;

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var tl0 = [255/255, 219/255, 210/255];
var tr0 = [231/255, 194/255, 227/255];
var bl0 = [179/255, 227/255, 232/255];
var br0 = [179/255, 227/255, 191/255];

var tl1 = [239/255, 42/255, 193/255]; // rose
var tr1 = [30/255, 178/255, 255/255]; // ocean
var bl1 = [67/255, 85/255, 200/255]; // sapphire
var br1 = [255/255, 199/255, 0]; // sun

// vertex shader
const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec2 aTexCoord;

    varying vec2 vTexCoord;

    void main(void) {
        gl_Position = aVertexPosition;
        vTexCoord = aTexCoord;
    }
`;

// fragment shader
const fsSource = `
    precision mediump float;

    varying vec2 vTexCoord;

    uniform float uTime;
    uniform vec3 tl0;
    uniform vec3 tr0;
    uniform vec3 bl0;
    uniform vec3 br0;
    uniform vec3 tl1;
    uniform vec3 tr1;
    uniform vec3 bl1;
    uniform vec3 br1;

    void main() {
        float pct = abs(sin(uTime));

        vec3 l = mix(mix(bl0, tl0, vTexCoord.t), mix(bl1, tl1, vTexCoord.t), pct);
        vec3 r = mix(mix(br0, tr0, vTexCoord.t), mix(br1, tr1, vTexCoord.t), pct);
        vec3 c = mix(l, r, vTexCoord.s);
        gl_FragColor = vec4(c, 1);
    }
`;

// step 2: create and compile the shaders
function loadShader(gl, type, source) {
    const shader = gl.createShader(type);

    //send source to the shader object
    gl.shaderSource(shader, source);

    //compile the shader program
    gl.compileShader(shader);

    // check
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.log('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}

// step 3: initialize shader program and attach the shaders
function initShaderProgram(gl, vsSource, fsSource) {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    // check
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        console.log('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
        return null;
    }

    return shaderProgram;
}

function initBuffer(gl, data) {

    // create buffer for positions
    const buffer = gl.createBuffer();
    // bind to the gl context
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

    // pass the positions into WebGL
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);

    return buffer;
}


// webgl program
function main() {
    const canvas = document.querySelector("#glCanvas");
    const gl = canvas.getContext("webgl");

    if (canvas.width !== innerWidth || canvas.height !== innerHeight) {
            [canvas.width, canvas.height] = [innerWidth, innerHeight];
            gl.viewport(0, 0, canvas.width, canvas.height);
        }

    const vs = `
    attribute vec4 position;
    attribute vec2 texcoord;
    varying vec2 v_texcoord;
    void main() {
    gl_Position = position;
    v_texcoord = texcoord;
    }
    `;

    const fs = `
    precision mediump float;
    varying vec2 v_texcoord;
    uniform float uTime;
    uniform vec3 tl0;
    uniform vec3 tr0;
    uniform vec3 bl0;
    uniform vec3 br0;
    uniform vec3 tl1;
    uniform vec3 tr1;
    uniform vec3 bl1;
    uniform vec3 br1;

    void main() {
        float pct = abs(sin(uTime));

        vec3 l = mix(mix(bl0, tl0, v_texcoord.t), mix(bl1, tl1, v_texcoord.t), pct);
        vec3 r = mix(mix(br0, tr0, v_texcoord.t), mix(br1, tr1, v_texcoord.t), pct);
        vec3 c = mix(l, r, v_texcoord.s);
        gl_FragColor = vec4(c, 1);
    }
    `;

    // const program = twgl.createProgram(gl, [vs, fs]);

    const program = initShaderProgram(gl, vs, fs);

    const positionLoc = gl.getAttribLocation(program, 'position');
    const texcoordLoc = gl.getAttribLocation(program, 'texcoord');
    const timeLoc = gl.getUniformLocation(program, 'uTime');
    const tl0Loc = gl.getUniformLocation(program, 'tl0');
    const tr0Loc = gl.getUniformLocation(program, 'tr0');
    const bl0Loc = gl.getUniformLocation(program, 'bl0');
    const br0Loc = gl.getUniformLocation(program, 'br0');
    const tl1Loc = gl.getUniformLocation(program, 'tl1');
    const tr1Loc = gl.getUniformLocation(program, 'tr1');
    const bl1Loc = gl.getUniformLocation(program, 'bl1');
    const br1Loc = gl.getUniformLocation(program, 'br1');

    function createBufferAndSetupAttribute(loc, data) {
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(
        loc,
        2,  // 2 elements per iteration
        gl.FLOAT,  // type of data in buffer
        false,  // normalize
        0,  // stride
        0,  // offset
    );
    }

    createBufferAndSetupAttribute(positionLoc, [
    -1, -1,
    1, -1,
    -1,  1,
    -1,  1,
    1, -1,
    1,  1,
    ]);
    createBufferAndSetupAttribute(texcoordLoc, [
    0,  0,
    1,  0,
    0,  1,
    0,  1,
    1,  0,
    1,  1,
    ]);

    function newColors() {
        tl0 = tl1;
        tr0 = tr1;
        bl0 = bl1;
        br0 = br1;
        tl1 = colors[getRandomNumber(0, numColors-1)];
        tr1 = colors[getRandomNumber(0, numColors-1)];
        bl1 = colors[getRandomNumber(0, numColors-1)];
        br1 = colors[getRandomNumber(0, numColors-1)];
    }

    function draw() {
        let newTime = (new Date()).getTime() / 1000 - time0;
        gl.clearColor(0.0, 0.0, 0.0, 1.0);    // clear to black

        // clear canvas before drawing
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.useProgram(program);
        gl.uniform1f(timeLoc, newTime/5);
        gl.uniform3fv(tl0Loc, tl0);
        gl.uniform3fv(tr0Loc, tr0);
        gl.uniform3fv(bl0Loc, bl0);
        gl.uniform3fv(br0Loc, br0);
        gl.uniform3fv(tl1Loc, tl1);
        gl.uniform3fv(tr1Loc, tr1);
        gl.uniform3fv(bl1Loc, bl1);
        gl.uniform3fv(br1Loc, br1);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    var last = 0;

    function render(now) {

        draw();

        // if(!last || now - last >= 2*1000) {
        //     last = now;
        //     newColors();
        // }

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);

} 

onMount(() => main());


</script>


<canvas id="glCanvas"></canvas>