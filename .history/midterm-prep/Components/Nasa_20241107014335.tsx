"use client";
import { useState } from 'react';

export default function Page() {

    const [media, setMedia] = useState(null);
    const API_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=2";


    async function fetchMedia() {
        const response = await fetch(API_URL);
        const data = await response.json();
        setMedia(data);
    }

    const MediaOutput = () => {
        if (!media) {
            return (
                <div className="p-4 mb-4 border-4 border-black text-center">No Media Yet</div>
            );
        }

        let mediaList = [];
        media.forEach((mediaItem, index) => {
            mediaList.push(
                <li key={index} className="mb-2 text-center">
                    <h2 className="text-xl">{mediaItem.title}</h2> {/* Changed "name" to "title" */}
                    <img src={mediaItem.url} alt={mediaItem.explanation} />
                </li>
            );
        });

        return (
            <div className="p-4 mb-4 border-4 border-black text-center text-black">
                <ul>{mediaList}</ul>
            </div>
        );
    };

    return (
        <div className="p-4 bg-pink-300">
            <header className="p-4 mb-4 border-4 border-black text-center">
                <h1 className="text-4xl mb-4 text-center text-black">Welcome to my product page!</h1>
                <button
                    className="text-pink-300 bg-black p-4"
                    onClick={fetchMedia}
                >
                    🕊️‍ Fetch Media!
                </button>
            </header>
            <MediaOutput />
        </div>
    );
}