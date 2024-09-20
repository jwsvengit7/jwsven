"use client"

import { StaticImageData } from "next/image";
import { D, SCREEN, SCREEN1 } from "./app_utils";
import { SetStateAction } from "react";

export function generateBoxes(setBoxes: { (value: SetStateAction<Box[]>): void; (arg0: Box[]): void; },colors:string[]) {
    if (typeof window !== "undefined") { 
      const boxesArray: Box[] = [];
      for (let i = 0; i < 30; i++) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        const delay = Math.random() * 5;

        boxesArray.push({
          color: randomColor,
          x: randomX,
          y: randomY,
          delay: delay,
        });
      }
      setBoxes(boxesArray);
    }else{
      throw new Error("Please Refresh the page")
    }
  }

  export interface Box {
    color: string;
    x: number;
    y: number;
    delay: number;
  }
  
  export interface Params {
    projectId: string | number; 
  }
  
  export interface Project {
    id: number;
    name: string;
    description: string;
    imageUrl: StaticImageData;
    date?: string;
    status?: string;
    link?: string;
    language: string;
  }
  

  export const dummyProjects: Project[] = [
    {
        id: 1,
        name: 'Cardmonix Tablet',
        description: `Cardmonix Giftcard & Crypto Trade allows you to safely and securely exchange your gift cards & Crypto at high rates.
        Our rates are always updated everyday to make sure every Cardmonix holder gets the best value on their transactions.`,
        imageUrl: D,
        language:"#Dart - Flutter " ,
        link:"https://play.google.com/store/apps/details?id=com.cardmonixadmin.cardmonix",

      },
    
    {
      id: 2,
      name: 'Cardmonix Admin',
      description: `
      Cardmonix BackendCardmonix Backend
      Jun 2023 - Jul 2023Jun 2023 - Jul 2023
      Cardmonix is an innovative online trading platform that aims to revolutionize the way people engage in trading activities. With a user-friendly interface, advanced features, and a wide range of financial instruments. This writeup provides an overview of the key features and benefits of Cardmonix.`,
      imageUrl: SCREEN ,
      language:"#HTML-CSS jQuery - Ajax PHP SQL" ,
      link:"https://cardmonixadmin.pro/topadmin/login.php",


    },
    {
        id: 3,
        name: 'Cora Wealth',
        description: `At Corawealth, we believe that everyone deserves access to the tools and knowledge necessary to build a secure financial future. Whether you're a seasoned investor or just starting out, our platform is designed to empower you on your investment journey`,
        imageUrl: SCREEN1,
        language:"#HTML-CSS jQuery - Ajax PHP SQL",
        link:"https://cora-wealth.com/",

        

      },

  ];
  