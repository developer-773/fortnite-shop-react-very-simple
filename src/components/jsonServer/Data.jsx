import React, { useEffect } from 'react'
import  secureLocalStorage  from  "react-secure-storage";


export const Data = () => {

    useEffect(() => {
	    secureLocalStorage.setItem("object", {
		    message:  "This is testing of local storage",
	    });
	    secureLocalStorage.setItem("number", 12);
	    secureLocalStorage.setItem("string", "12");
	    secureLocalStorage.setItem("boolean", true);
	    let value = secureLocalStorage.getItem("boolean");
	}, []);
  
  return (
    <div>Data</div>
  )
}
