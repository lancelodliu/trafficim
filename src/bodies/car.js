import Matter from "matter-js";
import car from "../constants/car";
import $ from "jquery";

const getCar = (x, y, options) => {
  return Matter.Bodies.rectangle(x, y, car.WIDTH, car.HEIGHT, options);
};

export const generateAllCars = (count, xrange, yrange) => {
  return $.map(new Array(count), () => {
    return getCar(
      Math.random() * (xrange.max - xrange.min) + xrange.min,
      Math.random() * (yrange.max - yrange.min) + yrange.min
    );
  });
};
