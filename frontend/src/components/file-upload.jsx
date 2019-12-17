import React from "react"
import { Button, Input, Box } from "@material-ui/core"
import { post } from "axios"
import ProgressBar from "./progress"
import DropzoneFile from "./dropzone-file"

const useStyles = () => ({
  form: {
    with: "100%",
    display: "flex",
    flexDirection: "column"
  }
})

class FileUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }

  onFormSubmit(e) {
    const { file } = this.state
    e.preventDefault()
    this.fileUpload(file).then((response) => {
      console.log(response.data)
    })
  }

  onChange(e) {
    this.setState({ file: e.target.files[0] })
  }

  fileUpload(file) {
    const url = "http://localhost:5000"
    const formData = new FormData()
    formData.append("file", file)
    const headerOptions = {
      headers: {
        "content-type": "multipart/form-data"
      }
    }
    return post(url, formData, headerOptions)
  }

  render() {
    const classes = useStyles()
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className={classes.form}>
          <Input id="input" type="file" name="file" onChange={this.onChange} />
          <DropzoneFile />
          <label htmlFor="file">
            <Box m={2}>
              <Button
                type="submit"
                variant="outlined"
                alt="convert button"
                value="upload"
              >
                Upload
              </Button>
            </Box>
          </label>
          <ProgressBar />
        </form>
      </div>
    )
  }
}

export default FileUpload
