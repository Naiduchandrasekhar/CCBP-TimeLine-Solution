// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    projectUrl,
    duration,
  } = projectDetails
  return (
    <>
      <div className="project-timeline-card-container">
        <img src={imageUrl} className="project-image" alt="project" />
        <div className="project-time-duration-container">
          <h1 className="project-heading">{projectTitle}</h1>
          <div className="duration-container">
            <AiFillCalendar color="#171f46" />
            <p className="duration">{duration}</p>
          </div>
        </div>
        <p className="project-description">{description}</p>
        <a className="visit-link" href={projectUrl}>
          Visit
        </a>
      </div>
    </>
  )
}

export default ProjectTimelineCard
