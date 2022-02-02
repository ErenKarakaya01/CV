import React, { useState } from "react"
import { Col } from "reactstrap"
import useWriteDelayed from "../../hooks/useWriteDelayed"

const Dashboard = () => {
  const [writing, setWriting] = useState("")
  let article = "Hi. It's my portfolio. Nothing more XD."

  useWriteDelayed(writing, setWriting, article)

  return (
    <div>
      <Col className="col-sm-12 col-md-12 col-xs-12 m-0" id="dashboard">
        {writing}
      </Col>
    </div>
  )
}

export default Dashboard
