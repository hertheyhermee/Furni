import './team.css'

const Team = ({teamName, teamImage,  teamPosition, teamDetails, teamMore}) => {
    return ( 
        <div className="teams d-flex justify-content-center flex-column">
        <img src={teamImage} alt="" className="mb-4 img-fluid " />
        <a href=""><h3 className="text-capitalize fw-marginally-bold color-primary mb-3">{teamName}</h3></a>
        <span className='mb-4'>{teamPosition}</span>
        <p className="">{teamDetails}</p>
        <p className='linkss'><a href="/" >{teamMore}</a></p>
    </div>
     );
}
 
export default Team ;