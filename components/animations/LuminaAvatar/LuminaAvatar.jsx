"use client";
import ScrollTriggeredAnimation from "@/components/ScrollTriggeredAnimation/ScrollTriggeredAnimation";
import gsap from "@/dependencies/gsap";
import css from "./LuminaAvatar.module.scss";
import BorderSvg from "./border.svg";
import Image from 'next/image';

function animate(root) {
  let tl = gsap.timeline();
  tl.set(root.querySelectorAll(".initialInvis"), {visibility: "visible"});

  let borders = root.querySelectorAll("svg circle");
  for (let border of borders){
    let start = "";
    let end = "";

    if (Math.random() > 0.5){
      start = "0% 0%";
      end = "0% 100%";
    } else {
      start = "0% 0%";
      end = "0% -100%";
    }

    tl.fromTo(border, {
      drawSVG: start,
      rotate: `${Math.random() * 360}deg`,
      transformOrigin: "center center",
    }, {
      drawSVG: end,
      ease: "sine.inOut",
      duration: 1,
    }, 0);
  }

  tl.fromTo(root.querySelector("img"), {
    opacity: 0,
  }, {
    opacity: 1,
    ease: "sine.inOut",
    duration: 0.2,
  }, "<70%");


  tl.fromTo(borders, {
    stroke: "#ffc700",
  }, {
    stroke: "#000000",
    ease: "sine.inOut",
    duration: 1,
  }, ">0.25");



  return tl;
}


export default function LuminaAvatar({className}){
  return <ScrollTriggeredAnimation animation={animate} className={className} threshold={0.5}>
    <div className={`initialInvis ${css.avatar}`}>
      <BorderSvg/>
      <Image src="/images/lumina/lumina.png"/>
    </div>
  </ScrollTriggeredAnimation>;
}
