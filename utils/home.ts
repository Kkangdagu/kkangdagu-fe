'use server';

export const getOnBoarding = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/re/real-estate-notice/selectAll`,
  );
  return response.json();
};

export const getPolicyLetter = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/re/real-estate-policy-letter/selectAll`,
  );
  return response.json();
};

export const getPolicyLetterUser = async (email: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/re/real-estate-policy-letter/selectPaging?email=${email}`,
  );
  return response.json();
};

export const getLatestPolicy = async (page: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/re/real-estate-latest-policy/selectPaging?page=${page}`,
    { next: { tags: ['latest_policy'] } },
  );
  return response.json();
};
