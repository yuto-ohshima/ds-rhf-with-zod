import { z } from "zod";

export const requestTripInputZodSchema = z.object({
  hotelInn: z.string({ required_error: "ホテル・旅館名を入力してください" }),
  name: z.string({ required_error: "お名前を入力してください" }),
	email: z.string().email({ message: "正しいメールの形式ではありません" }),
});

export type RequestTripInputZodSchemaInputType = z.infer<typeof requestTripInputZodSchema>;
