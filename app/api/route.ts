import { NextApiRequest } from 'next';

export function GET(request: NextApiRequest) {
  console.log(request);

  // return Response.json();
  return new Response('Hello!');
}

// export function POST(request) {}