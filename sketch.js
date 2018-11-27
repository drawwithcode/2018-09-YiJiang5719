var myLoc;
var myMap;
var canvas;

var g1Lat = 45.4624;
var g1Lon = 9.1352122;

var g2Lat = 45.4538762;
var g2Lon = 9.1559486;

var g3Lat = 45.465705;
var g3Lon = 9.2066111;

var g4Lat = 45.4964419;
var g4Lon = 9.1735867;

var g5Lat = 45.4981564;
var g5Lon = 9.1423784;

var g6Lat = 45.4619164;
var g6Lon = 9.1833918;

var g7Lat = 45.4735935;
var g7Lon = 9.2041071;

var g8Lat = 45.448383;
var g8Lon = 9.1444565;

var g9Lat = 45.4901397;
var g9Lon = 9.1795437;

var g0Lat = 45.4652876;
var g0Lon = 9.1867957;

var mappa = new Mappa('MapboxGL',"pk.eyJ1IjoieXRpbmtlciIsImEiOiJjam9yMGZta2swNno2M29zMHk0a3hjM3hkIn0.xrZ3z0nmBibyRfJn_E3XWQ");

var options = {
  lat : g6Lat,
  lng : g6Lon,
  zoom: 12,
  style:'mapbox://styles/ytinker/cjor0jv3r18vd2spd53hs8thr',pitch:50,
}

function preload(){
  // put preload code here
  myLoc = getCurrentPosition();
}

function setup() {
  // put setup code here
  canvas = createCanvas(windowWidth, windowHeight);

  options.lat = myLoc.latitude;
  options.lng = myLoc.longitude;

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

  // fill('orange');
  // noStroke();

  var dis1 = calcGeoDistance(myLoc.latitude, myLoc.longitude, g1Lat, g2Lon, "km");
  console.log(dis1);
  var dis2 = calcGeoDistance(myLoc.latitude, myLoc.longitude, g2Lat, g2Lon, "km");
  console.log(dis2);
  var dis3 = calcGeoDistance(myLoc.latitude, myLoc.longitude, g3Lat, g3Lon, "km");
  console.log(dis3);
  var dis4 = calcGeoDistance(myLoc.latitude, myLoc.longitude, g4Lat, g4Lon, "km");
  console.log(dis4);
  var dis5 = calcGeoDistance(myLoc.latitude, myLoc.longitude, g5Lat, g5Lon, "km");
  console.log(dis5);


}

function draw() {
  // put drawing code here
  clear();

  noStroke();
  fill(0);
  rect(0,0,windowWidth,60);
  fill('#FFE027');
  textSize(22);
  text('THE TOP 10 RESTRUANT IN MILAN!', windowWidth/2-200, 40);

  textSize(15);

  var point1 = myMap.latLngToPixel(g1Lat, g1Lon);
  ellipse(point1.x, point1.y, 10);
  var point2 = myMap.latLngToPixel(g2Lat, g2Lon);
  ellipse(point2.x, point2.y, 10);
  var point3 = myMap.latLngToPixel(g3Lat, g3Lon);
  ellipse(point3.x, point3.y, 10);
  var point4 = myMap.latLngToPixel(g4Lat, g4Lon);
  ellipse(point4.x, point4.y, 10);
  var point5 = myMap.latLngToPixel(g5Lat, g5Lon);
  ellipse(point5.x, point5.y, 10);
  var point6 = myMap.latLngToPixel(g6Lat, g6Lon);
  ellipse(point6.x, point6.y, 10);
  var point7 = myMap.latLngToPixel(g7Lat, g7Lon);
  ellipse(point7.x, point7.y, 10);
  var point8 = myMap.latLngToPixel(g8Lat, g8Lon);
  ellipse(point8.x, point8.y, 10);
  var point9 = myMap.latLngToPixel(g9Lat, g9Lon);
  ellipse(point9.x, point9.y, 10);
  var point0 = myMap.latLngToPixel(g0Lat, g0Lon);
  ellipse(point0.x, point0.y, 10);

  fill(0,90,random(255));
  var point = myMap.latLngToPixel(myLoc.latitude,myLoc.longitude);
  ellipse(point.x,point.y,10);
  text('Current Position', point.x, point.y-10);


  fill('#16499D');
  text('Sapori Solari', point1.x, point1.y-10);
  text('Nòa - Modern Bistrot & Cocktail Bar', point2.x, point2.y-10);
  text('TheLab - Unconventional Burger Experience', point3.x, point3.y-10);
  text('Shaolin State of Harmony', point4.x, point4.y-10);
  text('Maison Touareg', point5.x, point5.y-10);
  text('Pomet by pasquale pometto', point6.x, point6.y-10);
  text('Neta', point7.x, point7.y-10);
  text('Sapori Stellari', point8.x, point8.y-10);
  text('BistròBiò', point9.x, point9.y-10);
  text('VUN Andrea Aprea', point0.x, point0.y-10);


}
