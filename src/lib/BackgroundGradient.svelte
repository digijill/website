<script>
import { onMount } from 'svelte';

var time0 = new Date().getTime();
var speed = 5;

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

// var tl0 = [255/255, 219/255, 210/255];
// var tr0 = [231/255, 194/255, 227/255];
// var bl0 = [179/255, 227/255, 232/255];
// var br0 = [179/255, 227/255, 191/255];

// var tl1 = [239/255, 42/255, 193/255]; // rose
// var tr1 = [30/255, 178/255, 255/255]; // ocean
// var bl1 = [67/255, 85/255, 200/255]; // sapphire
// var br1 = [255/255, 199/255, 0]; // sun

// vertex shader to establish 2x2 texture so that each pixel is interpolated across four colors
// instead of over two triangles
const vs = `
    attribute vec4 position;
    attribute vec2 texcoord;
    varying vec2 v_texcoord;
    
    void main() {
        gl_Position = position;
        v_texcoord = texcoord;
    }
`;

// hard coding in the colors to be more efficient
const fs = `
    precision mediump float;
    varying vec2 v_texcoord;
    uniform float uTime;

    vec3 tl0 = vec3(0.149,0.141,0.912);
    vec3 tr0 = vec3(0.149,0.141,0.912);
    vec3 bl0 = vec3(0.149,0.141,0.912); 
    vec3 br0 = vec3(0.149,0.141,0.912);
    vec3 tl1 = vec3(1.000,0.833,0.224);
    vec3 tr1 = vec3(1.000,0.833,0.224);
    vec3 bl1 = vec3(1.000,0.833,0.224);
    vec3 br1 = vec3(1.000,0.833,0.224);

    void main() {
        float pct = abs(sin(uTime));

        vec3 l = mix(mix(bl0, tl0, v_texcoord.t), mix(bl1, tl1, v_texcoord.t), pct);
        vec3 r = mix(mix(br0, tr0, v_texcoord.t), mix(br1, tr1, v_texcoord.t), pct);
        vec3 c = mix(l, r, v_texcoord.s);
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

    const program = initShaderProgram(gl, vs, fs);

    const positionLoc = gl.getAttribLocation(program, 'position');
    const texcoordLoc = gl.getAttribLocation(program, 'texcoord');
    const timeLoc = gl.getUniformLocation(program, 'uTime');

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

    createBufferAndSetupAttribute(positionLoc, positions);
    createBufferAndSetupAttribute(texcoordLoc, texCoords);

    function draw() {
        let newTime = new Date().getTime() / 1000 - time0 /1000;
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.useProgram(program);
        gl.uniform1f(timeLoc, newTime/speed);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    function render(now) {

        draw();

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);

} 

onMount(() => main());

</script>


<canvas id="glCanvas" class="fullscreen"></canvas>

<style>
    canvas {
        position: absolute;
    }
</style>