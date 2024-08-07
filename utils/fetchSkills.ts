// import { Skill } from "@/typings";

// export const fetchSkills= async()=>{
//     const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
     
//     const data = await res.json()
//     const skills : Skill[] = data.skills;
//     console.log("fetching", skills);
//     return skills;
// }

import { groq } from "next-sanity";
import { Skill } from "@/typings";
import { sanityClient } from "@/sanity";

const query = groq`
    *[_type == "skills"]
    
    `

export const fetchSkills = async() => {
    const res = await sanityClient.fetch(query)

    const skills: Skill[] = await sanityClient.fetch(query);

    return skills

    // console.log('fetching', skills);

}