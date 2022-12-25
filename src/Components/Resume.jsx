import { Button, Link } from '@chakra-ui/react'
import React from 'react'
import RESUME from "../assets/cv.pdf"
import { FiDownload } from 'react-icons/fi';
const Resume = () => {
  return (
    <Link href={RESUME} download={RESUME}>
    {/* <a href="https://drive.google.com/file/d/19axX1WjYJE60ovQ2pueKvgZsFORhn_MB/view?usp=share_link"> */}
    <Button rightIcon={<FiDownload />} bg={"#319795"}>RESUME</Button>
    {/* </a> */}
    </Link>
  )
}

export default Resume