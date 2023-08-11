function back()
{
	window.location = "index.html";
}

img2 = "";

function preload()
{
	img2 = loadImage("bedroom.jpg");
}

function modelLoaded()
{
	console.log("Model Loaded");
	status= true;
	objectDetector.detect(img, gotResult);
	
}

function gotResult(error, results)
{
	if(error)
		{
			console.log(error);
		}
	console.log(results);
}

function draw()
{
	image(img2, 0, 0, 640, 420);
	fill("#030101");
	text("Lamp", 45, 75);
	noFill();
	stroke("#030101");
	rect(30, 60, 450, 350);
	
	fill("#030101");
	text("Bed", 320, 120);
	noFill();
	stroke("#030101");
	rect(300, 90, 270, 320);
}

function setup()
{
	canvas = createCanvas(640, 420);
	canvas.center();
	objectDetector=ml5.objectDetector('cocossd', modelLoaded);
}