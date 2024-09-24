"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ExitButton from "@/components/exit-button";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";
import InfoIcon from "@/components/InfoIcon";

const leaderboardData = [
    { username: "juliette", points: "10000🌵", bgColor: "bg-pink-500", image: "/juliette.jpg" },
    { username: "panda", points: "9000🌵", bgColor: "bg-red-100", image: "/panda.jpg" },
    { username: "tiger", points: "8000🌵", bgColor: "bg-blue-100", image: "/tiger.jpg" },
    { username: "monkey", points: "7000🌵", bgColor: "bg-green-100", image: "/monkey.jpg" },
    { username: "duck", points: "6000🌵", bgColor: "bg-yellow-100", image: "/duck.jpg" },
    { username: "praying mantis", points: "5000🌵", bgColor: "bg-purple-100", image: "/mantis.jpg" },
    
];

export default function LeaderboardPage() {
    const [selected, setSelected] = useState<string | null>(null);

    const handleIconClick = (title: string) => {
        setSelected(title);
    };

    // Ensure the state is consistent between server and client
    useEffect(() => {
        if (selected === null) {
            setSelected("District");
        }
    }, [selected]);

    return (
        <div className="flex flex-col w-full py-2 pb-0 gap-4 bg-panda_bg min-h-screen">
            <ExitButton href="/order/confirmation" back className="top-8" />
            <div className="flex flex-col gap-2 items-center px-4 py-2 justify-center">
                <p className="font-bold text-2xl">Leaderboard 👑</p>
                <div className="flex gap-1 items-center">
                </div>
            </div>
            <div className="flex gap-8 items-center justify-center">
                <InfoIcon
                    title="District"
                    selected={selected === "District"}
                    onClick={() => handleIconClick("District")}
                />
                <InfoIcon
                    title="City"
                    selected={selected === "City"}
                    onClick={() => handleIconClick("City")}
                />
                <InfoIcon
                    title="Country"
                    selected={selected === "Country"}
                    onClick={() => handleIconClick("Country")}
                />
            </div>
            <div className="flex flex-col gap-4 px-8 py-4 overflow-y-auto flex-grow">
                {leaderboardData.map((user, index) => (
                    <div key={index} className={`flex items-center gap-4 p-4 ${user.bgColor} rounded-lg shadow-md`}>
                        <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                            <Image
                                src={user.image}
                                alt={user.username}
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">{user.username}</p>
                            <p className="text-sm text-gray-500">Points: {user.points}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="sticky bottom-0 w-full bg-pink-500 p-4">
                <div className="flex items-center gap-4 p-4 bg-pink-600 rounded-full shadow-md">
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                        <Image
                            src="/juliette.jpg"
                            alt="Juliette"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-white">Juliette</p>
                        <p className="text-sm text-gray-200">Points: 9000🌵</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
