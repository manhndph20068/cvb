import { withAuth } from "next-auth/middleware";

export default withAuth({
  // Matches the pages config in `[...nextauth]`
  secret: process.env.NEXTAUTH_SECRET,
});

export const config = { matcher: ["/theo-doi"] };
