import * as z from 'zod'
import { email } from 'zod/v4'

export const signupSchema=z.object({
     email:z.string()
     .min(1,{message:"email is required"})
     .email({message:"please enter valid email"}),
     
     password:z.string()
     .min(8,{message:"password should be 8 character"}),

     passwordConfirmation:z.string()
     .min(1,{message:"please comfirm your password"})

}).refine((data)=>data.password===data.passwordConfirmation,{
    message:"password do not match",
    path:["passwordConfirmation"]
})