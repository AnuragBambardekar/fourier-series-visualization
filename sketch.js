let time=0;
let wave = [];

let slider;

function setup(){
    createCanvas(600, 400);
    slider = createSlider(1, 100, 1);
}

function draw(){
    background(0);
    translate(150, 200);

    let x = 0;
    let y = 0;

    for(let i=0; i<slider.value(); i++){
        let prevX = x;
        let prevY = y;
        let n = i*2+1; //square
        let radius=75*(4/(n*PI)); //square

        /* let n = i + 1; //sawtooth
        let radius=75*(2/(n*PI))*pow(-1, n); //sawtooth */

        /* let n = i*2 + 1; //triangle
        let radius=75*( 8 / (PI * PI) * pow(-1, (n - 1) / 2) / (n * n)); //triangle */

        x += radius * cos(n * time);
        y += radius * sin(n * time);
        //wave.unshift(y);

        stroke(255,100);
        noFill();
        ellipse(prevX, prevY, radius*2);
        
        stroke(255);
        fill(255);
        line(prevX, prevY, x, y)
        //ellipse(x,y,8);
    }
    
    wave.unshift(y);
    translate(200,0);
    line(x-200, y, 0, wave[0]);
    beginShape();
    noFill();
    for (let i=0; i<wave.length; i++){
        vertex(i,wave[i])
    }
    endShape();

    time += 0.04;

    if(wave.length > 500){
        wave.pop()
    }
}