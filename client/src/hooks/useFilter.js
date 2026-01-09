import { useState } from "react";

export function useFilter(datalist,callback){

    const [query,setQuery]=useState('');
    
    const filterData = datalist.filter((item)=>{
        return callback(item).toLocaleLowerCase().includes(query)
      });

    return [filterData,setQuery]
}