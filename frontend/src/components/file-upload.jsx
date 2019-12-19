import React from "react"
import { Button, Input, Box } from "@material-ui/core"
import { post } from "axios"
import ProgressBar from "./progress"
import DropzoneFile from "./dropzone-file"
// import Dropzone from "react-dropzone"
import { reduxForm, Field } from "redux-form"

// TODO:
/**
 * Return file fix error
 */

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
    this.onDrop = (file) => {
      this.setState({ file })
    }
    this.state = {
      file: null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }

  onFormSubmit(e) {
    const { file } = this.state
    console.log(file)
    e.preventDefault()
    this.fileUpload(file)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  onChange(e) {
    this.setState({ file: e.target.files[0] })
  }

  fileUpload(file) {
    const url = "http://dev-c2k.canadacentral.cloudapp.azure.com:5000/api/upload"
    const formData = new FormData()
    formData.append("compose_file", file)
    const headerOptions = {
      headers: {
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*"
      }
    }
    return post(url, formData, headerOptions)
  }

  render() {
    const classes = useStyles()
    return (
      <div>
        <form
          onSubmit={this.onFormSubmit}
          encType="multipart/form-data"
          className={classes.form}
        >
          <Input
            id="compose_file"
            type="file"
            name="compose_file"
            onChange={this.onChange}
          />
          <Field component={DropzoneFile} id="compose_file" name="compose_file" />
          <label htmlFor="compose_file">
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
