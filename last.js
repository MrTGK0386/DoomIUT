import * as THREE from 'three';

const WIDTH = document.getElementById(#game).clientWidth
const HEIGHT = document.getElementById(#game).clientHeight

console.log(WIDTH,HEIGHT)
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
    75,
    #game.innerWidth/#game.innerHeight,
    0.1,
    1000
)

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#e5e5e5");
renderer.setSize()
