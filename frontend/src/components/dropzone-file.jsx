import React, { useMemo } from "react"
import { Box } from "@material-ui/core"
import { useDropzone } from "react-dropzone"

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto",
  padding: "2vh",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out"
}

const activeStyle = {
  borderColor: "#2196f3"
}

const acceptStyle = {
  borderColor: "#00e676"
}

const rejectStyle = {
  borderColor: "#ff1744"
}

function DropzoneFile() {
  const { getRootProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    accept: "/"
  })

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isDragActive, isDragReject]
  )

  return (
    <Box m={2}>
      <div {...getRootProps({ style })}>
        <p>Drag and drop some files here</p>
      </div>
    </Box>
  )
}

export default DropzoneFile
