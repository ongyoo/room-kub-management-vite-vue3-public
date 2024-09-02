import blueimpLoadImage from 'blueimp-load-image'

export const resizeImageToUpload = (
  file: any,
  options: any,
  checkImageSize: boolean
): Promise<any> => {
  return new Promise((resolve, reject) => {
    blueimpLoadImage(
      file,
      (canvas: any, data: any) => {
        if (canvas.type === 'error') {
          reject({
            errorMessage: 'file format not match jpeg,jpg,png',
            errorCode: '1052',
            errorDetail: file.type,
          })
          return
        }
        if (
          checkImageSize &&
          (data.originalWidth < 720 || data.originalHeight < 720)
        ) {
          reject({ errorMessage: 'image too small', errorCode: '1055' })
          return
        }
        canvas.toBlob(
          (blob: any) => {
            resolve(
              new File([blob], file.name, {
                type: file.type,
                lastModified: file.lastModified,
              })
            )
          },
          file.type,
          0.5
        )
      },
      { ...options, ...{ orientation: true } }
    )
  })
}
