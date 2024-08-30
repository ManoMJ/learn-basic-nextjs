import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`Fetching vidoes : ${Date.now()}`)
    throw new Error("something broke....");
    // const response = await fetch(`${API_URL}/${id}/videos`)
    // return response.json();
}

export default async function MovieVideos(
    {id} : {id:string}
){
    const vidoes = await getVideos(id);
    return <h6>{JSON.stringify(vidoes)}</h6>
}