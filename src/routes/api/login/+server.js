// import { json } from "@sveltejs/kit";

export async function POST({ request }) {
  // const { email, password } = JSON.parse(request);
  const { email, password } = await request.json();

  // 여기에서 email과 password를 이용한 로그인 로직을 작성합니다.
  // 예시: 단순히 로그인 정보를 콘솔에 출력
  console.log(
    `Received login request - Email: ${email}, Password: ${password}`
  );

  const newContent = {
    id: 1,
    email,
    password,
  };
  // db 업데이트 로직

  // return {
  //   status: 200,
  //   body: { message: "Login request received" },
  // };
  // return json("Login request received", { status: 200 });
  return new Response(JSON.stringify(newContent), {
    status: 201,
  });

  // return new Response({
  //   status: 201,
  //   body: { message: "Login request received" },
  // });
  // return new Response("ㅇㅇ", {
  //   status: 201,
  //   zzz: { message: "Login request received" },
  // });
}
