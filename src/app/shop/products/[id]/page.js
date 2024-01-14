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
                  <div  className="text-center text-white">
                      <h1 className="display-4 fw-bolder">{data.name}</h1>
                      <p style={{textTransform: "capitalize"}} className="lead fw-normal text-white-50 mb-0" >{data.category}</p>
                  </div>
              </div>
          </header>
         
          <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-12 justify-content-center">
                    
               
                    <div className="col-4 mb-5" key={data.id}>
                        <div className="card h-100">
                            
                            <img className="card-img-top" src={data.api_featured_image} alt="..." />
                           
                            <div className="card-body p-4">
                                <div className="text-center">
                                  <h6>Price: </h6>
                                  <h3>{data.price} {data.price_sign}</h3>
                            
                                </div>
                            </div>
                           
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-8 mb-5"> 
                      <h6>Brand: </h6>
                      <a  href={"/shop/brand/" + data.brand} style={{textTransform: "capitalize"}}><strong>{data.brand}</strong></a>
                      <h6>Tags:</h6>
                       
                    {data.tag_list?.map(function(tag) {
                      return(
                        
                        <span class="badge bg-secondary mx-1" >{tag}</span>
                      )})}
                      
                      
                     
                      <hr/>
                      <h6>Description: </h6>
                      <p>{data.description}</p>
                      <hr/>

                      <h6>Colors: </h6>
                    <div className="productColors">
                      {data.product_colors?.map(function(color){
                        
                        return(
                          
                        <div style={{display:"flex", minWidth:"25"}}>  
                          <div className="colorCircle" style={{background : color.hex_value}}> </div>
                          <div> {color.colour_name}</div>
                          </div>
                          
                        )
                          

                      })}
                    </div>
                    </div>
        
                   
                   
                </div>
            </div>
          </section>
         
         
  
      </main>
    )
  }
  