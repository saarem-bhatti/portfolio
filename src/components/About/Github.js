import React from 'react'
import GitHubCalendar from 'react-github-calendar'

/* Component of the about section which consists of my github contributions. */
function Github() {
  return (
    <div className='github-container'>
      {/* Component Title */}
      <h1 className='heading' style={{ marginBottom: '20px' }}>
        My <strong className='purple' children='Contribution' /> History
      </h1>

      {/* GitHub Calender */}
      <GitHubCalendar
        username='saad-bhatti'
        blockSize={15}
        blockMargin={5}
        color='#c084f5'
        fontSize={16}
      />
    </div>
  )
}

export default Github
