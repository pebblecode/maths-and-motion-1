// // =================================================
// // Add Triangles to Array
// // =================================================

var triArray = [];

var colours = ['#363938', '#386567', '#5C4134', '#C4A778', '#CE9B59'];
// var colours = ['navy', 'blue', 'skyblue', 'darkblue', 'lightblue'];

function createTriangle(_triangleArray, _triangleCenter, _radius){
	var c = _triangleCenter;
	var Radius = _radius;

	var points = [
		new Point(c.x + Radius, c.y+Radius),
		new Point(c.x - Radius, c.y+Radius),
		new Point(c.x, c.y-Radius)
		];

	var path = new Path(points);

	var triangleColor = colours[Math.floor(Math.random()*colours.length)];
	// var triangleColor = Color.random();
	path.fillColor = triangleColor;
	_triangleArray.push(path);
}

var triDistance = 50;

for(var i = 0; i < view.size.width; i+= triDistance) {
	for(var j = 0; j < view.size.height; j+= triDistance) {

	 	var Radius = triDistance/2;
		var triangleCenter = new Point(i,j);
		createTriangle(triArray, triangleCenter, Radius);

		var nextTriangleCenter = new Point(i+Radius,j);
		createTriangle(triArray, nextTriangleCenter, -Radius);
	}
}

// =================================================
// Address Triangles Individually
// =================================================

var triArray = [];

var colours = ['#363938', '#386567', '#5C4134', '#C4A778', '#CE9B59'];
// var colours = ['navy', 'blue', 'skyblue', 'darkblue', 'lightblue'];

function createTriangle(_triangleArray, _triangleCenter, _radius){
	var c = _triangleCenter;
	var Radius = _radius;

	var points = [
		new Point(c.x + Radius, c.y+Radius),
		new Point(c.x - Radius, c.y+Radius),
		new Point(c.x, c.y-Radius)
		];

	var path = new Path(points);

	var triangleColor = colours[Math.floor(Math.random()*colours.length)];
	// var triangleColor = Color.random();
	path.fillColor = triangleColor;
	_triangleArray.push(path);
}

var triDistance = 50;

for(var i = 0; i < view.size.width; i+= triDistance) {
	for(var j = 0; j < view.size.height; j+= triDistance) {

	 	var Radius = triDistance/2;
		var triangleCenter = new Point(i,j);
		createTriangle(triArray, triangleCenter, Radius);

		var nextTriangleCenter = new Point(i+Radius,j);
		createTriangle(triArray, nextTriangleCenter, -Radius);
	}
}


var count = 0;

function onFrame(event) {

		count++;

		if (count >= 20){
				count = 0;
				for(var i = 0; i < triArray.length; i++) {
					var triangleColor = Color.random();
					triArray[i].fillColor = triangleColor;
		    }
		}

}


// =================================================
// Resize Triangles
// =================================================


// var colours = ['#363938', '#386567', '#5C4134', '#C4A778', '#CE9B59'];

// var triArray = [];
// var triArrayAlt = [];


// function createTriangle(_trianglearray, _triangleCenter, _radius){
// 	var c = _triangleCenter;
// 	var Radius = _radius;

// 	var points = [
// 		new Point(c.x + Radius, c.y+Radius),
// 		new Point(c.x - Radius, c.y+Radius),
// 		new Point(c.x, c.y-Radius),
// 		new Point(c.x + Radius, c.y+Radius)
// 		];

// 		_trianglearray.push(new Path(points));
// }

// var triDistance = 50;

// for(var i = 0; i < view.size.width; i+= triDistance) {
// 	for(var j = 0; j < view.size.height; j+= triDistance) {
// 		var triangleCenter = new Point(i,j);
// 		createTriangle(triArray, triangleCenter, 25);
// 		var triangleCenter = new Point(i+triDistance/2,j);
// 		createTriangle(triArrayAlt, triangleCenter, -25);
// 	}
// }

// console.log(triArray);

// for(var i = 0; i < triArray.length; i++) {
// 		var triangleColor = Color.random();
// 		triArray[i].fillColor = triangleColor;
// }
// for(var i = 0; i < triArrayAlt.length; i++) {
// 	var triangleColor = Color.random();
// 	triArrayAlt[i].fillColor = triangleColor;
// }

// function onFrame(event) {

// 	for(var i = 0; i < triArrayAlt.length; i++) {
// 		// var triangleColor = Color.random();
// 		// triArray[i].fillColor = triangleColor;
// 		// triArrayAlt[i].rotate(-1);
// 		var sinus = Math.sin(event.time * 2 + (i*400));
// 		// triArrayAlt[i].fillColor.hue +=5;
// 		triArrayAlt[i].scaling = sinus;

// 	}

// 	for(var i = 0; i < triArray.length; i++) {
// 		// var triangleColor = Color.random();
// 		// triArray[i].fillColor = triangleColor;
// 		// triArray[i].rotate(1);
// 		var sinus = Math.sin(event.time * 2 + (i*400));
// 		// triArray[i].fillColor.hue +=5;
// 		triArray[i].scaling = sinus;
// 	}
// }


// =================================================
// ANIMATE COLOUR
// =================================================


// var colours = ['#363938', '#386567', '#5C4134', '#C4A778', '#CE9B59'];

