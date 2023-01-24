
function draw(side, magRot)
{
	const magNumber = 14;
	const magRadius = 300;
	const magDim = { w: 95, h: 35 };

	const poleNumber = 12;
	const poleRadius = 240;
	const poleDim = { w: 100, h: 50 };

	const hallNumber = 3;
	const hallRadius = 255;
	const hallDim = { w: 25, h: 25 };

	var canvas = document.getElementById("magicCanvas");
	var context = canvas.getContext("2d");

	context.reset();

	context.transform(1, 0, 0, -1, side / 2, side / 2);

	let ref = context.getTransform();

	context.rotate(Math.PI / poleNumber);

	context.fillStyle = "#336600";
	for (let i = 0; i < poleNumber; ++i)
	{
		context.fillRect(poleRadius - poleDim.h / 2, -poleDim.w / 2, poleDim.h, poleDim.w);
		context.rotate(2.0 * Math.PI / poleNumber);
	}

	context.setTransform(ref);

	context.fillStyle = "#cc00cc";
	for (let i = 0; i < hallNumber; ++i)
	{
		context.fillRect(hallRadius - hallDim.h / 2, -hallDim.w / 2, hallDim.h, hallDim.w);
		context.rotate(2.0 * Math.PI / hallNumber);
	}

	context.setTransform(ref);
	context.rotate(Math.PI / 180.0 * magRot);

	for (let i = 0; i < magNumber; ++i)
	{
		context.fillStyle = i % 2 == 0 ? "#ff0000" : "#0000ff";
		context.fillRect(magRadius - magDim.h / 2, -magDim.w / 2, magDim.h, magDim.w);
		context.rotate(2.0 * Math.PI / magNumber);
	}
}
