import axios from 'axios'

export async function uploadImage(formData) {
    try {
        const response = await axios.post("https://api.cloudinary.com/v1_1/jshred/image/upload", formData)
        const url = response.data.secure_url
        // console.log(url)
        return url
    } catch (error) {
        console.log(error)
    }

}