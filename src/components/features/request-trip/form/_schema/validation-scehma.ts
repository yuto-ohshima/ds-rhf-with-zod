import { z } from "zod";

export const requestTripInputZodSchema = z.object({
  hotelInn: z.string().min(1, { message: 'ホテル・旅館名を入力してください '}),
  name: z.string().min(1, { message: 'お名前を入力してください' }),
	email: z.string().min(1, { message: 'メールを入力してください' }).email({ message: "正しいメールの形式ではありません" }),
  checkDate: z.object({
    in: z.string().min(1, { message: 'チェックイン日を入力してください' }),
    out: z.string().min(1, { message: 'チェックアウト日を入力してください' }),
  })
}).superRefine(({ checkDate }, ctx) => {
  if (!checkDate.in || !checkDate.out) return;

  const parsedIn = new Date(checkDate.in);
  const parsedOut = new Date(checkDate.out);
  if (parsedIn > parsedOut) {
    ctx.addIssue({
      path: ["checkDate.in"],
      code: z.ZodIssueCode.custom,
      message: "チェックイン日がチェックアウト日より後になっています",
    });
  } else if (parsedIn === parsedOut) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "チェックイン日とチェックアウト日が同じです",
      path: ["checkDate.in"],
    });
  }

});

export type RequestTripInputZodSchemaInputType = z.infer<typeof requestTripInputZodSchema>;
