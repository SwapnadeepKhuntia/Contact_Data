import axios from "axios"
import { useEffect, useState } from "react";


function AllcontactData() {

    const [data, setData] = useState([])
    console.log(data);

     async function listdata() {
            axios.get("https://contact-data-1-nmsd.onrender.com/api/v1/contact/getallcontacts")
               .then((res)=>{
                 console.log(res);  
                   setData(res.data.contacts); 
                     })
                  .catch((err)=>{
                  console.log(err);
                  })
        }

        const deletedata=(id)=>{
           setData((prev)=>prev.filter((item)=>item._id!== id));    
          }
    
      useEffect(() => {
        listdata();
       }, []);

  
    
  return (
     <>
    <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
  <table className="min-w-full bg-white text-sm text-gray-700">
    
    {/* Table Head */}
    <thead className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800">
      <tr>
        <th className="px-6 py-3 text-left font-semibold">ID</th>
        <th className="px-6 py-3 text-left font-semibold">Name</th>
        <th className="px-6 py-3 text-left font-semibold">Email</th>
        <th className="px-6 py-3 text-left font-semibold">Mobile</th>
        <th className="px-6 py-3 text-left font-semibold">Message</th>
        <th className="px-6 py-3 text-center font-semibold">Delete</th>
      </tr>
    </thead>

    {/* Table Body */}
    <tbody className="divide-y divide-gray-200">
      {data.map((contact, index) => (
        <tr
          key={contact._id}
          className="hover:bg-gray-50 transition duration-200"
        >
          <td className="px-6 py-4 font-medium text-gray-600">
            {index + 1}
          </td>

          <td className="px-6 py-4 font-semibold text-gray-800">
            {contact.Name}
          </td>

          <td className="px-6 py-4 text-gray-600">
            {contact.email}
          </td>

          <td className="px-6 py-4 text-gray-600">
            {contact.Phone}
          </td>

          <td className="px-6 py-4 max-w-xs truncate text-gray-500">
            {contact.message}
          </td>

          <td className="px-6 py-4 text-center">
            <button
              onClick={() => deletedata(contact._id)}
              className="bg-red-500 hover:bg-red-600 active:scale-95 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


     </>
  )
}

export default AllcontactData