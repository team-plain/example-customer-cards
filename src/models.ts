import { z } from 'zod';

export const RequestBody = z.object({
  keys: z.array(z.string()),
  customer: z.object({
    externalId: z.string(),
    email: z.string(),
  }),
});
export type RequestBody = z.infer<typeof RequestBody>;

export const Card = z.object({
  key: z.string(),
  timeToLiveSeconds: z.number().int().min(0).nullish().default(null),
  // TODO We don't have easily usable zod models for components yet
  // and I don't want to yet mantain a copy here, any will do!
  components: z.array(z.any()).nullable(),
});
export type Card = z.infer<typeof Card>;

export const ResponseBody = z.object({
  cards: z.array(Card),
});
export type ResponseBody = z.infer<typeof ResponseBody>;
