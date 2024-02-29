import {z, defineCollection} from "astro:content"

const membersCollection = defineCollection({
    schema: ({image}) =>
        z.object({
            name: z.string(),
            image: image(),
        }),
})


export const collections = {
    members: membersCollection,
}
