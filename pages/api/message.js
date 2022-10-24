// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const data = JSON.stringify({ message: 'メッセージ' })
  res.status(200).json(data)
}
