import Main from "@/src/components/subscription/main";
import { sendRequest } from "@/src/utils/api";
import { authOptions } from "@/src/utils/authOptions";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Truyện đang theo dõi",
  description: "subscriptionspage",
};

const TheoDoiPage = async () => {
  const session = await getServerSession(authOptions);

  let resSubscriptions;
  if (session) {
    resSubscriptions = await sendRequest<IBackendResponse<Subscriptions[]>>({
      url: `${process.env.NEXT_PUBLIC_BE_URL}/api/v1/subscriptions/findSubscriptionsByAccountId`,
      method: "POST",
      body: {
        idAccount: session?.userInfo?.id,
      },
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      },
      nextOption: {
        next: { tags: ["subscriptions-by-user"] },
      },
    });
  }

  return (
    <>
      <Main resSubscriptions={resSubscriptions || undefined} />
    </>
  );
};
export default TheoDoiPage;
