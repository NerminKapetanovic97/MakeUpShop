"use client"
import { useEffect, useState } from "react"

export default function Shop({params}) {
    //console.log(params.category)
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://makeup-api.herokuapp.com/api/v1/products/" + params.id, {
          method: "GET",
          headers: {
            'Accept': 'application/json'
          },
        })
            .then((response) => response.json())
            .then((data) => {
              setData(data);
              console.log(data);
            })
            .catch((error) => console.log(error));
      }, []);

    return (
      <main>

          <header className="bg-dark py-5">
              <div className="container px-4 px-lg-5 my-5">
                  <div className="text-center text-white">
                      <h1 className="display-4 fw-bolder">Our shop</h1>
                      <p className="lead fw-normal text-white-50 mb-0">Check out our products</p>
                  </div>
              </div>
          </header>
         
          <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    
               
                    <div className="col mb-5" key={data.id}>
                        <div className="card h-100">
                            
                            <img className="card-img-top" src={data.api_featured_image} alt="..." />
                           
                            <div className="card-body p-4">
                                <div className="text-center">
                                  
                                    <h5 className="fw-bolder">{data.name}</h5>
                                    
                                    ${data.price} 
                                </div>
                            </div>
                           
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                               
                            </div>
                        </div>
                    </div>
        
                   
                   
                </div>
            </div>
          </section>
         
         
  
      </main>
    )
  }
  