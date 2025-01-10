import { auth } from "@clerk/nextjs/server";
import { getProducts } from "../server/db/products";

export default async function DashboardPage() {
    const {userId, redirectToSignIn} = await auth();
    if (userId == null) return redirectToSignIn();

    const products = await getProducts(userId, {limit: 6});

    if(products.length === 0) {
        return <div>No products</div>
    }
    return null
}