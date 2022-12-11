
export function PlanetData(props){
    // const cost = ''
    // if (props.cost_in_credits == 'unknown' ){
    //     cost = 'unknown' 
    // }
    console.log(props.manufacture)
    return(
      <>
     
        <div className="PlanetData"> 
    
            Name:{props.name} <br/>
            Model:{props.model} <br/>
            Cost:{ props.cost}


        </div>
        </>
    )
}

