import { db } from "@/app/drizzle/db";
import { UserSubscriptionTable } from "@/app/drizzle/schema";

export function createUserSubscription
(data: typeof UserSubscriptionTable.$inferInsert){
    return db.insert(UserSubscriptionTable).values(data).onConflictDoNothing({
        target: UserSubscriptionTable.clerkUserId,
    });
}