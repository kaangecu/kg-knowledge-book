// Key ===   6267d008536f373aeb532ca6
import   client  from "../index";


export const getUsers = async ()=>{
  let params = new URLSearchParams();
  params.append("limit", "10")
  // searchedAnalytic && params.append("websiteUrl", searchedAnalytic);
  // searchedDateTimes.minDate && params.append("minDate", searchedDateTimes.minDate);
  // searchedDateTimes.maxDate && params.append("maxDate", searchedDateTimes.maxDate);

  const response = await client.get("/user", { params });
  
  return  response?.data;
}
