
// export async function searchImages(name: string): Promise<string[]> {
//     const apiKey = 'YOUR_API_KEY';
//     const searchEngineId = 'YOUR_SEARCH_ENGINE_ID';
//     const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${encodeURIComponent(name)}&searchType=image`;
//
//     const response = await fetch(url);
//     if (response.ok) {
//         const data = await response.json();
//         if (data.items) {
//             return data.items.map((item: any) => item.link);
//         } else {
//             throw new Error(`No images found for ${name}`);
//         }
//     } else {
//         throw new Error(`Request failed with status code ${response.status}`);
//     }
// }

export function getIdFromUrl(url: string): string {
    const regex = /\/(\d+)\/$/;
    const match = url.match(regex);
    if (match) {
        return match[1];
    } else {
        throw new Error(`Invalid url format: ${url}`);
    }
}