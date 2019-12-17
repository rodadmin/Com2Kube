import React, { useMemo, useCallback } from "react"
import { Box, Paper } from "@material-ui/core"
import { useDropzone } from "react-dropzone"
import RootRef from "@material-ui/core/RootRef"

// TODO:
/**
 * error handle + validation msg
 * error when the user select img
 * maximum file and minimum
 * one file at the time (ATM)
 * clean and reduce code
 */

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
  const { isDragActive, isDragAccept, isDragReject } = useDropzone({
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

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps } = useDropzone()
  const { ref, ...rootProps } = getRootProps()
  console.log(getRootProps)

  return (
    <RootRef rootRef={ref}>
      <Box m={2}>
        <Paper {...rootProps}>
          <div {...getRootProps({ style })}>
            {/* <input {...getInputProps()} /> */}
            <p>Drag and drop some files here</p>
          </div>
        </Paper>
      </Box>
    </RootRef>
  )
}

export default DropzoneFile
