img = "";

function preload()
{
	img = loadImage("fruit_basket.jpg")
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
	image(img, 0, 0, 640, 420);
	fill("#FFFFF");
	text("Fruits", 45, 75);
	noFill();
	stroke("#FFFFF");
	rect(30, 60, 450, 350);
	
	fill("#FFFFF");
	text("Basket", 320, 120);
	noFill();
	stroke("#FFFFF");
	rect(300, 90, 270, 320);
}

function setup()
{
	canvas = createCanvas(640, 420);
	canvas.center();
	objectDetector=ml5.objectDetector('cocossd', modelLoaded);
}