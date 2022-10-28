export default async function getServerSideProps(context) {
  const isUserloggedIn = await verify(context);
  //other
  return {
    props: isUserloggedIn,
  };
}

export async function verify(context) {
  let result = { isUserloggedIn: false };
  const token = await context.req.cookies.token;
  if (token === undefined) {
    return result;
  }

  const response = await fetch(`${process.env.HOST}/api/verifyuser`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const data = await response.json();

  if (data.message === "access allowed") result.isUserloggedIn = true;
  else {
    console.log(data.message);
    result.isUserloggedIn = false;
  }
  return result;
}
