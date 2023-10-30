function setup()
{
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.position(200, 150);

    canvas = createCanvas(350, 400);
    canvas.position(700, 150);
}
function modelLoaded()
{
    console.log('PoseNet is Initialised!');
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
    }
}