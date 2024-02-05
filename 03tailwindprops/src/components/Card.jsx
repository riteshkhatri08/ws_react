import React from "react";
// Pass in props to component to reuse component with different values
export function Card(props) {
  // console.log(`${props}`);
  // props.values.image = `/src/assets/${props.values.image}`;
  console.log(props.values.image);
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src={props.values.image}
        alt=""
        width="200"
        height="200"
      />
      <div className="pt-6 md:p-3 text-center md:text-left space-y-4" />
      <figcaption className="font-semibold">
        <div className="text-sky-500 dark:text-sky-400 p-2 m-4">
          {props.values.name}
        </div>
        <div className="text-slate-700 dark:text-slate-500 p-2">
          {props.values.designation}
        </div>
      </figcaption>
      <blockquote className="flex">
        <p className="text-lg font-medium p-4 self-center">
          {props.values.description}
        </p>
      </blockquote>
    </figure>
  );
}
