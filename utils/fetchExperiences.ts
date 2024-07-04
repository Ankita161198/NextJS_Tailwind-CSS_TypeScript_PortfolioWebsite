// // import { Experience } from "@/typings";

// // export const fetchExperiences= async()=>{
// //     const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
     
// //     const data = await res.json()
// //     const experiences : Experience[] = data.experiences;
// //     console.log("fetching", experiences);
// //     return experiences;
// // }

// import { Experience } from "@/typings";

// export const fetchExperiences = async () => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
//     if (!res.ok) {
//       throw new Error('Failed to fetch experiences');
//     }
//     const data = await res.json();
//     let experiences: Experience[] = data.experiences;

//     // Sort experiences by dateStarted in descending order
//     experiences.sort((a, b) => {
//       const dateA = new Date(a.dateStarted).getTime();
//       const dateB = new Date(b.dateStarted).getTime();
//       return dateB - dateA;
//     });

//     console.log("Fetched experiences:", experiences);
//     return experiences;
//   } catch (error) {
//     console.error('Error fetching experiences:', error);
//     throw error;
//   }
// };

import { sanityClient } from "@/sanity";
import { Experience } from "../typings";
import { groq } from "next-sanity";

const query = groq`
    *[_type == 'experience'] {
      ...,
      technologies[]->
    }
`;

export const fetchExperiences = async() => {
    const res = await sanityClient.fetch(query)

    const experiences: Experience[] = await sanityClient.fetch(query);

    return experiences 

    // console.log('fetching', experiences);
}
