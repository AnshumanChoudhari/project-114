    function setup(){
        canvas = createCanvas(640, 480);
        canvas.position(520,240);
        video = createCapture(VIDEO);
        video.hide();
        
    }
        function preload(){

    }

    function draw(){
image(video,0,0,640,480);
    }

    function take_snapshot(){
    save('Anshuman.png');
}