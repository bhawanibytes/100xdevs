import {z} from 'Zod';
import express from 'express';

const app = express();
// Define the schema for profile update
const userProfileSchema = z.object ({
    name: z.string().min(1, { message: "Name cannot be empty"}),
    email: z.string().email({ message: "Invalid email format" }),
    age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
})

app.put("/user", (req, res) => {
    const {success} = userProfileSchema.safeParse(req.body);
    const updateBody: z.infer<typeof userProfileSchema> = req.body 

    if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
})

app.listen(3000);