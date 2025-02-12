import React from 'react'

const PodcastDetails = ({ params }: { params: { podcasdId: string } }) => {
	return (
		<p className='text-white-1'>PodcastDetails for {params.podcasdId} </p>
	)
}

export default PodcastDetails