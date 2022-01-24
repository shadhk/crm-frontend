import axios from "axios"

const getAllTickets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:8090/v1/ticket", {
        headers: {
          Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYWRraGFuQGdtYWlsLmNvbSIsImlhdCI6MTY0MzAzMzg5NCwiZXhwIjoxNjQzMTIwMjk0fQ.qwuEg7HmkBRt0POgD8atxvCdZ42oV_dR5-eVxHv8M_c"
        }
      })
      resolve(result)
    } catch (error) {
      reject(error)
    }
  })
}

export default getAllTickets
