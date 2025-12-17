import { ButtonPassThrough } from "primeng/button"
import { FileUploadPassThrough } from "primeng/fileupload"

export const exportButtonPT: ButtonPassThrough = {
  host: {
    style: 'box-shadow: 0px 1px 1px 0px #02001799;',
  },
  label: {
    class: 'hidden md:block',
  },
}

export const importButtonPT: FileUploadPassThrough = {
  host: {
    style: 'box-shadow: 0px 1px 1px 0px #02001799;',
  },
  pcChooseButton: {
    label: {
      class: 'hidden md:block',
    }
  },
}