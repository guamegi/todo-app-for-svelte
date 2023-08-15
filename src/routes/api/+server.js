import { json } from "@sveltejs/kit";

export async function GET({ fetch, request }) {
  // return new Response(JSON.stringify({ name: "kwon" }));
  return json({ name: "kwon" });
}

// export async function POST({ fetch, request }) {
//   return new Response(JSON.stringify({ name: "kwon" }));
// }

// export async function POST(event) {
//   const body = await event.request.formData();

//   console.log([...body]);

//   return json({
//     name: body.get("name"),
//   });
// }

// export async function POST(request) {
//   const { email, password } = JSON.parse(request.body);

//   // 여기에서 email과 password를 이용한 로그인 로직을 작성합니다.
//   // 예시: 단순히 로그인 정보를 콘솔에 출력
//   console.log(
//     `Received login request - Email: ${email}, Password: ${password}`
//   );

//   return {
//     status: 200,
//     body: { message: "Login request received" },
//   };
// }
