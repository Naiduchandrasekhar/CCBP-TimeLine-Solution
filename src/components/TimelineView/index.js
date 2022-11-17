// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="mainContainer">
      <div className="chronoContainer">
        <h1 className="myJourney">
          MY JOURNEY OF <br /> <br /> CCBP 4.0
        </h1>
        <Chrono
          slideShow
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
          theme={{
            secondary: 'white',
          }}
        >
          {timelineItemsList.map(eachOne => {
            if (eachOne.categoryId === 'PROJECT') {
              return (
                <ProjectTimelineCard
                  key={eachOne.id}
                  projectDetails={eachOne}
                />
              )
            }
            return (
              <CourseTimelineCard key={eachOne.id} courseDetails={eachOne} />
            )
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
