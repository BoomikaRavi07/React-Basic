function File(){
   
    const json =[
        {
            name:'Ramesh',
            course:'FSD',
            Duration:'6 Months'
        },
        {
            name:'Ganesh',
            course:'PGA',
            Duration:'9 Months'
        },
        {
            name:'Rohini',
            course:'FSD',
            Duration:'6 Months'
        },
        {
            name:'Anitha',
            course:'PGA',
            Duration:'9 Months'
        },
        {
            name:'Virat',
            course:'FSD',
            Duration:'6 Months'
        }       
    ]
    return(
        <>
          <h2>Imarticus Learning</h2>
          <h4>Student details</h4>
        <ul>
            {json.map((field)=>(
                <div>
                    Name : {field.name}<br></br>
                    Course : {field.course}<br></br>
                    Duration : {field.Duration}<br></br>
                    <br></br>
                </div>
            ))}
        </ul>
        </>
    )
}
export default File