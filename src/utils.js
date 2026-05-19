export async function getCharacters() {
    const API_URL =
        "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
    const response = await fetch(API_URL);
    const data = await response.json();

    return data.map((item) => ({
        id: item.id,
        name: item.name,
        image: item.image,
    }));
}
