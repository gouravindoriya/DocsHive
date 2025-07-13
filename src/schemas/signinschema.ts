import * as z from 'zod'

export const signinSchema=z.object({
     identifier:z.string()
     .min(1,{message:"email is required"})
     .email({message:"please enter valid email"}),
     
     password:z.string()
     .min(8,{message:"password should be 8 character"}),


})