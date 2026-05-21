export const MAX = 20;

export async function getCharacters() {
    // generate MAX unique random numbers
    // put them in api request url
    // map the responses to character objects

    const API_BASE = "https://rickandmortyapi.com/api/character/";

    const ids = new Set();

    while (ids.size < MAX) {
        const random = Math.floor(Math.random() * 100) + 1;
        ids.add(random);
    }

    const url = API_BASE + Array.from(ids).join();

    const response = await fetch(url);
    const data = await response.json();

    return data.map((item) => ({
        id: item.id,
        name: item.name,
        image: item.image,
    }));
}
