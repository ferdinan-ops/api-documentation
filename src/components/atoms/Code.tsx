interface CodeProps {
  raw: string
}

export default function Code({ raw }: CodeProps) {
  return (
    <pre className="rounded-lg custom-scrollbar">
      <code className="language-javascript" style={{ fontSize: 14 }}>
        {raw}
      </code>
    </pre>
  )
}
