import { initTRPC } from "@trpc/server";
import { z } from "zod";
const t = initTRPC.create();

export const appRouter = t.router({
  hello: t.procedure
    .input(
      z
        .object({
          text: z.string().nullish(),
        })
        .nullish()
    )
    .query((req) => {
      return `Hello ${req.input?.text}`;
    }),
  hello2: t.procedure.input(z.object({
    amount: z.number().optional().default(1),
  })).mutation(({ input }) => {
    console.log(`Hello World!`);
    for (let i = 0; i < input.amount; i++) {
      figma.createRectangle();
    }
   
  }),
});

export type AppRouter = typeof appRouter;
