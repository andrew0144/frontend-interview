import React from "react";
import constructClassName from "@/utilities/constructClassName";
import css from "./Card.module.scss";
import Image from 'next/image';


export default function Card({
  children,
  className,
  href,
  icon,
  image,
  title,
}) {
  const thisClassName = constructClassName(css, "card", `custom ${className}`);
  return <a className={thisClassName} href={href} target="_blank">
    <Image
      src={image}
    />
    <div className={css.inner}>
      <div className={css.overt}>
        <div className={css.icon}>
          {icon}
        </div>

        <div className={css.separator}></div>

        <div className={css.title}>{title}</div>

        <div className={css.description}>
          {children}
        </div>
      </div>
    </div>
  </a>;
}
