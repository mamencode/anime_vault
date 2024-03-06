'use server'

export const fetchAnime= async(page:number)=>{
   const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=10`) 
   const data = await response.json()
   return data
}