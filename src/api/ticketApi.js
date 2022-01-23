import axios from "axios"

const getAllTickets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:8090/v1/ticket", {
        headers: {
          Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYWRraGFuQGdtYWlsLmNvbSIsImlhdCI6MTY0Mjg0NzIwNCwiZXhwIjoxNjQyOTMzNjA0fQ.vNtNQXelc56smLsL0kAOrMVXk1tm0hlc1FaAbP9QQ7Q"
        }
      })
      resolve(result)
    } catch (error) {
      reject(error)
    }
  })
}

export default getAllTickets
