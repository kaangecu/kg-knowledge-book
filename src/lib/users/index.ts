// Key ===   6267d008536f373aeb532ca6
import   {dummyapi,reqres}  from "../index";


export const getUsersDummyApi = async ()=>{
  let params = new URLSearchParams();
  params.append("limit", "10")

  const response = await dummyapi.get("/user", { params });
  
  return  response?.data;
}

export const getUsersReqresApi = async ()=>{
  let params = new URLSearchParams();
  params.append("page", "1")

  const response = await reqres.get("/users", { params });
  
  return  response?.data;
}