// var triArray = [];
// var triArrayAlt = [];


// function createTriangle(_trianglearray, _triangleCenter, _radius){
// 	var c = _triangleCenter;
// 	var Radius = _radius;

// 	var points = [
// 		new Point(c.x + Radius, c.y+Radius),
// 		new Point(c.x - Radius, c.y+Radius),
// 		new Point(c.x, c.y-Radius),
// 		new Point(c.x + Radius, c.y+Radius)
// 		];

// 		_trianglearray.push(new Path(points));
// }

// var triDistance = 50;

// for(var i = 0; i < view.size.width; i+= triDistance) {
// 	for(var j = 0; j < view.size.height; j+= triDistance) {
// 		var triangleCenter = new Point(i,j);
// 		createTriangle(triArray, triangleCenter, 25);
// 		var triangleCenter = new Point(i+triDistance/2,j);
// 		createTriangle(triArrayAlt, triangleCenter, -25);
// 	}
// }

// console.log(triArray);

// for(var i = 0; i < triArray.length; i++) {
// 		var triangleColor = Color.random();
// 		triArray[i].fillColor = triangleColor;
// }
// for(var i = 0; i < triArrayAlt.length; i++) {
// 	var triangleColor = Color.random();
// 	triArrayAlt[i].fillColor = triangleColor;
// }

// function onFrame(event) {

// 	for(var i = 0; i < triArrayAlt.length; i++) {
// 		// var triangleColor = Color.random();
// 		// triArray[i].fillColor = triangleColor;
// 		// triArrayAlt[i].rotate(-1);
// 		// var sinus = Math.sin(event.time * 2 + i);
// 		// triArrayAlt[i].fillColor.hue +=5;
// 		// triArrayAlt[i].scaling = sinus;
// 	}

// 	for(var i = 0; i < triArray.length; i++) {
// 		// var triangleColor = Color.random();
// 		// triArray[i].fillColor = triangleColor;
// 		// triArray[i].rotate(1);
// 		// var sinus = Math.sin(event.time * 2 + i);
// 		// // triArray[i].fillColor.hue +=5;
// 		// triArray[i].scaling = sinus;
// 	}
// }

// function onMouseMove(event) {


// 	for(var i = 0; i < triArray.length; i++) {

// 		p1 = triArray[i].position;
// 		p2 = event.point;

// 		d1 = p2 - p1;

//             var angle = ((Math.atan2(d1.x, d1.y) * 180) / Math.PI);

//              // head.position = mousePos;
//              triArray[i].rotation = angle;

// 	}

// 		for(var i = 0; i < triArrayAlt.length; i++) {

// 		p1 = triArrayAlt[i].position;
// 		p2 = event.point;

// 		d1 = p2 - p1;

//             var angle = ((Math.atan2(d1.x, d1.y) * 180) / Math.PI);

//              // head.position = mousePos;
//              triArrayAlt[i].rotation = angle;

// 	}

// }


// =================================================
// ANIMATE COLOUR
// =================================================


// var colours = ['#363938', '#386567', '#5C4134', '#C4A778', '#CE9B59'];

// var triArray = [];
// var triArrayAlt = [];


// function createTriangle(_trianglearray, _triangleCenter, _radius){
// 	var c = _triangleCenter;
// 	var Radius = _radius;

// 	var points = [
// 		new Point(c.x + Radius, c.y+Radius),
// 		new Point(c.x - Radius, c.y+Radius),
// 		new Point(c.x, c.y-Radius),
// 		new Point(c.x + Radius, c.y+Radius)
// 		];

// 		_trianglearray.push(new Path(points));
// }

// var triDistance = 50;

// for(var i = 0; i < view.size.width; i+= triDistance) {
// 	for(var j = 0; j < view.size.height; j+= triDistance) {
// 		var triangleCenter = new Point(i,j);
// 		createTriangle(triArray, triangleCenter, 25);
// 		var triangleCenter = new Point(i+triDistance/2,j);
// 		createTriangle(triArrayAlt, triangleCenter, -25);
// 	}
// }

// console.log(triArray);

// for(var i = 0; i < triArray.length; i++) {
// 		var triangleColor = Color.random();
// 		triArray[i].fillColor = triangleColor;
// }
// for(var i = 0; i < triArrayAlt.length; i++) {
// 	var triangleColor = Color.random();
// 	triArrayAlt[i].fillColor = triangleColor;
// }

// function onFrame(event) {

// 	for(var i = 0; i < triArrayAlt.length; i++) {
// 		// var triangleColor = Color.random();
// 		// triArray[i].fillColor = triangleColor;
// 		// triArrayAlt[i].rotate(-1);
// 		var sinus = Math.sin(event.time * 2 +1);
// 		// triArrayAlt[i].fillColor.hue +=5;
// 		triArrayAlt[i].scaling = sinus;

// 	}

// 	for(var i = 0; i < triArray.length; i++) {
// 		// var triangleColor = Color.random();
// 		// triArray[i].fillColor = triangleColor;
// 		// triArray[i].rotate(1);
// 		var sinus = Math.sin(event.time * -2 +1);
// 		// triArray[i].fillColor.hue +=5;
// 		triArray[i].scaling = sinus;
// 	}
// }



