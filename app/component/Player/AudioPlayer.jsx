"use client";
import Image from "next/image";
import React from "react";
import playerImg from "../../../public/player/playerImg.png";
import soundIcon from "../../../public/player/sound.svg";
import {
  MdMoreHoriz,
  MdFavoriteBorder,
  MdVolumeUp,
  MdVolumeOff,
  MdPlayArrow,
  MdPause,
  MdRepeat,
} from "react-icons/md";
import { FaBackwardStep, FaForwardStep } from "react-icons/fa6";
import { IoShuffleSharp } from "react-icons/io5";
import { FaChevronUp, FaGift } from "react-icons/fa";
import { PiPlaylistBold } from "react-icons/pi";

const AudioPlayer = () => {
  return (
    <div className="h-20 bg-[#101828] w-screen py-3 px-6 border-t-[1px] border-solid border-[#344054]">
      <div className="flex justify-between items-center">
        {/* =====Step-1===== */}
        <div className="flex w-[334px]">
          <div className="relative block h-[52px] w-[52px]">
            <Image
              src={playerImg}
              alt="playerImg"
              //   width={52}
              //   height={52}
              //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              sizes="52px"
              fill
              style={{ objectFit: "fill" }}
              priority
            />
            <div className="h-6 w-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image
                src={soundIcon}
                alt="soundIcon"
                // width={24}
                // height={24}
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                sizes="52px"
                fill
                style={{ objectFit: "fill" }}
                priority
              />
            </div>
          </div>
          <div className="ml-3 flex flex-col justify-center w-[190px]">
            <p className="text-sm font-semibold text-[#EAECF0] mb-1">
              Song Name Will Be Here
            </p>
            <p className="text-xs font-medium text-[#98A2B3] mt-1">
              Artist Name
            </p>
          </div>
          <div className="flex flex-row justify-center items-center w-[68px]">
            <div>
              <MdFavoriteBorder
                size={24}
                className="text-[#EAECF0] mr-[10px] cursor-pointer"
              />
            </div>
            <div>
              <MdMoreHoriz
                size={20}
                className="text-[#EAECF0] ml-[10px] cursor-pointer"
              />
            </div>
          </div>
        </div>
        {/* =====Step-2===== */}
        <div className="w-[484px]">
          <div className="flex justify-center items-center mb-1">
            <div>
              <IoShuffleSharp
                size={20}
                className="text-[#EAECF0] cursor-pointer"
              />
            </div>
            <div>
              <FaBackwardStep
                size={24}
                className="text-[#EAECF0] ml-5 cursor-pointer"
              />
            </div>
            <div className="h-8 w-8 rounded-full bg-[#EAECF0] mx-4 flex justify-center items-center">
              <MdPause size={24} className="text-[#667085] cursor-pointer" />
            </div>
            <div>
              <FaForwardStep
                size={24}
                className="text-[#EAECF0] mr-5 cursor-pointer"
              />
            </div>
            <div>
              <MdRepeat size={20} className="text-[#EAECF0] cursor-pointer" />
            </div>
          </div>
          <div className="w-full flex justify-center items-center mt-1">
            <span className="text-[#98A2B3] font-medium text-[12px]">1:56</span>
            <div className="w-[408px] h-1 rounded-md bg-[#98A2B3] z-50 mx-3 cursor-pointer"></div>
            <span className="text-[#98A2B3] font-medium text-[12px]">4:56</span>
          </div>
        </div>
        {/* =====Step-3===== */}
        <div className="flex w-[168px]">
          <div className="w-6 mr-3">
            <FaGift
              size={20}
              className="text-[#EAECF0] mr-[10px] cursor-pointer"
            />
          </div>
          <div className="w-6 mx-3">
            <MdVolumeUp
              size={24}
              className="text-[#EAECF0] mr-[10px] cursor-pointer"
            />
          </div>
          <div className="w-6 mx-3">
            <PiPlaylistBold
              size={20}
              className="text-[#EAECF0] mr-[10px] cursor-pointer"
            />
          </div>
          <div className="w-6 ml-3">
            <FaChevronUp
              size={20}
              className="text-[#EAECF0] mr-[10px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
