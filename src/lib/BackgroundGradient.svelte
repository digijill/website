<script>
import { onMount } from 'svelte';

var time0 = new Date().getTime();
var speed = 2;  // lower is faster

const verts = [
    -1, -1,
    1, -1,
    1, 1,
    -1, 1
];

const corners = [
    0, 1,
    2, 0,
    2, 3
];

// vertex shader to establish 2x2 texture so that each pixel is interpolated across four colors
// instead of over two triangles
const vs = `
    attribute vec2 verts;
    varying vec2 coord2D;
    
    void main() {
        coord2D = verts * 0.5 + 0.5; // convert to quad space 0,0 <=> 1, 1
        gl_Position = vec4(verts, 1, 1); 
    }
`;

// hard coding the colors to be more efficient
const fs = `
    precision mediump float;
    varying vec2 coord2D;
    uniform float uTime;

    vec3 tl0 = vec3(0.93725,0.16471,0.75686);   // rose
    vec3 tl1 = vec3(1.0,0.611765,0.0);          // saffron

    vec3 tr0 = vec3(0.11765,0.69804,1.0);       // ocean
    vec3 tr1 = vec3(0.76471,0.90196,0.54510);   // lime

 
    vec3 bl0 = vec3(0.26275,0.33333,0.78431);   // sapphire
    vec3 bl1 = vec3(0.81176,0.60392,0.67843);   // lavender

    // vec3 br0 = vec3(1.0,0.78039,0.0);           // sun
    vec3 br0 = vec3(1.0,0.611765,0.0);          // saffron
    vec3 br1 = vec3(1.0,0.67451,0.43137);       // turmeric


    void main() {
        float pct = abs(sin(uTime));

        vec4 pixel = vec4(vec3(mix(
                    mix(mix(bl0, br0, coord2D.x), mix(bl1, br1, coord2D.x), pct),
                    mix(mix(tl0, tr0, coord2D.x), mix(tl1, tr1, coord2D.x), pct),
                    coord2D.y
                )), 1);

        gl_FragColor = pixel;
    }
`;

// create and compile the shaders
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

// initialize shader program and attach the shaders
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

function main() {
    const canvas = document.querySelector("#glCanvas");
    const gl = canvas.getContext("webgl");
    var loc;

    if (canvas.width !== innerWidth || canvas.height !== innerHeight) {
        [canvas.width, canvas.height] = [innerWidth, innerHeight];
        gl.viewport(0, 0, canvas.width, canvas.height);
    }

    const program = initShaderProgram(gl, vs, fs);

    // create buffers
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint8Array(corners), gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.STATIC_DRAW);   

    // setup attribute
    gl.enableVertexAttribArray(loc = gl.getAttribLocation(program, "verts"));
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0); 
    
    // setup uniform
    const timeLoc = gl.getUniformLocation(program, 'uTime');

    // draw loop
    function draw() {
        let newTime = new Date().getTime() / 1000 - time0 /1000;
        gl.clearColor(0.0, 0.0, 0.0, 1.0);

        gl.useProgram(program);
        gl.uniform1f(timeLoc, newTime/speed);
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_BYTE, 0); 
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