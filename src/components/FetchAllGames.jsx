import { useState, useEffect } from 'react';
import GameCard from './GameCard';

function FetchAllGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = import.meta.env.VITE_API_URL;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
                    'x-rapidapi-host': import.meta.env.VITE_RAPIDAPI_HOST
                }
            };
            try {
                const response = await fetch(url, options);
                const data = await response.json();
                setGames(data);
            } catch (error) {
                console.error(error);
            }

        };
        fetchData();
    })

    return (
        <div className="p-8 bg-[#19182b] ">
            <h1 className="text-4xl font-bold text-white ">All <span className="text-yellow-500">Games</span> </h1>
            <div className="m-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </div>
    );
}

export default FetchAllGames;